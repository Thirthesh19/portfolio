import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAudio } from '../context/AudioContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Services', to: 'services' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isMuted, toggleMute, playHover, playClick } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    playClick();
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold font-outfit text-gradient cursor-pointer hover:drop-shadow-[0_0_10px_rgba(125,207,255,0.8)] transition-all duration-300"
          onMouseEnter={playHover}
        >
          <Link to="home" smooth={true} duration={500} onClick={playClick}>TB.</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-[#7dcfff] font-semibold drop-shadow-[0_0_8px_rgba(125,207,255,0.8)]"
                className="cursor-pointer text-slate-700 dark:text-[#c0caf5] hover:text-[#7dcfff] dark:hover:text-[#7dcfff] hover:drop-shadow-[0_0_8px_rgba(125,207,255,0.8)] transition-all duration-300"
                onMouseEnter={playHover}
                onClick={playClick}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3 border-l border-slate-300 dark:border-[#414868] pl-6">
            <button 
              onClick={() => { playClick(); toggleMute(); }} 
              className="p-2 rounded-full bg-slate-200 dark:bg-[#24283b] text-slate-700 dark:text-[#c0caf5] hover:bg-slate-300 dark:hover:bg-[#414868] hover:text-[#bb9af7] hover:drop-shadow-[0_0_8px_rgba(187,154,247,0.8)] transition-all duration-300"
              aria-label="Toggle Audio"
              onMouseEnter={playHover}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button 
              onClick={() => { playClick(); toggleTheme(); }} 
              className="p-2 rounded-full bg-slate-200 dark:bg-[#24283b] text-slate-700 dark:text-[#c0caf5] hover:bg-slate-300 dark:hover:bg-[#414868] hover:text-[#e0af68] hover:drop-shadow-[0_0_8px_rgba(224,175,104,0.8)] transition-all duration-300"
              aria-label="Toggle Theme"
              onMouseEnter={playHover}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => { playClick(); toggleMute(); }} className="text-slate-700 dark:text-[#c0caf5]">
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
          <button onClick={() => { playClick(); toggleTheme(); }} className="text-slate-700 dark:text-[#c0caf5]">
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => { playClick(); setIsOpen(!isOpen); }} className="text-slate-700 dark:text-[#c0caf5]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 w-full border-t border-slate-200 dark:border-[#414868]"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={handleNavClick}
                  className="cursor-pointer text-lg text-slate-700 dark:text-[#c0caf5] hover:text-[#7dcfff] dark:hover:text-[#7dcfff]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
