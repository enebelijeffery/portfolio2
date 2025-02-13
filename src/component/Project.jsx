import { motion, useInView } from 'framer-motion';
import dasboard from '../assets/dashboard.png'
import Fchatbot from '../assets/Fchatbot.png'
import aiFinance from '../assets/ai-finance.png'
import expensetraker from '../assets/expensetraker.png'
import ecom from '../assets/ecom.png'
import { useRef } from 'react';

const ProjectCard = ({ projectName, projectDiscription, projectSourceLink = '#', projectLiveDemoLink, projectTech, productImage }) => {
  const ref = useRef(null)
  const isInview = useInView(ref,{once:true})
  return (
    <motion.div
    ref={ref}
    initial={{opacity:0, scale:0.5}}
    animate={isInview&&{opacity:1,scale:1}}
    transition={{duration:1}}
    >
      <div className=" shadow-md rounded-lg p-4 bg-gray-900 ">
        <img src={productImage} alt="Project Thumbnail" className="rounded mb-4" />
        <h3 className="text-xl font-semibold">{projectName}</h3>
        <p className=" mb-4 text-white">{projectDiscription}</p>
        <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
        <ul className='grid grid-cols-3 mb-5 gap-2'>
          {projectTech.map((tech, i) => {
            return (
              <li>{tech}</li>
            )
          })}
        </ul>
        <div className='flex justify-between'>
        <a href={projectSourceLink} className="text-teal-500 hover:underline" target='blank'>View Source</a>
        <a href={projectLiveDemoLink} className={`text-teal-500 ${projectLiveDemoLink?undefined:'hidden'} hover:underline`} target='blank'>live demo</a>
        </div>
        
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      projectName: "Admin Dashboard",
      projectDiscription: "This project is a feature-rich admin dashboard built with React and Material-UI. It provides a clean and intuitive interface for managing various aspects of an application. The dashboard includes multiple scenes and components, each designed to handle specific tasks efficiently.",
      projectSourceLink: "https://github.com/enebelijeffery/adminPanel",
      projectTech: ["React", "Material-UI", "React Router", "Formik & Yup", "Nivo (for charts)", "FullCalendar"],
      productImage: dasboard,
      projectLiveDemoLink: undefined
    },
    {
      projectName: "Financial-Chatbot",
      projectDiscription: "This project is a comprehensive financial chatbot application with integrated forum functionalities. It consists of a backend server implemented using Node.js and Express, and a frontend application built with React and Material-UI.",
      projectSourceLink: 'https://github.com/enebelijeffery/f-chatbot-forum',
      projectTech: ['Node.js', 'express', "PostgreSQL", 'bcrypt', 'JWT', 'OpenAI API', 'React', 'mui', 'react router'],
      productImage: Fchatbot,
      projectLiveDemoLink: 'https://f-chatbot-frontend.vercel.app/signin'
    },
    {
      projectName: "E-commerce Website",
      projectDiscription: "This project is an e-commerce website built using React. The website features a modern and responsive design, providing a seamless shopping experience for users. It includes various sections such as fashion, electronics, and jewelry, each showcasing different products with detailed information and pricing.",
      projectSourceLink: 'https://github.com/enebelijeffery/e-com',
      projectTech: ['React', 'React Router', 'React Bootstrap', 'React Icons'],
      productImage: ecom,
      projectLiveDemoLink: undefined
    },
    {
      projectName: "Project 4",
      projectDiscription: "This project is a personal finance tracker application designed to help users manage their financial records efficiently. The application provides functionalities for users to sign in, add, update, and delete financial records. It features a user-friendly interface for displaying financial data in a tabular format and ensures secure authentication for user accounts.",
      projectSourceLink: "https://github.com/enebelijeffery/expenseTracker",
      projectTech: ['React', 'vite', 'typescript', 'reac table', 'clerk', 'express', 'mongodb'],
      productImage: expensetraker,
      projectLiveDemoLink: undefined
    },
    {
      projectName: "ai-saas-finance",
      projectDiscription: "An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.",
      projectLink: "https://github.com/enebelijeffery/AI-Saas-Finance-Main",
      projectTech:["Next.JS",
        "Supabase",
        "Tailwind",
        "Prisma",
        "Inngest",
        "ArcJet",
        "Shadcn UI"],
      productImage: aiFinance,
      projectLiveDemoLink: 'https://ai-saas-finance-main-ervrtuv6x-enebelijefferys-projects.vercel.app/'
    },
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
      className="py-20  text-gray-100"
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
// bg-gray-700 