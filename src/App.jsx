import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import starImg from "./assets/stars.jpg";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

const Portfolio = () => {
  return (
    <div className="min-h-screen  bg-black w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
};

export default Portfolio;
