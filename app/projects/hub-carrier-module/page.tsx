'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectNavigation from '../../components/ProjectNavigation';
import ImageModal from '../../components/ImageModal';

export default function HubCarrierModulePage() {
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

  const projectImages = [
    {
      src: '/cross-section-of-corner.jpeg',
      alt: 'Hub-Carrier Cross Section',
      caption: 'Cross-sectional view showing internal component arrangement',
      modalCaption: 'Detailed cross-sectional view of the hub-carrier module showing internal component arrangement and structural design'
    },
    {
      src: '/exploded-hub-carrier-assembly.jpeg',
      alt: 'Exploded Hub-Carrier Assembly',
      caption: 'Exploded assembly view highlighting preload plate on the right side',
      modalCaption: 'Exploded assembly view highlighting preload plate on the right side and component relationships'
    },
    {
      src: '/seal.png',
      alt: 'Advanced Rotary Seal Design',
      caption: 'SKF Rotary seal with dust lip to optimize heat loss and prevent contamination',
      modalCaption: 'SKF Rotary seal with dust lip to optimize heat loss and prevent contamination'
    },
    {
      src: '/Gearbox view.jpeg',
      alt: 'Gearbox Assembly View',
      caption: 'Detailed view of the assembled internal gearbox assembly and upright',
      modalCaption: 'Detailed view of the assembled internal gearbox assembly and upright showing complete integration'
    }
  ];

  const nextPage = () => {
    const maxPage = Math.ceil(projectImages.length / itemsPerPage) - 1;
    setCurrentPage((prev) => (prev + 1) % (maxPage + 1));
  };

  const prevPage = () => {
    const maxPage = Math.ceil(projectImages.length / itemsPerPage) - 1;
    setCurrentPage((prev) => (prev - 1 + (maxPage + 1)) % (maxPage + 1));
  };

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projectImages.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(projectImages.length / itemsPerPage);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <ProjectNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-ibm-plex-serif">
              Hub-Carrier Module
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-ibm-plex-serif">
              Drivetrain module for in-hub 4-wheel drive FSAE vehicle
            </p>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-ibm-plex-serif">
              Engineering Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-neutral-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Preload System Integration</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Implemented a preload plate to maintain optimal bearing tension and enhance drivetrain efficiency while elongating bearing lifespan. 
                </p>
              </div>

              <div className="bg-neutral-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">SKF 36154 FKM Seal</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Implemented FKM seal from SKF replacing ACM since it offers greater chemical resistance and lower friction losses. 
                  This seal also has a dust lip that prevents contamination and improves overall durability.  
                </p>
              </div>

              <div className="bg-neutral-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Topology and Structural Optimization</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  To optimize the hub-carrier module, material distribution and structure were tested under simulated loading conditions. 
                  Material distribution was then optimized using FEA to reduce mass while maintaining structural integrity.
                </p>
              </div>

              <div className="bg-neutral-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Manufacturing Considerations</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Design was optimized to ensure manufacturing feasibility as well as cost effectiveness. The Hub-carrier module is machined from 7075-T6 Al. Geometry was also optimized through topology optimization to ensure that structures can sustain bump load cases while also reducing material usage.  
                </p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gradient-to-r from-gray-900 to-neutral-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 font-ibm-plex-serif">Technical Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">1:10.8</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Gear Ratio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">33.3 mm</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Center Distance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">1.2</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Module</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">20°</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Pressure Angle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-ibm-plex-serif">
              Key Takeaways
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif">
            This project challenged me to design and integrate multiple dynamic sub-systems into a cohesive drivetrain solution. The experience taught me to approach engineering design holistically, considering not just individual component performance, but also system integration, force interactions, manufacturing optimization, and structural reliability under demanding operational conditions. 
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 font-ibm-plex-serif">
              Interested in Learning More?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Image Modal */}
      <ImageModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        imageSrc={modalData.imageSrc}
        imageAlt={modalData.imageAlt}
        caption={modalData.caption}
      />
    </main>
  );
} 