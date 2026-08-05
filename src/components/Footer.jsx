import React from 'react';
import { Link } from 'react-scroll';
import { Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useAudio } from '../context/AudioContext';

const Footer = () => {
  const { playHover, playClick } = useAudio();

  return (
    <footer className="bg-[#1a1b26] text-[#9aa5ce] py-12 relative border-t border-[#414868]/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[#c0caf5] mb-2 drop-shadow-[0_0_8px_rgba(192,202,245,0.4)] tracking-wide">Thirthesh B N.</h2>
            <p className="text-[#7aa2f7] font-light tracking-wide uppercase text-sm">Constructing the grid.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Thirthesh19" target="_blank" rel="noopener noreferrer" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#7dcfff] hover:drop-shadow-[0_0_8px_rgba(125,207,255,0.8)] transition-all duration-300 transform hover:scale-110"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/thirthesh-b-n-6a764231b/" target="_blank" rel="noopener noreferrer" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#bb9af7] hover:drop-shadow-[0_0_8px_rgba(187,154,247,0.8)] transition-all duration-300 transform hover:scale-110"><FaLinkedin size={22} /></a>
            <a href="https://x.com/thirthesh123" target="_blank" rel="noopener noreferrer" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#7aa2f7] hover:drop-shadow-[0_0_8px_rgba(122,162,247,0.8)] transition-all duration-300 transform hover:scale-110"><FaTwitter size={22} /></a>
          </div>
        </div>

        <div className="border-t border-[#414868] pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-light">
          <p className="flex items-center mb-4 md:mb-0">
            © {new Date().getFullYear()} System initialized. Core powered by <Heart size={14} className="mx-1 text-[#f7768e] animate-pulse drop-shadow-[0_0_5px_rgba(247,118,142,0.8)]" /> React.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#c0caf5] transition-colors hover:underline decoration-[#7dcfff]/50 underline-offset-4">Privacy Protocol</a>
            <a href="#" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#c0caf5] transition-colors hover:underline decoration-[#bb9af7]/50 underline-offset-4">Terms of Access</a>
          </div>
        </div>
      </div>

      <Link 
        to="home" 
        smooth={true} 
        duration={500} 
        onMouseEnter={playHover}
        onClick={playClick}
        className="absolute -top-6 right-6 md:right-10 z-50 w-12 h-12 bg-[#1a1b26] border border-[#7dcfff] text-[#7dcfff] rounded-sm flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(125,207,255,0.4)] hover:shadow-[0_0_20px_rgba(125,207,255,0.8)] hover:bg-[#7dcfff]/20 transition-all hover:-translate-y-1"
      >
        <ArrowUp size={24} />
      </Link>
    </footer>
  );
};

export default Footer;
