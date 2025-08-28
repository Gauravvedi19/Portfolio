import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { use3DCardTilt } from '../hooks/useParallax';
import { cardHover } from '../lib/animations';
import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';
import CustomCursor from './CustomCursor';

const ProjectCard = ({ project, onOpenModal }) => {
  const { ref, handleMouseMove, handleMouseLeave } = use3DCardTilt();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Listen for modal open/close events
  useEffect(() => {
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    // You might need to adjust these event names based on your implementation
    window.addEventListener('modalOpened', handleModalOpen);
    window.addEventListener('modalClosed', handleModalClose);

    return () => {
      window.removeEventListener('modalOpened', handleModalOpen);
      window.removeEventListener('modalClosed', handleModalClose);
    };
  }, []);

  const handleClick = () => {
    setIsModalOpen(true);
    onOpenModal(project);
  };

  return (
    <div
      className="relative group cursor-pointer"
      onClick={handleClick}
      style={{ cursor: isModalOpen ? 'default' : 'pointer' }}
    >
      {/* Tilt Wrapper */}
      <motion.div
        ref={ref}
        {...cardHover}
        initial="rest"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        onMouseMove={handleMouseMove}
        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          cursor: isModalOpen ? 'default' : 'pointer', // Dynamic cursor based on modal state
        }}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"
          />

          {/* Hover Actions */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute top-4 right-4 flex space-x-2 z-20"
              >
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/30 backdrop-blur-lg rounded-md hover:bg-white/40 transition-colors duration-200 cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                )}

                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 bg-white/30 backdrop-blur-lg rounded-md hover:bg-white/40 transition-colors duration-200 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Project Category */}
          <div className="absolute bottom-4 left-4 z-20">
            <span className="px-3 py-1 bg-gradient-to-r from-red-500 via-pink-400 to-purple-400 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-20">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 transition-colors duration-200">
              {project.title}
            </h3>

            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              className="text-gray-400 group-hover:text-pink-600 transition-colors duration-200"
            >
              <ArrowRight size={20} />
            </motion.div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-md">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
