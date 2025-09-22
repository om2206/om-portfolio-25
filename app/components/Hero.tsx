'use client';

import React, { useState, useEffect } from 'react';
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
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [fullText]);

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
      <section id="about" className="min-h-screen bg-neutral-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
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
                  
                  {/* Anglegrinder bubble - positioned on top-left diagonal with distance */}
                  <div className="absolute -top-20 -left-32 md:-top-24 md:-left-40 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20 transition-all duration-300 hover:ring-white/40 hover:scale-110 group">
                    <img
                      src="/anglegrinder.jpg"
                      alt="Angle Grinder Work"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 to-red-500/20 pointer-events-none" />
                  </div>
                  
                  {/* Climbing bubble - positioned on bottom-left diagonal with distance */}
                  <div className="absolute -bottom-20 -left-32 md:-bottom-24 md:-left-40 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg ring-2 ring-white/20 transition-all duration-300 hover:ring-white/40 hover:scale-110 group">
                    <img
                      src="/climbing.jpg"
                      alt="Rock Climbing"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-500/20 to-blue-500/20 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div 
                className="lg:pl-0 lg:ml-12"
              >
                <div className="mb-8">
                  <p className="text-3xl md:text-4xl text-white font-ibm-plex-serif leading-relaxed">
                    Hello 👋
                  </p>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed font-ibm-plex-serif">
                    I'm passionate about mechanical design, advanced manufacturing, and engineering innovation.
                    I strive to apply my skills to push the boundaries of technology and help design a smarter, more sustainable future.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed font-ibm-plex-serif">
                    I'm a rising senior at the University of Illinois Urbana-Champaign, majoring in Engineering Mechanics with a minor in Computer Science. I'm passionate about designing and building innovative systems—both digitally and hands-on—often bringing ideas to life through 3D printing and mechanical prototyping.
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
          <div className="max-w-7xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-16 text-center font-ibm-plex-serif"
            >
              Featured Projects
            </h2>
            
            {/* Horizontal Gallery - All Projects in One Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {/* SHELBOW Capstone Project Card */}
              <ProjectCard
                title="SHELBOW - ME 470 Capstone"
                summary="Innovative spring pulley system arm sling for stroke rehabilitation developed in partnership with Carle College of Medicine Illinois."
                images={[
                  '/prototype.jpg',
                  '/Prototype Sketch.jpg',
                  '/Prototype video.mp4'
                ]}
                projectSlug="shelbow-me-470"
              />

              {/* Hub-Carrier Project Card */}
              <ProjectCard
                title="Hub-Carrier Module"
                summary="Preload system, rotary sealing, and structural optimization for a lightweight, high-efficiency drivetrain module."
                images={[
                  '/cross-section-of-corner.jpeg',
                  '/exploded-hub-carrier-assembly.jpeg',
                  '/seal.png',
                  '/Gearbox view.jpeg'
                ]}
                projectSlug="hub-carrier-module"
              />

              {/* ETRL Pool Boiling Project Card */}
              <ProjectCard
                title="ETRL Pool Boiling Research"
                summary="Thermal engineering research project investigating pool boiling heat transfer phenomena and critical heat flux mechanisms."
                images={[
                  '/calorie.png',
                  '/Lab view.png',
                  '/Setup Images.jpg'
                ]}
                projectSlug="etrl-pool-boiling"
              />

              {/* ME 371 Project Card */}
              <ProjectCard
                title="ME 371 Project"
                summary="Built and tested robot with functioning three-speed gearbox to perform a range of tasks including Speed, Agility, and Strength tests."
                images={[
                  '/Robot.png',
                  '/Gear assembly.png',
                  '/Ball lock cross section.png',
                  '/Robot Top view.png'
                ]}
                projectSlug="me-371-project"
              />
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