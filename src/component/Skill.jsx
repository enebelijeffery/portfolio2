const Skill =()=>{
    return(
        <div>
            <section id="skills" className="py-20  bg-gray-700 text-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Frontend</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Backend</h3>
                            <ul>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Python</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Database</h3>
                            <ul>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Version Control</h3>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Tools</h3>
                            <ul>
                                <li>VS Code</li>
                                <li>Postman</li>
                                <li>Netlify</li>
                                <li>Heroku</li>
                                <li>Vercel</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="font-bold text-xl mb-2">Design</h3>
                            <ul>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skill