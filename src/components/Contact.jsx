import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Globe } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useAudio } from '../context/AudioContext';
import DecryptText from './DecryptText';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { playHover, playClick } = useAudio();

  const handleChange = (e) => {
    // We could add a very soft keypress sound here if we wanted, but might be too much.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.', {
        style: { background: '#24283b', color: '#c0caf5', border: '1px solid #f7768e' }
      });
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post('https://formsubmit.co/ajax/thirthesh19@gmail.com', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        _subject: formData.subject || "New Portfolio Message"
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      toast.success('Message transmitted successfully.', {
        style: { background: '#24283b', color: '#c0caf5', border: '1px solid #9ece6a' }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Transmission failed. Please try again later.', {
        style: { background: '#24283b', color: '#c0caf5', border: '1px solid #f7768e' }
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#1a1b26] relative z-10 border-t border-[#414868]/30">
      <ToastContainer position="bottom-right" theme="dark" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 text-[#c0caf5]"
          >
            <DecryptText text="Initiate Link" className="text-gradient drop-shadow-[0_0_8px_rgba(187,154,247,0.5)]" />
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#bb9af7] mx-auto rounded-full mb-6 shadow-[0_0_10px_rgba(187,154,247,0.8)]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#9aa5ce] font-light max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Establish a secure connection below.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass-card rounded-none border border-[#414868] p-8 hover:border-[#7aa2f7]/50 transition-colors duration-300 h-full">
              <h3 className="text-2xl font-bold mb-6 text-[#c0caf5] tracking-wide">Comms Array</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 group" onMouseEnter={playHover}>
                  <div className="w-12 h-12 rounded-none border border-[#7dcfff]/30 bg-[#7dcfff]/10 flex items-center justify-center text-[#7dcfff] flex-shrink-0 group-hover:bg-[#7dcfff] group-hover:text-[#1a1b26] transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#c0caf5]">Coordinates</h4>
                    <p className="text-[#9aa5ce] font-light">Puttur, Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group" onMouseEnter={playHover}>
                  <div className="w-12 h-12 rounded-none border border-[#bb9af7]/30 bg-[#bb9af7]/10 flex items-center justify-center text-[#bb9af7] flex-shrink-0 group-hover:bg-[#bb9af7] group-hover:text-[#1a1b26] transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#c0caf5]">Network Address</h4>
                    <a href="mailto:thirthesh19@gmail.com" className="text-[#9aa5ce] hover:text-[#bb9af7] transition-colors font-light drop-shadow-[0_0_5px_rgba(187,154,247,0)] hover:drop-shadow-[0_0_5px_rgba(187,154,247,0.8)]">thirthesh19@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group" onMouseEnter={playHover}>
                  <div className="w-12 h-12 rounded-none border border-[#e0af68]/30 bg-[#e0af68]/10 flex items-center justify-center text-[#e0af68] flex-shrink-0 group-hover:bg-[#e0af68] group-hover:text-[#1a1b26] transition-all duration-300">
                    <FaLinkedin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#c0caf5]">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/thirthesh-b-n-6a764231b/" target="_blank" rel="noopener noreferrer" className="text-[#9aa5ce] hover:text-[#e0af68] transition-colors font-light drop-shadow-[0_0_5px_rgba(224,175,104,0)] hover:drop-shadow-[0_0_5px_rgba(224,175,104,0.8)]">Thirthesh B N</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-none border border-[#414868] p-8 hover:border-[#f7768e]/30 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#7aa2f7] mb-2 uppercase tracking-widest">Identifier *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onClick={playClick}
                      className="w-full px-4 py-3 rounded-none bg-[#24283b] border border-[#414868] focus:outline-none focus:border-[#7dcfff] focus:shadow-[0_0_10px_rgba(125,207,255,0.3)] transition-all text-[#c0caf5] placeholder-[#414868]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#7aa2f7] mb-2 uppercase tracking-widest">Return Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onClick={playClick}
                      className="w-full px-4 py-3 rounded-none bg-[#24283b] border border-[#414868] focus:outline-none focus:border-[#bb9af7] focus:shadow-[0_0_10px_rgba(187,154,247,0.3)] transition-all text-[#c0caf5] placeholder-[#414868]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#7aa2f7] mb-2 uppercase tracking-widest">Protocol Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onClick={playClick}
                    className="w-full px-4 py-3 rounded-none bg-[#24283b] border border-[#414868] focus:outline-none focus:border-[#e0af68] focus:shadow-[0_0_10px_rgba(224,175,104,0.3)] transition-all text-[#c0caf5] placeholder-[#414868]"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#7aa2f7] mb-2 uppercase tracking-widest">Data Payload *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onClick={playClick}
                    className="w-full px-4 py-3 rounded-none bg-[#24283b] border border-[#414868] focus:outline-none focus:border-[#f7768e] focus:shadow-[0_0_10px_rgba(247,118,142,0.3)] transition-all text-[#c0caf5] resize-none placeholder-[#414868]"
                    placeholder="Enter parameters..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  onMouseEnter={playHover}
                  className="w-full py-4 bg-transparent text-[#7dcfff] border border-[#7dcfff] font-medium flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(125,207,255,0.2)] hover:shadow-[0_0_25px_rgba(125,207,255,0.6)] hover:bg-[#7dcfff]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#7dcfff] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Transmit</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
