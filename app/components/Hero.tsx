'use client';

import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import GearSystem from './GearSystem';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Omkar";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/* Landing Section with CAD Interface */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
        
        {/* CAD Interface Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* CAD Software Interface Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iY2FkLWdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTU1IiBzdHJva2Utd2lkdGg9IjAuNSIvPgogICAgPHBhdGggZD0iTSAxMCAwIEwgMTAgNDAgTSAyMCAwIEwgMjAgNDAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ0NCIgc3Ryb2tlLXdpZHRoPSIwLjMiLz4KICAgIDxwYXRoIGQ9Ik0gMCAxMCBMIDQwIDEwIE0gMCAyMCBMIDQwIDIwIE0gMCAzMCBMIDQwIDMwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NDQiIHN0cm9rZS13aWR0aD0iMC4zIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTFhMWEiLz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjYWQtZ3JpZCkiLz4KPC9zdmc+')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* CAD Interface Elements */}
          <div className="absolute inset-0">
            {/* Left Panel - Object Browser */}
            <div className="absolute left-0 top-0 w-64 h-full bg-gray-800 bg-opacity-40 border-r border-gray-500 opacity-40">
              <div className="p-4 space-y-2">
                {['Objects', 'Object_01', 'Object_02', 'Shaft', 'Gear_A', 'Gear_B', 'Housing', 'Bearing'].map((item, i) => (
                  <div key={i} className="text-xs text-gray-300 py-1 px-2 hover:bg-gray-700 transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Top Toolbar */}
            <div className="absolute top-0 left-64 right-0 h-16 bg-gray-800 bg-opacity-40 border-b border-gray-500 opacity-40">
              <div className="flex items-center h-full px-4 space-x-4">
                {['File', 'Edit', 'View', 'Insert', 'Tools', 'Window', 'Help'].map((item, i) => (
                  <div key={i} className="text-sm text-gray-300 px-3 py-1 hover:bg-gray-700 transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Main 3D Viewport with Grid */}
            <div className="absolute left-64 top-16 right-80 bottom-16 border border-gray-500 opacity-50">
              {/* 3D Grid Background */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="viewport-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#888" strokeWidth="0.5"/>
                    <path d="M 0 15 L 30 15 M 15 0 L 15 30" fill="none" stroke="#666" strokeWidth="0.25" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#viewport-grid)" />
              </svg>

              {/* ANIMATED GEARS WILL BE ADDED HERE */}
              <GearSystem />
              
            </div>

            {/* Right Panel - Properties */}
            <div className="absolute right-0 top-16 w-80 bottom-16 bg-gray-800 bg-opacity-40 border-l border-gray-500 opacity-40">
              <div className="p-4 space-y-4">
                <div className="text-sm text-gray-300 border-b border-gray-500 pb-2">Properties</div>
                {['Material: Steel AISI 1045', 'Module: 2.5', 'Pressure Angle: 20°', 'Face Width: 25mm', 'Gear Ratio: 1.33:1', 'Center Distance: 175mm'].map((prop, i) => (
                  <div key={i} className="text-xs text-gray-400 py-1">
                    {prop}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-64 right-0 h-16 bg-gray-800 bg-opacity-40 border-t border-gray-500 opacity-40">
              <div className="flex items-center h-full px-4 space-x-6 text-xs text-gray-400">
                <span>Ready</span>
                <span>Objects: 8</span>
                <span>Faces: 2,847</span>
                <span>Vertices: 5,694</span>
                <span>Scale: 1:1</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-12 font-radley"
          >
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h1>

          <div
            className="flex gap-4 justify-center"
          >
            <a href="#about" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-semibold font-ibm-plex-serif">
              About Me
            </a>
            <a href="#projects" className="px-6 py-3 border border-gray-400 text-gray-200 rounded-lg hover:bg-gray-800 hover:border-gray-300 transition-colors font-semibold font-ibm-plex-serif">
              View Projects
            </a>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob" />
          <div className="absolute w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000" />
          <div className="absolute w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className="min-h-screen bg-neutral-900 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center font-ibm-plex-serif"
            >
              About Me
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div 
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 transition-all duration-300 hover:ring-blue-500/40 hover:scale-105">
                    <img
                      src="/profile.jpeg"
                      alt="Omkar Gandhi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10 pointer-events-none" />
                </div>
              </div>

              <div 
                className="lg:pl-8"
              >
                <div className="mb-8">
                  <p className="text-2xl md:text-3xl text-blue-400 font-ibm-plex-serif leading-relaxed">
                    Driven by curiosity, shaped by precision, and focused on innovation
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed font-ibm-plex-serif">
                    Passionate about mechanical design, advanced manufacturing, and engineering innovation.
                    I strive to apply my skills to push the boundaries of technology and help design a smarter, more sustainable future.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed font-ibm-plex-serif">
                    I'm an Engineering Mechanics student at the University of Illinois with a passion for mechanical design, manufacturing, and engineering. I'm excited to leverage my skills and knowledge to explore new frontiers in technology and contribute to building a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center font-ibm-plex-serif"
            >
              Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hub-Carrier Project Card */}
              <div>
                <ProjectCard
                  title="Hub-Carrier Module"
                  summary="Preload system, rotary sealing, and structural optimization for a lightweight, high-efficiency drivetrain module."
                  images={[
                    '/cross-section-of-corner.jpeg',
                    '/exploded-hub-carrier-assembly.jpeg'
                  ]}
                  tags={['CAD DESIGN', 'MECHANICAL ENGINEERING', 'GEAR SYSTEMS', 'ASSEMBLY DESIGN', 'STRUCTURAL ANALYSIS', 'TOPOLOGY OPTIMIZATION']}
                  projectSlug="hub-carrier-module"
                />
              </div>

              {/* ETRL Pool Boiling Apparatus Research Project Card */}
              <div
                className="group"
              >
                <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-800 group-hover:from-blue-800 group-hover:to-gray-700 transition-colors flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-300">Calorimeter & Setup Images</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-ibm-plex-serif">
                      THERMAL RESEARCH
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-ibm-plex-serif">
                      ETRL – Pool Boiling Apparatus Research
                    </h3>
                    <div className="text-gray-400 mb-4 font-ibm-plex-serif space-y-2 text-sm">
                      <p>• Worked on a three-phase flow heat exchanger experiment</p>
                      <p>• Designed a calorimeter and ceramic insulation block</p>
                      <p>• Developed LabView-based instrumentation setup</p>
                      <p>• Co-authoring two papers based on findings</p>
                      <p>• Ongoing testing and validation in summer 2024</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['THERMAL ANALYSIS', 'EXPERIMENTAL DESIGN', 'LABVIEW', 'HEAT TRANSFER', 'INSTRUMENTATION', 'RESEARCH'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-ibm-plex-serif uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 3 Placeholder */}
              <div
                className="group"
              >
                <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors" />
                    <div className="absolute top-4 left-4 bg-gray-600 text-white px-2 py-1 rounded text-xs font-ibm-plex-serif">
                      PROJECT 03
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-ibm-plex-serif">
                      Project 3
                    </h3>
                    <p className="text-gray-400 mb-4 font-ibm-plex-serif">
                      Engineering project description will go here
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['CAD DESIGN', 'ANALYSIS', 'PROTOTYPING'].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-ibm-plex-serif uppercase tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-neutral-900 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-12 text-center font-ibm-plex-serif"
            >
              Get in Touch
            </h2>
            <div className="text-center mb-16">
              <p className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif">
                Have a question or want to work together? I'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div 
                className="group"
              >
                <div className="bg-neutral-800 rounded-lg p-8 hover:bg-neutral-750 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-ibm-plex-serif">Email</h3>
                  </div>
                  <a
                    href="mailto:omgandhi2206@gmail.com"
                    className="block text-gray-300 hover:text-blue-400 transition-colors text-lg font-ibm-plex-serif"
                  >
                    omgandhi2206@gmail.com
                  </a>
                </div>
              </div>

              <div 
                className="group"
              >
                <div className="bg-neutral-800 rounded-lg p-8 hover:bg-neutral-750 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white font-ibm-plex-serif">LinkedIn</h3>
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/omkar-gandhi/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-lg font-ibm-plex-serif"
                  >
                    Connect with me on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div 
              className="text-center"
            >
              <p className="text-lg text-gray-400 mb-8 font-ibm-plex-serif">
                Looking forward to collaborating on innovative engineering projects!
              </p>
              <a
                href="mailto:omgandhi2206@gmail.com?subject=Portfolio Inquiry"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-ibm-plex-serif"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 