import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Header from "../component/Header";

const ContactPage=()=>{
    return(
        <div className="min-h-screen grid grid-row-3">
            <Header/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default ContactPage;