import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import BootScreen from './components/BootScreen';

function App() {
  const [booting, setBooting] = useState(true);
  const [scrollGlitch, setScrollGlitch] = useState(false);

  useEffect(() => {
    let timeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const speed = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // If scrolling fast, trigger glitch
      if (speed > 50) {
        setScrollGlitch(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setScrollGlitch(false), 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`min-h-screen relative font-inter overflow-x-hidden bg-[#1a1b26] text-[#c0caf5]`}>
      {!booting && <Cursor />}
      
      {/* Global Glitch Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] animate-[global-glitch-backdrop_15s_infinite]"></div>
      
      {/* Scroll Glitch Overlay */}
      <AnimatePresence>
        {scrollGlitch && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-[9998] bg-[#f7768e]/5 mix-blend-screen scanlines animate-[glitch-skew_0.1s_cubic-bezier(0.25,0.46,0.45,0.94)_both_infinite]"
            style={{ backdropFilter: 'hue-rotate(90deg) contrast(150%) blur(2px)' }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {booting ? (
          <BootScreen key="bootscreen" onComplete={() => setBooting(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
            </main>
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
