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
import Script from 'next/script';
<Script src="https://rob-suggests-memphis-outputs.trycloudflare.com/form/v1/loader.js" data-api="https://promise-gap-fix-lamp.trycloudflare.com" data-crave-connect="cf_ca8e3a1e29f22b25700e878c" strategy="afterInteractive" />
        </motion.main>
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
          

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
