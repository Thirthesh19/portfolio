import React from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import DecryptText from './DecryptText';

const About = () => {
  const { playHover, playClick } = useAudio();

  const timeline = [
    {
      year: '2025 - Present',
      title: 'Master of Computer Applications (MCA)',
      company: 'Postgraduate Degree',
      icon: GraduationCap,
      description: 'Focusing on Software Engineering, Web Development, Artificial Intelligence, and Database Systems. Developing academic and personal projects using modern technologies.'
    },
    {
      year: '2022 - 2025',
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Undergraduate Degree',
      icon: GraduationCap,
      description: 'Built a strong foundation in programming, databases, networking, and software engineering concepts. Participated in technical events and project development.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-[#1a1b26] relative z-10 border-t border-[#414868]/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#c0caf5]"
          >
            <DecryptText text="About Me" className="text-gradient drop-shadow-[0_0_8px_rgba(187,154,247,0.5)]" />
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#bb9af7] mx-auto rounded-full shadow-[0_0_10px_rgba(187,154,247,0.8)]"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image and basic info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7dcfff] to-[#bb9af7] rounded-none blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div 
                className="relative glass-card rounded-none border border-[#414868] hover:border-[#7dcfff]/50 p-8 text-center space-y-6 transition-all duration-300"
                onMouseEnter={playHover}
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-[#7dcfff]/50 p-1 shadow-[0_0_15px_rgba(125,207,255,0.3)]">
                  <div className="w-full h-full bg-[#24283b] rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/thirthesh-pic.jpeg" alt="Thirthesh B N" className="w-full h-full object-cover rounded-full filter hover:contrast-125 transition-all duration-300" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#c0caf5] mb-2 tracking-wide">Thirthesh B N</h3>
                  <p className="text-[#bb9af7] font-medium uppercase text-sm tracking-widest">MCA Student | Aspiring Software Engineer</p>
                </div>

                <p className="text-[#9aa5ce] text-left leading-relaxed font-light">
                  I am currently pursuing a Master of Computer Applications (MCA) and have a strong interest in software development, web technologies, artificial intelligence, and problem-solving. I enjoy creating modern web applications that are both functional and user-friendly. Through academic projects and self-learning, I have gained experience in web development, database management, and programming.
                </p>

                <div className="grid grid-cols-2 gap-4 text-left pt-4 border-t border-[#414868]/50">
                  <div>
                    <p className="text-sm text-[#7aa2f7] mb-1">Experience</p>
                    <p className="font-semibold text-[#c0caf5]">MCA Student</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#7aa2f7] mb-1">Location</p>
                    <p className="font-semibold text-[#c0caf5]">Puttur, India</p>
                  </div>
                </div>

                <a 
                  href="/my_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  className="w-full py-4 bg-transparent border border-[#7dcfff] text-[#7dcfff] font-medium flex items-center justify-center space-x-2 hover:bg-[#7dcfff]/10 hover:shadow-[0_0_15px_rgba(125,207,255,0.4)] transition-all uppercase tracking-widest text-sm"
                >
                  <Download size={18} />
                  <span>Resume Link</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-[#c0caf5] tracking-wide">
              <Calendar className="mr-3 text-[#bb9af7]" />
              <DecryptText text="System History" delay={300} />
            </h3>

            <div className="relative border-l border-[#414868] pl-8 space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative group" onMouseEnter={playHover}>
                  <div className="absolute -left-[37px] bg-[#24283b] border-2 border-[#bb9af7] w-4 h-4 rounded-full group-hover:scale-150 group-hover:bg-[#bb9af7] group-hover:shadow-[0_0_10px_rgba(187,154,247,0.8)] transition-all duration-300"></div>
                  
                  <div className="glass-card rounded-none border border-[#414868] p-6 transform group-hover:translate-x-2 group-hover:border-[#bb9af7]/50 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <item.icon className="text-[#7dcfff]" size={18} />
                      <span className="text-sm font-medium text-[#7dcfff] tracking-wider">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#c0caf5] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#7aa2f7] mb-4 uppercase tracking-widest">{item.company}</p>
                    <p className="text-[#9aa5ce] text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
