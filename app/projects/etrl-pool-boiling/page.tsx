'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';

const ETRLPoolBoilingPage = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    caption: string;
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    caption: ''
  });

  const openModal = (imageSrc: string, imageAlt: string, caption: string) => {
    setModalData({
      isOpen: true,
      imageSrc,
      imageAlt,
      caption
    });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

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
                Omkar Gandhi
              </motion.div>
            </Link>
            <Link href="/#projects">
              <motion.div 
                className="text-lg text-white font-ibm-plex-serif hover:text-gray-300 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                ← Back to Projects
              </motion.div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Project Title and Summary */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-ibm-plex-serif">
              ETRL Pool Boiling Research
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif">
              Advanced thermal engineering research investigating pool boiling heat transfer phenomena, 
              critical heat flux mechanisms, and three-phase flow heat exchanger experiments with precision 
              calorimeter design and LabVIEW instrumentation systems.
            </p>
          </motion.div>

          {/* Project Images */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div 
              className="group"
              onClick={() => openModal('/calorie.png', 'Calorimeter Design and Setup', 'Precision thermal measurement instrumentation for heat transfer analysis')}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                <img 
                  src="/calorie.png" 
                  alt="Calorimeter Design and Setup"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-ibm-plex-serif">Precision thermal measurement instrumentation for heat transfer analysis</p>
                </div>
              </div>
            </div>

            <div 
              className="group"
              onClick={() => openModal('/Lab view.png', 'Laboratory Setup and Equipment', 'State-of-the-art thermal research laboratory with advanced instrumentation')}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                <img 
                  src="/Lab view.png" 
                  alt="Laboratory Setup and Equipment"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-ibm-plex-serif">State-of-the-art thermal research laboratory with advanced instrumentation</p>
                </div>
              </div>
            </div>

            <div 
              className="group"
              onClick={() => openModal('/Setup Images.jpg', 'Experimental Setup Configuration', 'Complete apparatus configuration for pool boiling heat transfer studies')}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                <img 
                  src="/Setup Images.jpg" 
                  alt="Experimental Setup Configuration"
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-ibm-plex-serif">Complete apparatus configuration for pool boiling heat transfer studies</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Research Overview */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Research Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This advanced thermal engineering research project focuses on investigating pool boiling heat transfer 
                phenomena and critical heat flux (CHF) mechanisms. The study employs sophisticated experimental apparatus 
                to analyze three-phase flow heat exchanger performance under various operating conditions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Key research objectives include characterizing heat transfer coefficients, determining critical heat flux 
                limits, and developing predictive models for enhanced heat exchanger design optimization.
              </p>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Technical Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Instrumentation</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Precision calorimeter design</li>
                    <li>• LabVIEW data acquisition system</li>
                    <li>• High-resolution temperature sensors</li>
                    <li>• Pressure monitoring equipment</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Research Parameters</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Pool boiling heat transfer analysis</li>
                    <li>• Critical heat flux determination</li>
                    <li>• Three-phase flow characterization</li>
                    <li>• Heat exchanger performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Methodology */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Research Methodology</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The experimental methodology employs controlled pool boiling conditions with systematic variation of 
                key parameters including surface temperature, fluid properties, and heat flux density. Real-time data 
                acquisition through LabVIEW enables precise measurement and analysis of thermal phenomena.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Advanced calorimeter design ensures accurate heat transfer measurements while maintaining experimental 
                repeatability and statistical significance of results.
              </p>
            </div>

            {/* Key Accomplishments */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Key Accomplishments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Design & Development</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Three-phase flow heat exchanger experiments</li>
                    <li>• Specialized calorimeter equipment design</li>
                    <li>• Ceramic insulation block engineering</li>
                    <li>• LabView instrumentation setup</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Research & Publications</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Co-authoring two technical papers</li>
                    <li>• Ongoing testing and validation</li>
                    <li>• Experimental accuracy verification</li>
                    <li>• Heat transfer coefficient characterization</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl font-bold mb-8 font-ibm-plex-serif"
            >
              Interested in Learning More?
            </h2>
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 font-ibm-plex-serif"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center px-8 py-4 border border-gray-400 text-gray-200 rounded-lg hover:bg-gray-800 hover:border-gray-300 transition-all duration-300 hover:scale-105 font-ibm-plex-serif"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            Energy Transport Research Laboratory (ETRL) - Summer 2024
          </p>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        imageSrc={modalData.imageSrc}
        imageAlt={modalData.imageAlt}
        caption={modalData.caption}
      />
    </div>
  );
};

export default ETRLPoolBoilingPage; 