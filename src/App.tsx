import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { pageTransition } from './lib/animations';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Custom Cursor - only on desktop */}
        <div className="hidden lg:block">
          <CustomCursor />
        </div>

        {/* Navigation */}
        <Nav />

        {/* Main Content */}
        <motion.main
          {...pageTransition}
          className="overflow-hidden"
        >
          <Hero />
          <ProjectsGrid />
          <About />
          <ContactForm />
        </motion.main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;