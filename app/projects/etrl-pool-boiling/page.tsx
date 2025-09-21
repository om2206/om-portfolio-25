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

  const [currentPage, setCurrentPage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const itemsPerPage = 3;

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

  const galleryItems: Array<{
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption: string;
    modalCaption?: string;
  }> = [
    {
      type: 'image',
      src: '/calorie.png',
      alt: 'Calorimeter Design and Setup',
      caption: 'Caloriemeter with ceramic insulation plates with slot for thermocouple insertion',
      modalCaption: 'Precision thermal measurement instrumentation for heat transfer analysis'
    },
    {
      type: 'image',
      src: '/Lab view.png',
      alt: 'Laboratory Setup and Equipment',
      caption: 'LabView program overview for data acquisition and analysis',
      modalCaption: 'State-of-the-art thermal research laboratory with advanced instrumentation'
    },
    {
      type: 'image',
      src: '/Setup Images.jpg',
      alt: 'Experimental Setup Configuration',
      caption: 'Image of old experimental setup with zoomed in view of heat exchanger surface',
      modalCaption: 'Complete apparatus configuration for pool boiling heat transfer studies'
    },
    {
      type: 'image',
      src: '/Pool boiling.jpg',
      alt: 'Pool Boiling Phenomena',
      caption: 'Pool boiling heat transfer visualization showing nucleate boiling patterns',
      modalCaption: 'High-speed visualization of nucleate boiling and heat transfer mechanisms'
    },
    {
      type: 'video',
      src: '/Surface Video.mp4',
      alt: 'Surface Phenomena Visualization',
      caption: 'Surface phenomena visualization during pool boiling heat transfer',
      modalCaption: 'Surface phenomena visualization during pool boiling heat transfer'
    }
  ];

  const nextPage = () => {
    const maxPage = Math.ceil(galleryItems.length / itemsPerPage) - 1;
    setCurrentPage((prev) => (prev + 1) % (maxPage + 1));
  };

  const prevPage = () => {
    const maxPage = Math.ceil(galleryItems.length / itemsPerPage) - 1;
    setCurrentPage((prev) => (prev - 1 + (maxPage + 1)) % (maxPage + 1));
  };

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return galleryItems.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
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
              ETRL Undergraduate Research 
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif">
              Undergraduate research project investigating heat transfer characteristics of a three-phase flow heat exchanger. Co-authored two papers - one currently under review and one in preparation.
            </p>
          </motion.div>

          {/* Project Gallery */}
          <motion.div 
            className="relative max-w-7xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Gallery Container */}
            <div className="relative">
              <motion.div 
                className={`grid gap-8 ${
                  getCurrentPageItems().length === 1 
                    ? 'grid-cols-1 justify-center' 
                    : getCurrentPageItems().length === 2 
                    ? 'grid-cols-1 md:grid-cols-2 justify-center' 
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {getCurrentPageItems().map((item, index) => (
                  <motion.div 
                    key={`${currentPage}-${index}`}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {item.type === 'image' ? (
                      <div 
                        className="cursor-pointer"
                        onClick={() => openModal(item.src, item.alt, item.modalCaption || item.caption)}
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-900">
                          <img 
                            src={item.src} 
                            alt={item.alt}
                            className="w-full h-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-sm font-ibm-plex-serif">{item.caption}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-900">
                        <video 
                          src={item.src} 
                          className="w-full h-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
                          controls
                          muted
                          loop
                          playsInline
                          onPlay={handleVideoPlay}
                          onPause={handleVideoPause}
                          preload="metadata"
                        >
                          <source src={item.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-ibm-plex-serif">{item.caption}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevPage}
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 0}
                aria-label="Previous page"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage 
                        ? 'bg-white scale-125' 
                        : 'bg-gray-500 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPage}
                className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages - 1}
                aria-label="Next page"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Page Indicator */}
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm font-ibm-plex-serif">
                Page {currentPage + 1} of {totalPages}
              </p>
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
                This research project focuses on investigating pool boiling heat transfer 
                phenomena and critical heat flux (CHF) mechanisms. 
                The study employs three different heat exhanger setups for saturated pool boiling, three-phase change pool boiling and a new setup for characterizing exchanget surface phenomena byheating through an IR medium.
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
                    <li>• State-of-the-art calorimeter design with highest heat flux capabilities in the lab</li>
                    <li>• Data acquisition through LabView program using NI DAQ</li>
                    <li>• Ultra High FPS cameras to observe and study nucleate boiling phenomena on surface</li>
                    <li>• Using IR through sapphire coated heaters to observe and investigate a translucent surface</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Research Parameters</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Validation of results from existing literature and past experiments</li>
                    <li>• CHF limit determination</li>
                    <li>• Three-phase flow characterization</li>
                    <li>• Optimization of heat exchanging mechanism by employing surface finishes, treatment with chemicals, etc.</li>
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
                    <li>• Built workspace for three experimental setups from scratch</li>
                    <li>• Developed ceramic insulator for calorimeter block</li>
                    <li>• Working on experimental optimization and improving the setup</li>
                    <li>• Adding high resolution and high-speed video cameras to document and study surface phenomena
                       </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Research & Publications</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Co-author on two papers - one under peer-review at Wiley and the other in preparation</li>
                    <li>• Currently testing and validating new pool boiling setups with existing literature and old data</li>
                    <li>• Conducting extensive reproducibility tests on current setups to characterize mechanism behaviors</li>
                    <li>• Incorporating peer review suggestions and feedback in current papers</li>
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