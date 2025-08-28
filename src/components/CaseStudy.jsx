import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { modalSlide } from '../lib/animations';

const CaseStudy = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              {...modalSlide}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
                />
                
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/30 backdrop-blur-lg rounded-md hover:bg-white/40 transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>

                {/* Project Links */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/30 backdrop-blur-lg rounded-md hover:bg-white/40 transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                  )}
                  
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/30 backdrop-blur-lg rounded-md hover:bg-white/40 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-blue-500/90 text-white font-medium rounded-md backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title & Description */}
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <ArrowRight className="w-5 h-5 mr-2 text-blue-500" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Results */}
                {(project.challenges || project.results) && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.challenges && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <ArrowRight className="w-5 h-5 mr-2 text-purple-500" />
                          Challenges
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.challenges}
                        </p>
                      </div>
                    )}

                    {project.results && (
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                          <ArrowRight className="w-5 h-5 mr-2 text-green-500" />
                          Results
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.results}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudy;