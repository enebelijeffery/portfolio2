import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const html = document.querySelector('html');
    if (isDarkMode) {
      html.setAttribute('data-theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
