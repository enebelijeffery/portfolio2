import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer=()=>{
    return(
        <footer className=" py-6 text-white bg-gray-800">
            <div className="container mx-auto text-center mb-6">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <a href="https://github.com/enebelijeffery" target="_blank" rel="noreferrer">
                            <FaGithub size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jayjeffery13" target="_blank" rel="noreferrer">
                            <FaTwitter size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/enebelijeffery" target="_blank" rel="noreferrer">
                            <IoLogoInstagram size={40}/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+2347054253903" target="_blank" rel="noreferrer">
                            <BsWhatsapp size={40}/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Jeffery Enebeli. All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;