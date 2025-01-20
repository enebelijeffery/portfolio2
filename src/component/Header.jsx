import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { BsWhatsapp } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`py-4 text-white bg-gray-800 ${isScroll ? 'shadow-md' : ''}`}>
      <div className="container mt-5 mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold"><Link to={'/'}>Jeffery Enebeli</Link></h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
        <nav className={`fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:space-x-6 lg:bg-transparent lg:translate-x-0 lg:w-2/3 lg:justify-between`}>
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white lg:hidden">
            <HiX size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
            <li><Link to="/" className="hover:text-teal-400 text-lg" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 text-lg" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/projects" className="hover:text-teal-400 text-lg" onClick={toggleMenu}>Projects</Link></li>
          </ul>
          <div className="flex space-x-6 mt-6 lg:mt-0">
            <a href="https://github.com/enebelijeffery" target='blank'><FaGithub size={24} className="hover:text-teal-400" /></a>
            <a href="https://twitter.com/enebelijeffery" target='blank'><FaTwitter size={24} className="hover:text-teal-400" /></a>
            <a href="https://instagram.com/enebelijeffery" target='blank'><IoLogoInstagram size={24} className="hover:text-teal-400" /></a>
            <a href="https://wa.me/+2347054253903" target='blank'><BsWhatsapp size={24} className="hover:text-teal-400" /></a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;