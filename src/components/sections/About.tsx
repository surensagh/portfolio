import { motion } from 'framer-motion';

const About = () => {
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
  );
};

export default About;
