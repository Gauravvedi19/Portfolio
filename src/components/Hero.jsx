import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Code, Palette, Bug } from 'lucide-react';
import { heroText, floatingElement } from '../lib/animations';
import { useParallaxTransform } from '../hooks/useParallax';
import pic from './pic.png';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Different parallax speeds for layered effect
  const backgroundY = useParallaxTransform(-0.3);
  const midgroundY = useParallaxTransform(-0.5);
  const foregroundY = useParallaxTransform(-0.7);
  
  // Moving name parallax effect - moves from left to right
  const nameX = useTransform(scrollY, [0, 2000], [-200, window.innerWidth + 200]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center ">
      {/* Animated Background Shapes */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Moving Name Parallax */}
      <motion.div
        style={{ x: nameX }}
        className="absolute top-1/4 z-10 pointer-events-none"
      >
        <div className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-500/10 dark:text-white/5 whitespace-nowrap select-none">
          GAURAV VEDI  •  GAURAV VEDI  •  GAURAV VEDI  •  GAURAV VEDI • 
        </div>
      </motion.div>

      {/* Midground Elements */}
     <motion.div style={{ y: midgroundY }} className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          {...floatingElement}
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-60"
        ></motion.div>
        <motion.div
          {...floatingElement}
          animate={{
            y: [0, -15, 0],
            transition: { duration: 4, repeat: Infinity, delay: 1 }
          }}
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-500 rounded-full opacity-40"
        ></motion.div>
      </motion.div>

      <motion.div
  style={{ y: foregroundY }}
  className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center"
>
  {/* Left Side: Content */}
  <div className="flex-1 text-left">
    {/* Animated Headlines */}
    <motion.div {...heroText} className="mb-8">
      <motion.h1 className="text-5xl md:text-5xl lg:text-5xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 dark:from-red-500 dark:via-pink-500 dark:to-purple-400 bg-clip-text text-transparent block mb-2">
          Gaurav vedi
        </span>
        <motion.span
          initial={{ opacity: 0, rotateX: 90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent block"
        >
          Software Developer / Designer
        </motion.span>
      </motion.h1>
    </motion.div>


    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="text-lg md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed"
    >
      Hello its Gaurav 4th-year B.Tech student in Computer Science (AI & ML) at Manipal University
      Jaipur, eager to gain hands-on experience and enhance technical skills while seeking
      practical opportunities.
    </motion.p>

    {/* Feature Icons */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="flex justify-start space-x-8 mb-16"
    >
      {[
        { Icon: Code, label: 'Development' },
        { Icon: Palette, label: 'Design' },
        { Icon: Bug, label: 'Debugging' }
      ].map(({ Icon, label }, index) => (
        <motion.div
          key={label}
          whileHover={{ scale: 1.1, y: -5 }}
          className="flex flex-col items-center space-y-2 group cursor-pointer"
        >
          <div className="p-4 bg-white/20 dark:bg-gray-700/20 backdrop-blur-lg rounded-lg border border-white/30 dark:border-gray-600/30 group-hover:bg-white/30 dark:group-hover:bg-gray-600/30 transition-all duration-300">
            <Icon className="w-8 h-8 text-blue-500" />
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</span>
        </motion.div>
      ))}
    </motion.div>

    {/* CTA Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-8"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToProjects}
        className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold rounded-full transition-all duration-300"
      >
        View My Work
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-semibold rounded-full transition-all duration-300"
      >
        Get In Touch
      </motion.button>
    </motion.div>
  </div>

  {/* Right Side: Profile Photo */}
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }}
    className="flex justify-end items-center flex-1"
  >
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2"
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
      </motion.div>
      <img
        src={pic}
        alt="Profile"
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"
      ></motion.div>
    </div>
  </motion.div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2.5, duration: 1 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <motion.button
      onClick={scrollToProjects}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
    >
      <ChevronDown size={32} />
    </motion.button>
  </motion.div>
</motion.div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;