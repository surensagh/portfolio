import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { projectsData } from '../../data/projects';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("your-form-id");

  const skills = {
    programming: ["Python", "JavaScript/TypeScript", "C++", "Java", "SQL"],
    mlFrameworks: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV"],
    tools: ["Git/GitHub", "Docker", "Jupyter Notebooks", "VS Code", "Tableau"],
  };

  const education = [
    {
      degree: "High School Diploma",
      school: "Your High School Name",
      year: "2020 - 2024",
      description: "Relevant Coursework: AP Computer Science, AP Calculus, AP Physics, Data Structures & Algorithms"
    },
    {
      degree: "Machine Learning Specialization",
      school: "Online Course (e.g., Coursera, edX)",
      year: "2023",
      description: "Focused on deep learning, neural networks, and practical ML applications"
    }
  ];

  const experience = [
    {
      role: "AI Research Intern",
      company: "Tech Company/Research Lab",
      year: "Summer 2023",
      description: [
        "Researched and implemented state-of-the-art computer vision models",
        "Collaborated with PhD students on research papers and experiments",
        "Presented findings to a team of researchers and engineers"
      ]
    },
    {
      role: "Coding Instructor",
      company: "Local Coding Academy",
      year: "2022 - Present",
      description: [
        "Teach Python and web development to middle and high school students",
        "Develop curriculum and hands-on projects for beginners",
        "Mentor students in their personal coding projects"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - Text content */}
            <motion.div 
              className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
                Hi, I'm <span className="text-primary">[Your Name]</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                Aspiring <span className="text-secondary">AI/ML</span> & <span className="text-secondary">Data Science</span> Enthusiast
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                High school student passionate about leveraging technology to solve real-world problems through machine learning, computer vision, and data analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#projects" 
                  className="btn btn-primary"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn bg-white text-primary border-2 border-primary hover:bg-gray-50"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            {/* Right side - Illustration or photo */}
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="bg-white p-2 rounded-full shadow-2xl">
                    <div className="bg-gray-200 w-full h-full rounded-full overflow-hidden">
                      {/* Replace with your photo */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                        <span className="text-lg">Your Photo</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-70"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-purple-400 rounded-full opacity-70"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-gray-400 rounded-full"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gray-50">
        <div className="container">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-primary">Projects</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x225?text=' + project.title.replace(/\s+/g, '+');
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                  
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Challenge:</p>
                    <p className="text-xs text-gray-600">{project.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-1">Impact:</p>
                    <p className="text-xs text-gray-600">{project.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="text-primary font-medium hover:underline inline-flex items-center text-sm"
                  >
                    View Project Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.39-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.431.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View All Projects on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">About <span className="text-primary">Me</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate high school student with a strong foundation in computer science and artificial intelligence, 
              dedicated to using technology to solve real-world problems and make a positive impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b-2 border-primary pb-2 inline-block">Skills</h3>
              
              <div className="mb-8">
                <h4 className="font-medium text-gray-700 mb-3">Programming</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-medium text-gray-700 mb-3">ML & AI</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.mlFrameworks.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, index) => (
                    <span key={index} className="skill-badge">{tool}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b-2 border-primary pb-2 inline-block">Education</h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                      <p className="text-gray-600 text-sm mb-1">{edu.school}</p>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-2">
                        {edu.year}
                      </span>
                      <p className="text-gray-600 text-sm">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b-2 border-primary pb-2 inline-block">Experience</h3>
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 top-1"></div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">{exp.role}</h4>
                      <p className="text-gray-600 text-sm mb-1">{exp.company}</p>
                      <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full mb-2">
                        {exp.year}
                      </span>
                      <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-gray-50">
        <div className="container max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out, and I'll get back to you as soon as possible.
            </p>
          </motion.div>

          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h2>
              <p className="text-gray-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-primary transition-colors">
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Phone</h4>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-primary transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Location</h4>
                      <p className="text-gray-600">Your City, Country</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-gray-700 mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    {[
                      { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
                      { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
                      { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
                      { name: 'Instagram', url: 'https://instagram.com/yourusername', icon: 'instagram' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-primary hover:text-white rounded-full text-gray-600 transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <span className="sr-only">{social.name}</span>
                        <i className={`fab fa-${social.icon} text-lg`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      placeholder="Your message here..."
                    ></textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
