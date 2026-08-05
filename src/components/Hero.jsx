import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';
import ParticleBackground from './ParticleBackground';
import { useAudio } from '../context/AudioContext';

const Hero = () => {
  const { playHover, playClick } = useAudio();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-[url('/cyberpunk-bg.png')] bg-cover bg-center md:bg-fixed opacity-40 mix-blend-screen z-0" 
        style={{ filter: 'brightness(0.7) contrast(1.2)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1b26]/80 via-transparent to-[#1a1b26] z-0 pointer-events-none"></div>
      
      <ParticleBackground />

      {/* Ambient Data Streams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20 mix-blend-screen">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute -top-full w-px h-full bg-gradient-to-b from-transparent via-[#7dcfff] to-transparent animate-[shimmer_3s_infinite_linear]"
            style={{ 
              left: `${Math.random() * 100}%`, 
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1 
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto w-full relative"
        >
          {/* Futuristic Japanese Text Element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -top-12 left-0 md:-left-12 opacity-30 text-3xl md:text-5xl lg:text-8xl font-bold text-[#bb9af7] tracking-widest writing-vertical-rl transform -rotate-12 select-none pointer-events-none mix-blend-screen hidden sm:block"
            style={{ writingMode: 'vertical-rl' }}
          >
            システム起動
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-lg md:text-xl text-[#7dcfff] font-medium mb-2 tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(125,207,255,0.8)]"
          >
            Terminal Online
          </motion.h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#c0caf5] mb-4 leading-tight tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] relative inline-block glitch-hover break-words">
            <span className="glitch-text text-gradient drop-shadow-[0_0_15px_rgba(187,154,247,0.6)]" data-text="Thirthesh B N">Thirthesh B N</span>
          </h1>
          
          <div className="text-lg sm:text-2xl md:text-4xl font-semibold text-[#9aa5ce] mb-10 h-16 sm:h-12 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0">
            <span className="sm:mr-3 font-light text-[#7aa2f7] uppercase tracking-wider text-xs sm:text-sm md:text-xl border border-[#7aa2f7]/30 px-2 sm:px-3 py-1 bg-[#1a1b26]/50">Function:</span>
            <TypeAnimation
              sequence={[
                'MCA Student',
                2500,
                'Full Stack Developer',
                2500,
                'Web Developer',
                2500,
                'Software Developer',
                2500,
                'UI/UX Enthusiast',
                2500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#f7768e] drop-shadow-[0_0_8px_rgba(247,118,142,0.6)] tracking-widest uppercase font-mono"
            />
          </div>
          
          <p className="text-lg md:text-xl text-[#9aa5ce] mb-12 max-w-2xl mx-auto leading-relaxed font-light bg-[#1a1b26]/60 backdrop-blur-md p-6 border-l-2 border-[#7dcfff] shadow-[0_0_20px_rgba(125,207,255,0.1)] text-left">
            &gt; Executing bio-digital fusion protocols...<br/>
            &gt; Passionate MCA student focused on building modern web applications, AI-powered solutions, and user-friendly digital experiences. I enjoy transforming innovative ideas into impactful software products and continuously exploring emerging technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16 relative">
            <Link to="projects" smooth={true} duration={500} onClick={playClick}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={playHover}
                className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent text-[#7dcfff] border border-[#7dcfff] rounded-none font-medium shadow-[0_0_15px_rgba(125,207,255,0.2)] hover:shadow-[0_0_30px_rgba(125,207,255,0.8)] hover:bg-[#7dcfff]/20 transition-all uppercase tracking-widest text-xs md:text-sm overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                Access Mainframe
              </motion.button>
            </Link>
            <Link to="contact" smooth={true} duration={500} onClick={playClick}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={playHover}
                className="px-6 py-3 md:px-8 md:py-4 bg-[#bb9af7]/10 text-[#bb9af7] border border-[#bb9af7]/30 rounded-none font-medium hover:border-[#bb9af7] hover:shadow-[0_0_30px_rgba(187,154,247,0.6)] hover:bg-[#bb9af7]/20 transition-all uppercase tracking-widest text-xs md:text-sm"
              >
                Establish Link
              </motion.button>
            </Link>
          </div>

          <div className="flex justify-center space-x-8">
            {[
              { icon: FaGithub, href: "https://github.com/Thirthesh19", color: "hover:border-[#7aa2f7] hover:text-[#7aa2f7]" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/thirthesh-b-n-6a764231b/", color: "hover:border-[#bb9af7] hover:text-[#bb9af7]" },
              { icon: FaTwitter, href: "https://x.com/thirthesh123", color: "hover:border-[#7dcfff] hover:text-[#7dcfff]" },
              { icon: Mail, href: "mailto:thirthesh19@gmail.com", color: "hover:border-[#f7768e] hover:text-[#f7768e]" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                onMouseEnter={playHover}
                onClick={playClick}
                className={`w-14 h-14 flex items-center justify-center rounded-none glass border border-[#414868]/60 ${social.color} hover:shadow-[0_0_20px_currentColor] transition-all duration-300 text-[#9aa5ce]`}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      >
        <Link to="about" smooth={true} duration={500} onClick={playClick}>
          <div 
            className="flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            onMouseEnter={playHover}
          >
            <span className="text-[#9aa5ce] text-xs tracking-[0.2em] uppercase mb-2">Descend</span>
            <ArrowDown className="text-[#f7768e] animate-bounce drop-shadow-[0_0_8px_rgba(247,118,142,0.8)]" size={24} />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
