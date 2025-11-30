import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "National Science Olympiad - Gold Medal",
      category: "Competition",
      description: "Placed 1st in the National Science Olympiad in the Computer Science category, demonstrating advanced problem-solving skills.",
      date: "2024",
      icon: FaTrophy,
      color: "text-yellow-500"
    },
    {
      id: 2,
      title: "AI/ML Hackathon Winner",
      category: "Hackathon",
      description: "Won first place at the Regional AI/ML Hackathon with a project on real-time object detection for accessibility.",
      date: "2023",
      icon: FaMedal,
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "Research Paper Publication",
      category: "Research",
      description: "Published research paper on 'Efficient CNN Architectures for Medical Image Analysis' in a peer-reviewed journal.",
      date: "2024",
      icon: FaStar,
      color: "text-purple-500"
    },
    {
      id: 4,
      title: "Google Code-in Finalist",
      category: "Recognition",
      description: "Selected as a finalist in Google Code-in, completing multiple open-source contributions.",
      date: "2023",
      icon: FaTrophy,
      color: "text-red-500"
    },
    {
      id: 5,
      title: "STEM Excellence Award",
      category: "Award",
      description: "Recipient of the prestigious STEM Excellence Award recognizing outstanding contributions to science and technology.",
      date: "2024",
      icon: FaStar,
      color: "text-green-500"
    },
    {
      id: 6,
      title: "Mentor Recognition",
      category: "Recognition",
      description: "Recognized by leading AI researchers for mentoring junior students in machine learning and computer vision projects.",
      date: "2024",
      icon: FaMedal,
      color: "text-indigo-500"
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Achievements & <span className="text-primary">Recognition</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Awards, hackathon wins, and recognition from industry experts and academic institutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`text-3xl ${achievement.color}`}>
                    <IconComponent />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-2">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800">{achievement.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{achievement.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500">{achievement.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Featured In</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold text-gray-800">Tech Magazine Feature</p>
              <p className="text-gray-600 text-sm">Featured in "Young Innovators" article highlighting contributions to AI accessibility.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold text-gray-800">University Spotlight</p>
              <p className="text-gray-600 text-sm">Invited speaker at MIT and Stanford on machine learning applications in healthcare.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold text-gray-800">Industry Recognition</p>
              <p className="text-gray-600 text-sm">Recognized by leading tech companies for innovative open-source contributions.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <p className="font-semibold text-gray-800">Community Impact</p>
              <p className="text-gray-600 text-sm">Received appreciation from non-profit organizations for pro-bono technical work.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
