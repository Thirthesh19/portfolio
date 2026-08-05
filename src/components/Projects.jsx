import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Code, Star, GitFork } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import axios from 'axios';
import { Tilt } from 'react-tilt';
import { useAudio } from '../context/AudioContext';
import DecryptText from './DecryptText';

const GITHUB_USERNAME = 'Thirthesh19'; // Configurable username

const tiltOptions = {
  reverse:        false,
  max:            15,
  perspective:    1000,
  scale:          1.02,
  speed:          1000,
  transition:     true,
  axis:           null,
  reset:          true,
  easing:         "cubic-bezier(.03,.98,.52,.99)",
}

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const { playHover, playClick } = useAudio();

  const categories = ['All', 'Web', 'Machine Learning', 'Security', 'GitHub'];

  // Static portfolio projects (synced with GitHub)
  const staticProjects = [
    {
      id: 1,
      name: 'AI Weather Forecast',
      description: 'A machine learning-based weather prediction system that forecasts temperature, humidity, rainfall, and weather conditions using historical weather data.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      category: 'Machine Learning',
      tech: ['Python', 'Machine Learning'],
      github: 'https://github.com/Thirthesh19/AI-weather-forecast',
      demo: '#',
      stars: 0,
      forks: 0,
      isGithub: true
    },
    {
      id: 2,
      name: 'CIPHERX',
      description: 'CipherX is a secure one-to-one messaging platform that helps users communicate safely while protecting personal information. It detects sensitive data such as Aadhaar numbers, PAN details, phone numbers, and email addresses in shared files, then highlights or masks them to prevent data leaks.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      category: 'Security',
      tech: ['JavaScript', 'Security', 'Web App', 'Data Privacy'],
      github: 'https://github.com/Thirthesh19/CIPHERX',
      demo: '#',
      stars: 0,
      forks: 0,
      isGithub: true
    },
    {
      id: 3,
      name: 'Hire Lens',
      description: 'Hire Lens: An intelligent web application for analyzing resumes, extracting skills, and matching candidates with job descriptions.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      category: 'Web',
      tech: ['JavaScript', 'Web App'],
      github: 'https://github.com/Thirthesh19/hire-lens',
      demo: '#',
      stars: 0,
      forks: 0,
      isGithub: true
    },
    {
      id: 4,
      name: 'Organ Donor Project',
      description: 'A platform to facilitate and manage organ donation, connecting donors and recipients for a noble cause.',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80',
      category: 'Web',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Thirthesh19/organ_donor_project',
      demo: '#',
      stars: 0,
      forks: 0,
      isGithub: true
    },
  ];

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        const githubProjects = response.data
          .filter(repo => !repo.archived) // Filter out archived repos
          .filter(repo => !staticProjects.some(sp => sp.github === repo.html_url)) // Prevent duplicates
          .slice(0, 6) // Take only the top 6 after filtering
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'No description provided.',
            category: 'GitHub',
            tech: [repo.language || 'Code'],
            github: repo.html_url,
            demo: repo.homepage || repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            isGithub: true
          }));
        setProjects([...staticProjects, ...githubProjects]);
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  const filteredProjects = projects.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="section-padding bg-[#1a1b26] relative border-t border-[#414868]/30">
      {/* Background Cyberpunk Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMG0tMzkuNSA0MGg0MHYtNDAiIHN0cm9rZT0icmdiYSgxMjUsIDIwNywgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#c0caf5]"
          >
            <DecryptText text="Holo Projections" className="text-gradient drop-shadow-[0_0_8px_rgba(187,154,247,0.5)] glitch-hover inline-block" />
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#bb9af7] mx-auto rounded-none mb-8 shadow-[0_0_15px_rgba(187,154,247,0.8)]"
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => { playClick(); setFilter(cat); }}
                onMouseEnter={playHover}
                className={`px-6 py-2 font-mono uppercase tracking-widest text-sm transition-all border ${
                  filter === cat
                    ? 'bg-[#7dcfff]/20 text-[#7dcfff] border-[#7dcfff] shadow-[0_0_15px_rgba(125,207,255,0.4)]'
                    : 'bg-transparent text-[#9aa5ce] border-[#414868] hover:border-[#bb9af7] hover:text-[#bb9af7] hover:bg-[#bb9af7]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-none h-12 w-12 border-t-2 border-r-2 border-[#7dcfff] shadow-[0_0_15px_rgba(125,207,255,0.8)]"></div>
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <Tilt options={tiltOptions} key={project.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card overflow-hidden group cursor-pointer flex flex-col h-full border border-[#7dcfff]/30 hover:border-[#f7768e] hover:shadow-[0_0_25px_rgba(247,118,142,0.3)] relative"
                    onClick={() => { playClick(); setSelectedProject(project); }}
                    onMouseEnter={playHover}
                  >
                    {/* Scanlines overlay for the card */}
                    <div className="absolute inset-0 scanlines opacity-30 pointer-events-none z-10 group-hover:opacity-50 transition-opacity"></div>
                    
                    {/* Cyberpunk corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#7dcfff] z-20"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#7dcfff] z-20 group-hover:border-[#f7768e] transition-colors"></div>

                    <div className="relative h-48 overflow-hidden bg-[#24283b] flex items-center justify-center">
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal filter sepia-[.3] hue-rotate-[180deg]"
                        />
                      ) : (
                        <FaGithub size={64} className="text-[#414868] transform group-hover:scale-110 transition-transform duration-500" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26] via-transparent to-transparent opacity-90"></div>
                      <div className="absolute inset-0 bg-[#f7768e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen pointer-events-none"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-20">
                        <span className="font-mono text-[#c0caf5] text-xs font-medium border border-[#f7768e]/50 px-4 py-2 bg-[#1a1b26]/80 backdrop-blur-md uppercase tracking-widest shadow-[0_0_10px_rgba(247,118,142,0.4)]">Access Data</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col bg-[#1a1b26]/80 backdrop-blur-md relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-[#c0caf5] line-clamp-1 group-hover:text-[#f7768e] transition-colors glitch-hover" data-text={project.name}>{project.name}</h3>
                        {project.isGithub && (
                          <div className="flex space-x-2 text-[#9aa5ce] text-xs font-mono">
                            <span className="flex items-center"><Star size={12} className="mr-1 text-[#e0af68]" />{project.stars}</span>
                            <span className="flex items-center"><GitFork size={12} className="mr-1 text-[#7aa2f7]" />{project.forks}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-[#9aa5ce] text-sm mb-4 line-clamp-3 flex-grow font-light border-l border-[#414868] pl-3 group-hover:border-[#bb9af7] transition-colors">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t, i) => (
                          <span key={i} className="font-mono text-[10px] font-medium text-[#7dcfff] bg-[#7dcfff]/10 border border-[#7dcfff]/30 px-2 py-1 rounded-none uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1a1b26]/90 backdrop-blur-lg"
            onClick={() => { playClick(); setSelectedProject(null); }}
          >
            {/* Scanlines for full screen modal background */}
            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1b26] rounded-none border-2 border-[#7dcfff] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(125,207,255,0.2)] relative z-10"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-96 bg-[#1a1b26] flex items-center justify-center border-b border-[#7dcfff]/30 overflow-hidden group">
                <div className="absolute inset-0 scanlines opacity-40 pointer-events-none z-10"></div>
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover opacity-80 mix-blend-luminosity filter sepia-[.2] hue-rotate-[180deg]" />
                ) : (
                  <FaGithub size={80} className="text-[#414868]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26] to-transparent z-10"></div>
                
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(125,207,255,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>

                <button 
                  onClick={() => { playClick(); setSelectedProject(null); }}
                  onMouseEnter={playHover}
                  className="absolute top-4 right-4 p-2 bg-[#1a1b26] text-[#7dcfff] border border-[#7dcfff] hover:bg-[#f7768e]/20 hover:text-[#f7768e] hover:border-[#f7768e] transition-all z-20 shadow-[0_0_10px_rgba(125,207,255,0.3)]"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-8 relative">
                {/* Cyberpunk corner accents for modal content */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#7dcfff] opacity-50"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c0caf5] drop-shadow-[0_0_8px_rgba(192,202,245,0.5)] uppercase tracking-wider glitch-hover relative inline-block">
                    <span className="glitch-text" data-text={selectedProject.name}>{selectedProject.name}</span>
                  </h3>
                  <span className="font-mono text-xs font-medium text-[#f7768e] bg-[#f7768e]/10 border border-[#f7768e]/30 px-3 py-1 uppercase tracking-widest shadow-[0_0_10px_rgba(247,118,142,0.2)]">
                    {selectedProject.category}
                  </span>
                </div>
                
                {selectedProject.isGithub && (
                  <div className="flex space-x-4 text-[#9aa5ce] mb-6 font-mono text-sm">
                    <span className="flex items-center"><Star size={14} className="mr-2 text-[#e0af68]" /> {selectedProject.stars} Stars</span>
                    <span className="flex items-center"><GitFork size={14} className="mr-2 text-[#7aa2f7]" /> {selectedProject.forks} Forks</span>
                  </div>
                )}

                <p className="text-[#9aa5ce] mb-8 leading-relaxed text-lg font-light border-l-2 border-[#bb9af7]/50 pl-4 bg-[#24283b]/30 p-4">
                  <span className="text-[#bb9af7] font-mono text-sm block mb-2">&gt; Description Log:</span>
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-mono text-sm tracking-widest uppercase mb-3 flex items-center text-[#c0caf5]">
                    <Code size={16} className="mr-2 text-[#7dcfff]" /> System Requirements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="font-mono text-xs font-medium text-[#7aa2f7] bg-[#24283b] px-3 py-1 border border-[#414868]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="flex-1 flex items-center justify-center space-x-2 py-4 bg-[#7dcfff]/10 text-[#7dcfff] border border-[#7dcfff] hover:bg-[#7dcfff]/20 hover:shadow-[0_0_20px_rgba(125,207,255,0.4)] font-mono font-medium uppercase tracking-widest text-sm transition-all group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#7dcfff]/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    <ExternalLink size={18} />
                    <span>Initialize Sequence</span>
                  </a>
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="flex-1 flex items-center justify-center space-x-2 py-4 bg-[#24283b] hover:bg-[#414868]/60 text-[#c0caf5] border border-[#414868] hover:border-[#bb9af7]/50 hover:text-[#bb9af7] hover:shadow-[0_0_20px_rgba(187,154,247,0.3)] font-mono font-medium uppercase tracking-widest text-sm transition-all"
                  >
                    <FaGithub size={18} />
                    <span>View Source Data</span>
                  </a>
                  <button 
                    onClick={() => { playClick(); setSelectedProject(null); }}
                    onMouseEnter={playHover}
                    className="flex-1 flex items-center justify-center space-x-2 py-4 bg-transparent hover:bg-[#f7768e]/10 text-[#f7768e] border border-[#f7768e] hover:shadow-[0_0_20px_rgba(247,118,142,0.3)] font-mono font-medium uppercase tracking-widest text-sm transition-all"
                  >
                    <X size={18} />
                    <span>Close Terminal</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
