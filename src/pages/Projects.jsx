import Footer from "../component/Footer";
import Header from "../component/Header";
import Projects from "../component/Project";

const ProjectsPage=()=>{
    return(
        <div className="min-h-screen grid grid-row-3">
            <Header/>
            <Projects/>
            <Footer/>
        </div>
    )
}
export default ProjectsPage;