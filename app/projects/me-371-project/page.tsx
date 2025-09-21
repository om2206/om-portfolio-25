'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';

const ME371ProjectPage = () => {
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
      src: '/Robot.png',
      alt: 'ME 371 Robot Design',
      caption: 'Complete robot assembly with two-speed gearbox system',
      modalCaption: 'Complete robot assembly with three-speed gearbox system'
    },
    {
      src: '/Gear assembly.png',
      alt: 'Three-Speed Gearbox Assembly',
      caption: 'Gzumwalt\'s shifting mechanism featuring a two-stage compound geartrain adapted to fit project deliverables',
      modalCaption: 'Advanced three-speed transmission system for optimal performance'
    },
    {
      src: '/Ball lock cross section.png',
      alt: 'Ball Lock Mechanism Cross Section',
      caption: 'Cross-sectional view of ball-lock shifting mechanism',
      modalCaption: 'Precision ball lock mechanism for secure gear engagement'
    },
    {
      src: '/Robot Top view.png',
      alt: 'Robot Top View Layout',
      caption: 'Top-down view of robot chassis and drivetrain position',
      modalCaption: 'Top-down view showing strategic component placement and design'
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
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 font-ibm-plex-serif"
            >
              ME 371 Project
            </h1>
            <p 
              className="text-xl text-gray-300 mb-8 font-ibm-plex-serif"
            >
              Built and tested robot with functioning three-speed gearbox to perform a range of tasks including Speed, Agility, and Strength tests.
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

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center font-ibm-plex-serif"
            >
              Project Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Robot Design & Build</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Led team in design for geartrain, gear ratio determination, and system integration. Initally considered dog-clutch shifting mechanism, however chose ball-lock shifting mechanism due to its superior shift speeds. 
                  Final geartrain design was selected due to its creative approach, simplicity in design, and low potential for failures. The robot was designed to be optimal for additive manufacturing since we were 3D printing a large majority of the parts. 
                </p>
              </div>

              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Geartrain</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  This gearbox is a two-speed gearbox that allows for a direction flip so that the robot move in both directions. 
                  It features a high torque gear-ratio that helps the robot perform the strength task and a high speed gear-ratio for the speed and agility tasks. 
                  Our initial design featured a ball-lock transmission with three-speeds however due to manufacturing inaccuracies in FDM tolerances, 
                  we chose this shifting mechanism for its simplicity, yet creative shifting approach.
                </p>
              </div>

              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Protoyping and Perfomance</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Iterative prototyping of geartrain, chassis designs and gear ratios was crucial to hit desired performance criteria. 3D printing parts allowed for rapid prototyping of parts and designs. 
                  Robot performed well in all task categories but struggled with excelling in a single task.
                </p>
              </div>

              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">System Integration</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Integrated mechanical, electrical, and control systems to create a cohesive robot that was also aesthetically pleasing. 
                  It was important to ensure that the system was modular so that we could perform repairs or maintenance in case we had failures during the project tests.
                </p>
              </div>
            </div>

            {/* Task Categories */}
            <div
              className="bg-gradient-to-r from-gray-900 to-neutral-900 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 font-ibm-plex-serif">Task Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Speed</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Robot moves up a ramp, through a flat surface, and back down a ramp. Team with fastest time wins.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Agility</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Robot moves back and forth across two lines within a time limit.Team with largest number of traverals wins.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Strength</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Robot must be able to move up an angled ramp with increasing payloads. Team with highest payload carried up the ramp wins.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 font-ibm-plex-serif"
            >
              Key Takeaways
            </h2>
            <p 
              className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif"
            >
              This project challenged me to design and iterate through multiple mechanisms to ensure that performance criteria were met and executed to a competitive level. 
              This project involved part failures, scrapped designs, and prototypes that did not pan out and I believe that this helped me develop a more holistic design mindset and robust principles for future projects.
            </p>
          </div>
        </div>
      </section>

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

export default ME371ProjectPage; 