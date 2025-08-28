import { motion } from 'framer-motion';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import CaseStudy from './CaseStudy';
import { fadeInUp, staggerContainer } from '../lib/animations';
import Goalkeeper from './Goalkeeper.png';
import Uniwizz from './Uniwizz.png';
import cryptocash from './cryptocash.png';
import Netflix from './Netflix.png';
import figma  from './figma.png';

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Goalkeeper ",
      description: "I've developed a goal tracker and manager web application that allows users to set goals, define milestones, and track their progress, all within a soothing and visually appealing user interface built using Next.js, TypeScript, and Tailwind CSS",
      image: Goalkeeper,
      category: "Web App",
      technologies: ["NextJS", "Framer - Motion",  "TailwindCSS"],
      github: "https://github.com/Gauravvedi19/Goalkeeper",
      demo: "https://goalkeeper-six.vercel.app/",
      longDescription: "A goal tracker and manager web application that allows users to set goals, define milestones, and track their progress, all within a soothing and visually appealing user interface built using Next.js, TypeScript, and Tailwind CSS",
      challenges: "Implementing a user-friendly interface that encourages consistent goal tracking while ensuring data persistence and security.",
      results: "Successfully launched the application with positive user feedback, achieving a 30% increase in user productivity and goal completion rates."
    },
    {
      id: 2,
      title: "Uniwizz",
      description: "Actively contributed to the development of a second-hand marketplace platform for university students. Worked on improving the user interface using Reactjs to ensure a seamless buying and selling experience",
      image: Uniwizz,
      category: "E-Commerce",
      technologies: ["reactjs", "nodejs", "Tailwindcss"],
      demo: "https://www.uniwizz.in/",
      longDescription: "A second-hand marketplace platform designed specifically for university students to buy and sell items easily within their campus community.",
      challenges: "Creating a secure and user-friendly platform that facilitates trust between buyers and sellers while managing listings and transactions efficiently.",
    },
    {
      id: 3,
      title: "Crypto Price Tracker",
      description: "A dynamic web app built with React and Firebase for real-time cryptocurrency price tracking with user authentication. Features API-based data fetching, trend monitoring, and currency comparison through an intuitive interface",
      image: cryptocash,
      category: "Crypto",
      technologies: ["ReactJS", "Firebase", "API", "Tailwind", "Chart.js"],
      github: "https://github.com/Gauravvedi19/Cryptocash",
      demo: "https://cryptocash-rho.vercel.app/",
      longDescription: "A real-time cryptocurrency price tracking application that allows users to monitor market trends, compare different cryptocurrencies, and manage their watchlist with secure user authentication.",
      challenges: "Ensuring real-time data updates and seamless user experience while integrating multiple APIs and maintaining secure authentication.",
      
    },
    {
      id: 4,
      title: "Netflix clone",
      description: "A fully functional streaming platform built using ReactJS & Firebase, featuring user authentication, movie browsing, and dynamic content fetching through APIs.",
      image: Netflix,
      category: "Web App",
      technologies: ["Reactjs", "Tailwindcss", "Firebase", "API"],
      github: "https://github.com/Gauravvedi19/Netflix-clone",
      demo: "https://netflix-clone-tau-teal.vercel.app/",
      longDescription: "A Netflix clone that replicates the core functionalities of the popular streaming service, allowing users to browse movies and TV shows with a sleek and responsive design.",
      challenges: "Implementing a seamless user experience with efficient data fetching and state management while ensuring responsive design across devices.",
    },
    
     
    {
      id: 5,
      title: "Figma Designs",
      description: "A collection of modern and user-friendly UI/UX designs created using Figma, showcasing a variety of web and mobile app interfaces with a focus on aesthetics and usability.",
      image: figma,
      category: "Designs",
      technologies: ["figma", "web design", "app design"],
      demo: "https://github.chttps://www.figma.com/proto/BZJy2bT78xdTsY2HlmTJXf/parallelx?node-id=22-6&p=f&t=KatX3zPUv6gIIjEa-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=22%3A6om",
      longDescription: "A collection of modern and user-friendly UI/UX designs created using Figma, showcasing a variety of web and mobile app interfaces with a focus on aesthetics and usability.",
 
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-pink-500 bg-clip-text text-transparent mb-6">
            Featured <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`px-8 py-3 border-2 font-semibold rounded-full transition-all duration-300
              ${
                filter === category
                  ? 'border-blue-500 text-gray-900 dark:text-gray-100 bg-white dark:bg-transparent shadow-lg'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-blue-400 shadow-sm'
              }`}
          >
            {category}
          </motion.button>
        ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                project={project}
                onOpenModal={setSelectedProject}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Case Study Modal */}
        <CaseStudy
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default ProjectsGrid;