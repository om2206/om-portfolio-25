'use client';

import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay navigation appearance to sync with typewriter effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust timing to match your typewriter effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/20 border-b border-gray-500/30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl text-white font-ibm-plex-serif hover:text-gray-300 transition-colors">
            Omkar Gandhi
          </a>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors font-ibm-plex-serif">
                About Me
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-ibm-plex-serif">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-ibm-plex-serif">
                Contact
              </a>
            </div>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-white/10 border border-gray-400/50 text-white rounded-lg hover:bg-white/20 hover:border-gray-300 transition-all duration-300 font-ibm-plex-serif"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 