import Footer from "../component/Footer";
import Header from "../component/Header";
import Projects from "../component/Project";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import starImg from "../assets/stars.jpg";

const ProjectsPage=()=>{
    const mountRef = useRef(null);
    const [contentLoaded, setContentLoaded] = useState(false);
  
    useEffect(() => {
      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;
  
      let renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (mountRef.current) mountRef.current.appendChild(renderer.domElement);
  
      const starGeo = new THREE.BufferGeometry();
      const starVertices = [];
  
      for (let i = 0; i < 10000; i++) {
        let x = (Math.random() - 0.5) * 2000;
        let y = (Math.random() - 0.5) * 2000;
        let z = (Math.random() - 0.5) * 2000;
        starVertices.push(x, y, z);
      }
  
      const positions = new Float32Array(starVertices);
      starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  
      let sprite = new THREE.TextureLoader().load(starImg);
      let starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
        map: sprite,
        transparent: true,
      });
  
      let stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);
  
      let speed = 10; 
      let slowdownComplete = false;
  
      const animate = () => {
        const positions = starGeo.attributes.position.array;
  
        for (let i = 1; i < positions.length; i += 3) {
          positions[i] -= speed;
          if (positions[i] < -1000) {
            positions[i] = 1000;
          }
        }
  
        starGeo.attributes.position.needsUpdate = true;
  
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };
  
      animate();
  
      gsap.to({ speed: 10 }, {
        duration: 3,
        speed: 0.2,
        onUpdate: function () {
          speed = this.targets()[0].speed;
        },
        onComplete: function () {
          slowdownComplete = true;
          setContentLoaded(true);
        },
      });
  
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
      };
    }, []);
    return(
        <div className="relative min-h-screen grid grid-row-3">
            {/* <div ref={mountRef} className="absolute min-h-screen top-0 left-0 w-full h-full -z-1"></div> */}
            <Header/>
            <Projects/>
            <Footer/>
        </div>
    )
}
export default ProjectsPage;