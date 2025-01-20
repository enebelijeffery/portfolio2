import {motion} from 'framer-motion'

const Contact=()=>{
    return(
        <motion.section 
        id="contact" 
        className="py-20 bg-gray-800 text-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <form className=" shadow-md rounded-lg p-6 bg-gray-700">
            <input type="text" name="name" placeholder="Your Name" required className="w-full mb-4 p-2 border rounded bg-gray-600 border-gray-500 text-gray-100" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full mb-4 p-2 border rounded bg-gray-600 border-gray-500 text-gray-100" />
            <textarea name="message" placeholder="Your Message" required className="w-full mb-4 p-2 border rounded bg-gray-600 border-gray-500 text-gray-100"></textarea>
            <button type="submit" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600">Send Message</button>
          </form>
          <div className="flex space-x-4 mt-6">
            <a href="https://github.com/enebelijeffery" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:underline">LinkedIn</a>
          </div>
        </div>
      </motion.section>

    )
}

export default Contact