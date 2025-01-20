import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";

const HomePage=()=>{
    return(
        <div className="min-h-screen grid grid-row-3">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    )
}
export default HomePage;