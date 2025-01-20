import React from 'react';
import { motion } from 'framer-motion';
import nextjs from '../assets/nextjs.svg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import chakraui from '../assets/chakraui.svg';
import expo from '../assets/expo.svg';
import express from '../assets/express.svg';
import figma from '../assets/figma.svg';
import framer from '../assets/framer.svg';
import js from '../assets/js.svg';
import mongo from '../assets/mongo.svg';
import node from '../assets/node.svg';
import postgres from '../assets/postgres.svg';
import prisma from '../assets/prisma.svg';
import python from '../assets/python.svg';
import react from '../assets/react.svg';
import supabase from '../assets/supabase.svg';
import tailwind from '../assets/tailwind.svg';
import typescript from '../assets/typescript.svg';
import profile from '../assets/profile.webp';
import skills from '../assets/skills.svg';

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-800 text-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <motion.div
          className='bg-white border mt-5'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="flex flex-col mt-6 md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <img src={profile} alt="Your Photo" className="w-48 h-48 rounded-full shadow-md" />
          <p className="text-base md:text-lg md:w-2/3">
            Hi, I’m Jeffery Enebeli, a passionate web developer and a web3 enthusiast focused on building clean, responsive, and user-friendly web applications. I specialize in frontend and backend development using technologies like React, TailwindCSS, Node.js, and PostgreSQL.
            <br /><br />
            I enjoy working on a wide range of projects, from AI-driven tools to e-commerce platforms, always aiming to create seamless user experiences and efficient systems.
            <br /><br />
            When I’m not coding, I love staying active, learning new technologies, and spending time with friends and family.
            <br /><br />
            Let’s collaborate and build something amazing together!
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <motion.div
            className='bg-white border mt-5'
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <div className='flex justify-center'>
            <motion.div
              style={{
                display: 'flex',
                flexWrap: 'wrap'
              }}
              className=' bg-opacity-10 bg-white mt-7'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative group">
                <motion.img
                  src={nextjs}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Next.js
                </div>
              </div>
              {/* Repeat similar blocks for other skills */}
              <div className="relative group">
                <motion.img
                  src={html}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  HTML
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={css}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CSS
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={chakraui}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Chakra UI
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={expo}
                  className='h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Expo
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={express}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Express
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={figma}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Figma
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={framer}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Framer
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={js}
                  className='h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  JavaScript
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={mongo}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  MongoDB
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={node}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Node.js
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={postgres}
                  className='h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  PostgreSQL
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={prisma}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Prisma
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={python}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Python
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={react}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  React
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={supabase}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Supabase
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={tailwind}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Tailwind CSS
                </div>
              </div>
              <div className="relative group">
                <motion.img
                  src={typescript}
                  className='max-h-20'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  TypeScript
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;