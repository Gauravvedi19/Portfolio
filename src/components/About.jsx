import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Python", "SQL", "MongoDB", "REST APIs" , "Firebase" , "ASP.NET"]
    },
    {
      category: "Design",
      technologies: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Prototyping", "Design Systems"]
    }
  ];

  const achievements = [
    {
      icon: Code2,
      number: "50+",
      label: "Projects Completed",
      color: "text-blue-500"
    },
    {
      icon: Users,
      number: "100K+",
      label: "Users Impacted",
      color: "text-green-500"
    },
    {
      icon: Award,
      number: "5",
      label: "Years Experience",
      color: "text-purple-500"
    },
    {
      icon: Rocket,
      number: "98%",
      label: "Client Satisfaction",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className=" gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Hello, I'm a Creative Developer
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-center ">
                <p>
                  I am a B.Tech Computer Science student with hands-on experience in building 
                  self-driven projects. I have a strong foundation in JavaScript and React.js, 
                  with some exposure to backend development. I enjoy exploring new technologies, experimenting with projects, and continuously 
                  improving my problem-solving and development skills. My goal is to keep learning 
                  and growing as a software developer. When I'm not coding, I like discovering emerging tools, working on creative ideas, 
                  and staying curious about technology trends.
                </p>

              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold rounded-full transition-all duration-300"
              >
                Let's Work Together
              </motion.button>
            </div>
          </motion.div>
          </motion.div>
          
        </div>

        {/* Skills */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
  variants={fadeInUp}
  className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12"
>
  Skills & Technologies
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeInUp}
              className="bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {skillGroup.category}
              </h4>
              <div className="space-y-2">
                {skillGroup.technologies.map((tech) => (
                  <div
                  key={tech}
                  className="text-gray-600 dark:text-gray-300 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-md text-sm font-medium text-center max-w-lg mx-auto"
                >
                  {tech}
                </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;