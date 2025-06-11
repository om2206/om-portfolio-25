'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ETRLPoolBoilingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Back Button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div 
                className="text-2xl text-white font-ibm-plex-serif hover:text-gray-300 transition-colors cursor-pointer"
                whileHover={{ x: -5 }}
                transition={{ duration: 0.2 }}
              >
                ← Back to Portfolio
              </motion.div>
            </Link>
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
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-gray-900/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-ibm-plex-serif mb-6">
                THERMAL RESEARCH
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-ibm-plex-serif">
                ETRL – Pool Boiling Apparatus Research
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif">
                Advanced thermal research project focused on three-phase flow heat exchanger experiments
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 font-ibm-plex-serif">Project Overview</h2>
                <div className="space-y-4 text-gray-300 font-ibm-plex-serif">
                  <p>
                    Working on cutting-edge thermal research at the Energy Transport Research Laboratory (ETRL), 
                    focusing on three-phase flow heat exchanger experiments to advance our understanding of 
                    heat transfer mechanisms.
                  </p>
                  <p>
                    This research involves designing and testing specialized equipment for pool boiling 
                    experiments, with applications in energy systems, cooling technologies, and thermal 
                    management solutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900 to-gray-800 rounded-xl p-8 flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-gray-300">Calorimeter & Setup Images</p>
                    <p className="text-sm text-gray-400 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Accomplishments */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl font-bold mb-12 text-center font-ibm-plex-serif"
            >
              Key Accomplishments
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                    </svg>
                  ),
                  title: "Three-Phase Flow Research",
                  description: "Conducted experiments on three-phase flow heat exchanger systems to understand complex thermal dynamics."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Calorimeter Design",
                  description: "Designed and developed specialized calorimeter equipment for precise thermal measurements in pool boiling experiments."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  title: "Ceramic Insulation Block",
                  description: "Engineered thermal insulation components to optimize heat transfer efficiency and minimize energy losses."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ),
                  title: "LabView Instrumentation",
                  description: "Developed comprehensive LabView-based instrumentation setup for real-time data acquisition and analysis."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: "Research Publications",
                  description: "Co-authoring two technical papers based on experimental findings and thermal analysis results."
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ),
                  title: "Ongoing Validation",
                  description: "Continuing testing and validation processes throughout summer 2024 to ensure experimental accuracy and reproducibility."
                }
              ].map((accomplishment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-neutral-900 rounded-lg p-6 hover:bg-neutral-800 transition-colors duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      {accomplishment.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-ibm-plex-serif">{accomplishment.title}</h3>
                  <p className="text-gray-400 font-ibm-plex-serif">{accomplishment.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills & Tools */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl font-bold mb-12 text-center font-ibm-plex-serif"
            >
              Technical Skills & Tools
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['THERMAL ANALYSIS', 'EXPERIMENTAL DESIGN', 'LABVIEW', 'HEAT TRANSFER', 'INSTRUMENTATION', 'RESEARCH'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors duration-300"
                >
                  <span className="text-gray-300 text-sm font-ibm-plex-serif uppercase tracking-wide">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Back to Portfolio */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 font-ibm-plex-serif">Interested in Learning More?</h2>
              <p className="text-xl text-gray-300 mb-8 font-ibm-plex-serif">
                This research is ongoing and represents my commitment to advancing thermal engineering knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-ibm-plex-serif"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Portfolio
                </motion.a>
                <motion.a
                  href="mailto:omgandhi2206@gmail.com?subject=ETRL Research Inquiry"
                  className="inline-flex items-center px-8 py-4 border border-gray-400 text-gray-200 rounded-lg hover:bg-gray-800 hover:border-gray-300 transition-all duration-300 font-ibm-plex-serif"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ETRLPoolBoilingPage; 