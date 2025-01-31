import { motion, useInView } from 'framer-motion';
import dasboard from '../assets/dashboard.png'
import Fchatbot from '../assets/Fchatbot.png'
import expensetraker from '../assets/expensetraker.png'
import ecom from '../assets/ecom.png'
import { useRef } from 'react';

const ProjectCard = ({ projectName, projectDiscription, projectLink = '#', projectTech, productImage }) => {
  const ref = useRef(null)
  const isInview = useInView(ref,{once:true})
  return (
    <motion.div
    ref={ref}
    initial={{opacity:0, scale:0.5}}
    animate={isInview&&{opacity:1,scale:1}}
    transition={{duration:1}}
    >
      <div className=" shadow-md rounded-lg p-4 bg-gray-800">
        <img src={productImage} alt="Project Thumbnail" className="rounded mb-4" />
        <h3 className="text-xl font-semibold">{projectName}</h3>
        <p className=" mb-4 text-white">{projectDiscription}</p>
        <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
        <ul>
          {projectTech.map((tech, i) => {
            return (
              <li>{tech}</li>
            )
          })}
        </ul>
        <a href={projectLink} className="text-teal-500 hover:underline" target='blank'>View Details</a>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      projectName: "Admin Dashboard",
      projectDiscription: "This project is a feature-rich admin dashboard built with React and Material-UI. It provides a clean and intuitive interface for managing various aspects of an application. The dashboard includes multiple scenes and components, each designed to handle specific tasks efficiently.",
      projectLink: "https://github.com/enebelijeffery/adminPanel",
      projectTech: ["React", "Material-UI", "React Router", "Formik & Yup", "Nivo (for charts)", "FullCalendar"],
      productImage: dasboard,
    },
    {
      projectName: "Financial-Chatbot",
      projectDiscription: "This project is a comprehensive financial chatbot application with integrated forum functionalities. It consists of a backend server implemented using Node.js and Express, and a frontend application built with React and Material-UI.",
      projectLink: 'https://github.com/enebelijeffery/f-chatbot-forum',
      projectTech: ['Node.js', 'express', "PostgreSQL", 'bcrypt', 'JWT', 'OpenAI API', 'React', 'mui', 'react router'],
      productImage: Fchatbot,
    },
    {
      projectName: "E-commerce Website",
      projectDiscription: "This project is an e-commerce website built using React. The website features a modern and responsive design, providing a seamless shopping experience for users. It includes various sections such as fashion, electronics, and jewelry, each showcasing different products with detailed information and pricing.",
      projectLink: 'https://github.com/enebelijeffery/e-com',
      projectTech: ['React', 'React Router', 'React Bootstrap', 'React Icons'],
      productImage: ecom
    },
    {
      projectName: "Project 4",
      projectDiscription: "This project is a personal finance tracker application designed to help users manage their financial records efficiently. The application provides functionalities for users to sign in, add, update, and delete financial records. It features a user-friendly interface for displaying financial data in a tabular format and ensures secure authentication for user accounts.",
      projectLink: "https://github.com/enebelijeffery/expenseTracker",
      projectTech: ['React', 'vite', 'typescript', 'reac table', 'clerk', 'express', 'mongodb'],
      productImage: expensetraker
    },
    // {
    //   projectName: "Project 5",
    //   projectDiscription: "Project 5 Discription",
    //   projectLink: "#",
    //   projectTech:[],
    //   productImage: "https://via.placeholder.com/150"
    // },
    // {
    //   projectName: "Project 6",
    //   projectDiscription: "Project 6 Discription",
    //   projectLink: "#",
    //   projectTech:[],
    //   productImage: "https://via.placeholder.com/150"
    // }
  ]
  return (
    <motion.div
      id="projects"
      className="py-20 bg-gray-700 text-gray-100"
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // viewport={{ once: true }}
      animate={{ x: '1000' }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3">Projects</h2>
        <motion.div
        className='bg-white border  mb-10'
        initial={{x:-100,opacity:0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1}}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>

      </div>
    </motion.div>

  )
}

export default Projects