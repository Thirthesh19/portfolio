import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../context/AudioContext';

const bootSequence = [
  "> INITIALIZING SYSTEM KERNEL...",
  "> ALLOCATING MEMORY BLOCKS... [OK]",
  "> LOADING CYBERNETIC PROTOCOLS... [OK]",
  "> ESTABLISHING NEURAL LINK...",
  "> CONNECTING TO GLOBAL GRID...",
  "> DECRYPTING USER DATA...",
  "> AUTHENTICATION SUCCESSFUL.",
  "> WELCOME TO THE CONSTRUCT."
];

const BootScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [glitch, setGlitch] = useState(false);
  const { playTyping } = useAudio();

  useEffect(() => {
    let currentLine = 0;
    
    const addLine = () => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        playTyping();
        currentLine++;
        
        // Randomize delay to simulate actual loading
        const nextDelay = currentLine === bootSequence.length ? 800 : Math.random() * 200 + 100;
        setTimeout(addLine, nextDelay);
      } else {
        // Trigger final glitch flash before completion
        setTimeout(() => setGlitch(true), 500);
        setTimeout(onComplete, 800);
      }
    };

    const initialDelay = setTimeout(addLine, 500);
    return () => clearTimeout(initialDelay);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`fixed inset-0 z-[999] bg-[#0f111a] flex items-center justify-center overflow-hidden ${glitch ? 'animate-[glitch-skew_0.2s_cubic-bezier(0.25,0.46,0.45,0.94)_both_infinite]' : ''}`}
      >
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-50 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 font-mono text-[#7dcfff] relative z-10 w-full max-w-3xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-[#bb9af7] uppercase tracking-widest glitch-text" data-text="OS.BOOT_SEQ">
              OS.BOOT_SEQ
            </h1>
            <div className="h-1 w-full bg-[#414868] mt-4 relative overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-[#f7768e] shadow-[0_0_15px_rgba(247,118,142,0.8)]"
              ></motion.div>
            </div>
          </div>

          <div className="space-y-2 text-sm md:text-lg drop-shadow-[0_0_5px_rgba(125,207,255,0.8)] h-64 overflow-hidden flex flex-col justify-end">
            {lines.map((line, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={index === bootSequence.length - 1 ? 'text-[#f7768e] font-bold text-xl mt-4 animate-pulse' : ''}
              >
                {line}
              </motion.div>
            ))}
            <motion.div 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-4 h-5 bg-[#7dcfff] mt-2 inline-block"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootScreen;
