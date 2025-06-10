'use client';

import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg border-b border-gray-800/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl text-white font-ibm-plex-serif hover:text-gray-300 transition-colors">
            Omkar Gandhi
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors font-ibm-plex-serif">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors font-ibm-plex-serif">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-ibm-plex-serif">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 