import React from 'react';
import {motion} from 'framer-motion'
import resume from '../assets/cv.pdf'
import { Link } from 'react-router-dom';
// import './Hero.css';

const Hero = () => {
    return (
        <motion.section 
        className=" text-white py-20 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,  }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Jeffery Enebeli</h2>
          <p className="text-lg mb-8">A Full-Stack Developer passionate about building creative solutions.</p>
          <div className="space-x-4">
            <a href={resume}  target='blank' className="bg-gray-900 text-white py-2 px-6 rounded hover:bg-gray-700">Resume</a>
            <a href='mailto:enebelijeffery@gmail.com' className="bg-white text-teal-500 py-2 px-6 rounded hover:bg-gray-100">Contact Me</a>
          </div>
        </div>
      </motion.section>  
    );
};

export default Hero;