import { use } from 'react';
import { useState, useEffect } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import './Header.css';


const Header = () => {
  const [isScroll, setIsScroll] = useState(false);


  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false)
    }
  }, [window.scrollY]
  )


  return (
    <header className={isScroll ? `fixed top-0 z-50 w-full   text-white py-4 bg-gray-800` : '  py-4 text-white bg-gray-800'}>
      <div className="container mt-5 mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold"><Link to={'/'}>Jeffery Enebeli</Link></h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-teal-400 text-lg">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 text-lg">About</Link></li>
            <li><Link to="/projects" className="hover:text-teal-400 text-lg">Projects</Link></li>
          </ul>
        </nav>
        <div className='flex space-x-6'>
          <a href="https://github.com/enebelijeffery" target='blank'><FaGithub size={24} className="hover:text-teal-400" /></a>
          <a href="https://twitter.com/enebelijeffery" target='blank'><FaTwitter size={24} className="hover:text-teal-400" /></a>
          <a href="https://instagram.com/enebelijeffery" target='blank'><IoLogoInstagram size={24} className="hover:text-teal-400" /></a>
          <a href="https://wa.me/+2347054253903" target='blank'><BsWhatsapp size={24} className="hover:text-teal-400" /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;