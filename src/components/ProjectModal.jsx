import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </button>

        {/* Project Image */}
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Title */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h2>

        {/* Project Links */}
        <div className="flex space-x-4 mb-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View Source</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        {/* Project Description */}
        <div className="prose dark:prose-invert max-w-none mb-6">
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Technologies Used */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Results */}
        {(project.challenges || project.results) && (
          <div className="grid md:grid-cols-2 gap-6">
            {project.challenges && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Challenges</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.challenges}
                </p>
              </div>
            )}
            {project.results && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.results}
                </p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;