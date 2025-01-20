import About from "../component/About";
import Footer from "../component/Footer";
import Header from "../component/Header";

const AboutPage=()=>{
    return(
        <div className="min-h-screen grid grid-row-3">
            <Header />
            <About />
            <Footer/>
        </div>
    )
}
export default AboutPage;