import React from 'react';
import { motion } from 'framer-motion';
import CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { useAudio } from '../context/AudioContext';
import DecryptText from './DecryptText';

const CountUp = CountUpModule.default || CountUpModule;

const tiltOptions = {
  reverse:        false,  // reverse the tilt direction
  max:            35,     // max tilt rotation (degrees)
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
  speed:          1000,   // Speed of the enter/exit transition
  transition:     true,   // Set a transition on enter/exit.
  axis:           null,   // What axis should be disabled. Can be X or Y.
  reset:          true,    // If the tilt effect has to be reset on exit.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { playHover } = useAudio();

  const skills = [
    { name: 'HTML & CSS', level: 95, color: 'from-[#7dcfff] to-[#7aa2f7]' },
    { name: 'JavaScript', level: 85, color: 'from-[#e0af68] to-[#ff9e64]' },
    { name: 'Git & GitHub', level: 90, color: 'from-[#bb9af7] to-[#9d7cd8]' },
    { name: 'MySQL', level: 80, color: 'from-[#7aa2f7] to-[#7dcfff]' },
    { name: 'PHP', level: 60, color: 'from-[#9ece6a] to-[#73daca]' },
    { name: 'Java & Python', level: 65, color: 'from-[#f7768e] to-[#ff007c]' },
  ];

  const stats = [
    { label: 'Projects Completed', value: 7, suffix: '+' },
    { label: 'Certifications', value: 4, suffix: '' },
    { label: 'Hackathons & Events', value: 6, suffix: '+' },
    { label: 'Years Learning', value: 3, suffix: '+' },
  ];

  return (
    <section id="skills" className="section-padding relative z-10 bg-[#1a1b26] border-t border-[#414868]/30">
      {/* Holographic grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMG0tMzkuNSA0MGg0MHYtNDAiIHN0cm9rZT0icmdiYSg2NSwgNzIsIDEwNCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#c0caf5]"
          >
            <DecryptText text="Data Metrics" className="text-gradient drop-shadow-[0_0_8px_rgba(187,154,247,0.5)] glitch-hover inline-block" />
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#7dcfff] mx-auto rounded-none shadow-[0_0_15px_rgba(125,207,255,0.8)]"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16" ref={ref}>
          {/* Technical Skills */}
          <div className="space-y-8 p-8 glass-card border border-[#7dcfff]/30 relative overflow-hidden group">
            {/* Holographic scanline overlay */}
            <div className="absolute inset-0 scanlines opacity-50"></div>
            
            <h3 className="text-2xl font-bold text-[#c0caf5] mb-6 tracking-widest uppercase flex items-center">
              <span className="w-2 h-6 bg-[#f7768e] mr-3 animate-pulse shadow-[0_0_10px_rgba(247,118,142,0.8)]"></span>
              Core Protocols
            </h3>
            
            <div className="space-y-6 relative z-10">
              {skills.map((skill, index) => (
                <div key={index} onMouseEnter={playHover} className="cursor-default">
                  <div className="flex justify-between mb-2">
                    <span className="font-mono text-sm uppercase tracking-widest text-[#7dcfff] group-hover:text-[#c0caf5] transition-colors drop-shadow-[0_0_5px_rgba(125,207,255,0.5)]">{skill.name}</span>
                    <span className="font-mono text-sm text-[#f7768e] font-bold drop-shadow-[0_0_5px_rgba(247,118,142,0.8)]">
                      <CountUp end={inView ? skill.level : 0} duration={2} />%
                    </span>
                  </div>
                  <div className="h-4 w-full bg-[#1a1b26] border border-[#414868] relative overflow-hidden">
                    {/* Striped data stream effect */}
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)] z-10 animate-[shimmer_2s_linear_infinite]"></div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.1, type: "spring", stiffness: 50 }}
                      className={`h-full bg-gradient-to-r ${skill.color} shadow-[0_0_15px_currentColor]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Tilt options={tiltOptions} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={playHover}
                  className="glass-card p-8 flex flex-col items-center justify-center text-center h-full border border-[#bb9af7]/30 hover:border-[#7dcfff] hover:shadow-[0_0_30px_rgba(125,207,255,0.3)] transition-all duration-300 cursor-pointer relative overflow-hidden group/stat"
                >
                  {/* Cyberpunk corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#7dcfff] opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#f7768e] opacity-0 group-hover/stat:opacity-100 transition-opacity"></div>
                  
                  <h4 className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-[#bb9af7] mb-2 drop-shadow-[0_0_15px_rgba(187,154,247,0.8)] group-hover/stat:glitch-hover relative z-10">
                    <CountUp end={inView ? stat.value : 0} duration={2.5} separator="," />
                    <span className="text-[#f7768e]">{stat.suffix}</span>
                  </h4>
                  <p className="font-mono text-xs text-[#7aa2f7] uppercase tracking-[0.2em] relative z-10">{stat.label}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
