import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Code, PenTool, Database, Search } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { useAudio } from '../context/AudioContext';
import DecryptText from './DecryptText';

const tiltOptions = {
  reverse:        false,
  max:            25,
  perspective:    1000,
  scale:          1.05,
  speed:          1000,
  transition:     true,
  axis:           null,
  reset:          true,
  easing:         "cubic-bezier(.03,.98,.52,.99)",
}

const Services = () => {
  const { playHover } = useAudio();

  const services = [
    {
      title: 'Full Stack Development',
      description: 'Building complete web applications with frontend, backend, and database integration.',
      icon: Code,
      color: 'text-[#7dcfff]',
      bg: 'bg-[#7dcfff]/10',
      glow: 'group-hover:shadow-[0_0_20px_rgba(125,207,255,0.4)] hover:border-[#7dcfff]'
    },
    {
      title: 'Web Development',
      description: 'Creating responsive, modern, and user-friendly websites using current technologies.',
      icon: Layout,
      color: 'text-[#bb9af7]',
      bg: 'bg-[#bb9af7]/10',
      glow: 'group-hover:shadow-[0_0_20px_rgba(187,154,247,0.4)] hover:border-[#bb9af7]'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing clean and intuitive interfaces that enhance user experience.',
      icon: PenTool,
      color: 'text-[#f7768e]',
      bg: 'bg-[#f7768e]/10',
      glow: 'group-hover:shadow-[0_0_20px_rgba(247,118,142,0.4)] hover:border-[#f7768e]'
    },
    {
      title: 'Database Management',
      description: 'Developing and managing efficient database systems for web applications.',
      icon: Database,
      color: 'text-[#9ece6a]',
      bg: 'bg-[#9ece6a]/10',
      glow: 'group-hover:shadow-[0_0_20px_rgba(158,206,106,0.4)] hover:border-[#9ece6a]'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Exploring intelligent systems and data-driven solutions using machine learning techniques.',
      icon: Search,
      color: 'text-[#e0af68]',
      bg: 'bg-[#e0af68]/10',
      glow: 'group-hover:shadow-[0_0_20px_rgba(224,175,104,0.4)] hover:border-[#e0af68]'
    },
    {
      title: 'Software Development',
      description: 'Developing scalable and practical software solutions to solve real-world problems.',
      icon: Smartphone,
      color: 'text-[#7aa2f7]',
      bg: 'bg-[#7aa2f7]/10',
      glow: 'group-hover:shadow-[0_0_20px_rgba(122,162,247,0.4)] hover:border-[#7aa2f7]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="section-padding bg-[#1a1b26] relative z-10 border-t border-[#414868]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#c0caf5]"
          >
            <DecryptText text="My Services" className="text-gradient drop-shadow-[0_0_8px_rgba(125,207,255,0.5)]" />
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#7dcfff] mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(125,207,255,0.8)]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#9aa5ce] font-light max-w-2xl mx-auto"
          >
            I offer a wide range of digital services to help bring your ideas to life. From concept to deployment, I handle every aspect of the development process.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt options={tiltOptions} className="h-full">
                <div 
                  className={`glass-card rounded-none border border-[#414868] p-8 group h-full transition-all duration-300 relative overflow-hidden cursor-default ${service.glow}`}
                  onMouseEnter={playHover}
                >
                  {/* Animated background glow on hover */}
                  <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full ${service.bg} opacity-0 group-hover:opacity-100 blur-[50px] transition-opacity duration-500`}></div>
                  
                  <div className={`w-14 h-14 rounded-sm border border-transparent group-hover:border-current ${service.bg} ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300`}>
                    <service.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#c0caf5] mb-4 tracking-wide group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#9aa5ce] leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
