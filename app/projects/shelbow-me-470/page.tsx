'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';

const SHELBOWCapstonePage = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    caption: string;
    isVideo: boolean;
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    caption: '',
    isVideo: false
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const itemsPerPage = 3;

  const openModal = (imageSrc: string, imageAlt: string, caption: string, isVideo: boolean = false) => {
    setModalData({
      isOpen: true,
      imageSrc,
      imageAlt,
      caption,
      isVideo
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
      src: '/prototype.jpg',
      alt: 'SHELBOW Prototype',
      caption: 'Final prototype of the SHELBOW capstone design project',
      modalCaption: 'Final prototype of the SHELBOW capstone design project'
    },
    {
      type: 'image',
      src: '/Prototype Sketch.jpg',
      alt: 'SHELBOW Design Sketch',
      caption: 'Initial design sketch and concept development for SHELBOW',
      modalCaption: 'Initial design sketch and concept development for SHELBOW'
    },
    {
      type: 'video',
      src: '/Prototype video.mp4',
      alt: 'SHELBOW Prototype Demonstration',
      caption: 'Video demonstration of the SHELBOW prototype in action',
      modalCaption: 'Video demonstration of the SHELBOW prototype in action'
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
              SHELBOW - ME 470 Capstone Design
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif">
              Innovative spring pulley system arm sling for stroke rehabilitation. 
              Developed in partnership with Carle College of Medicine Illinois to provide 
              controlled range of motion therapy with adjustable resistance.
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
                        onClick={() => openModal(item.src, item.alt, item.modalCaption || item.caption, item.type === 'video')}
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
                      <div 
                        className="relative overflow-hidden rounded-xl shadow-2xl bg-gray-900 cursor-pointer"
                        onClick={() => openModal(item.src, item.alt, item.modalCaption || item.caption, item.type === 'video')}
                      >
                        <video 
                          src={item.src} 
                          className="w-full h-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
                          controls
                          muted
                          loop
                          playsInline
                          onPlay={handleVideoPlay}
                          onPause={handleVideoPause}
                          onLoadStart={() => console.log('Video loading started')}
                          onCanPlay={() => console.log('Video can play')}
                          onError={(e) => console.log('Video error:', e)}
                          preload="metadata"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <source src={item.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm font-ibm-plex-serif">{item.caption}</p>
                        </div>
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black/50 rounded-full p-2">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
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
            {/* Project Overview */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                SHELBOW is an innovative spring pulley system arm sling designed for stroke rehabilitation. 
                This capstone project was developed in partnership with Carle College of Medicine Illinois 
                to address the critical need for effective upper limb rehabilitation devices.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The system leverages the benefits of both pulley mechanics and spring resistance to provide 
                controlled range of motion therapy. When patients extend their arm, they experience controlled 
                resistance against spring elongation, and feel a restoring force as the spring contracts 
                when bringing their arm back up.
              </p>
            </div>

            {/* Design Specifications */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Design Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">System Components</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Dual pulley system (bicep and elbow positioning)</li>
                    <li>• Neoprene shoulder sleeve for patient-specific molding</li>
                    <li>• Soft shell bicep constraint for motion control</li>
                    <li>• Hard shell elbow/forearm with Velcro adjustability</li>
                    <li>• Bowden cable routing through pulleys</li>
                    <li>• Pretensioned spring with specified stiffness</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Safety & Control</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Spring enclosures for patient safety</li>
                    <li>• Rounded edge pulleys to prevent injury</li>
                    <li>• Guided cable paths to prevent snapback</li>
                    <li>• BOA-type lacing adjustor for tension control</li>
                    <li>• Constant tension through pretension load</li>
                    <li>• Adjustable resistance across multiple points</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Development Process */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Development Process</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The project began with collaboration with Carle College of Medicine Illinois to understand 
                the specific needs of stroke rehabilitation patients. The ideation process focused on creating a large number of designs and validating prototypes to ensure functionality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The prototype successfully demonstrated the spring pulley system concept, allowing the sponsor 
                team to visualize and verify the mechanism from initial sketches to a real-world product. 
                This approach prioritized high functionality, ergonomics, and materials while making strategic 
                sacrifices on size, weight, and cost for maximum therapeutic impact.
              </p>
            </div>

            {/* Key Accomplishments */}
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 font-ibm-plex-serif">Key Accomplishments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Innovation & Design</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Novel spring pulley system for stroke rehabilitation and recovery</li>
                    <li>• Patient-specific neoprene molding system to accomadate all body types</li>
                    <li>• Dual-pulley positioning for optimal therapy</li>
                    <li>• BOA-type tension adjustment mechanism</li>
                    <li>• Comprehensive safety design features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Partnership & Impact</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Successful collaboration with Carle College of Medicine</li>
                    <li>• Validated functionality through prototype testing</li>
                    <li>• Patent in process for design and mechanism</li>
                    <li>• Building prototypes for clinical trials</li>
                    <li>• Designing final product with intent to mass produce while ensuring low cost</li>
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
            ME 470 Capstone Design - University of Illinois Urbana-Champaign<br />
            In partnership with Carle College of Medicine Illinois
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
        isVideo={modalData.isVideo}
      />
    </div>
  );
};

export default SHELBOWCapstonePage;
