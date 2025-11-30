import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
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
              Hi, I'm <span className="text-primary">Suren Saghatelyan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
              Aspiring <span className="text-secondary">AI/ML</span> & <span className="text-secondary">Data Science</span> Enthusiast
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              High school student passionate about leveraging technology to solve real-world problems through machine learning, computer vision, and data analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/projects" 
                className="btn btn-primary"
              >
                View My Work
              </Link>
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
  );
};

export default Home;
