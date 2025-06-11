'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
    <main className="min-h-screen bg-black text-white">
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
              Hub-Carrier Module
            </h1>
            <p 
              className="text-xl text-gray-300 mb-8 font-ibm-plex-serif"
            >
              Advanced drivetrain module featuring preload system integration, rotary sealing technology, and structural optimization methodology
            </p>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-16 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                className="group"
              >
                <div 
                  className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                  onClick={() => openModal('/cross-section-of-corner.jpeg', 'Hub-Carrier Cross Section', 'Cross-sectional view showing internal component arrangement')}
                >
                  <img
                    src="/cross-section-of-corner.jpeg"
                    alt="Hub-Carrier Cross Section"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Cross-sectional view showing internal component arrangement</p>
                  </div>
                </div>
              </div>

              <div
                className="group"
              >
                <div 
                  className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                  onClick={() => openModal('/exploded-hub-carrier-assembly.jpeg', 'Exploded Hub-Carrier Assembly', 'Exploded assembly view highlighting component relationships')}
                >
                  <img
                    src="/exploded-hub-carrier-assembly.jpeg"
                    alt="Exploded Hub-Carrier Assembly"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Exploded assembly view highlighting component relationships</p>
                  </div>
                </div>
              </div>

              <div
                className="group"
              >
                <div 
                  className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                  onClick={() => openModal('/seal.png', 'Advanced Rotary Seal Design', 'Advanced rotary seal technology for contamination prevention')}
                >
                  <img
                    src="/seal.png"
                    alt="Advanced Rotary Seal Design"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Advanced rotary seal technology for contamination prevention</p>
                  </div>
                </div>
              </div>

              <div
                className="group"
              >
                <div 
                  className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
                  onClick={() => openModal('/Gearbox view.jpeg', 'Gearbox Assembly View', 'Detailed view of the internal gearbox assembly and gear mesh')}
                >
                  <img
                    src="/Gearbox view.jpeg"
                    alt="Gearbox Assembly View"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Detailed view of the internal gearbox assembly and gear mesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center font-ibm-plex-serif"
            >
              Engineering Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Preload System Integration</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Engineered a sophisticated preload mechanism to maintain optimal bearing tension and eliminate backlash in the drivetrain. 
                  The system ensures consistent performance under varying load conditions while extending component lifespan.
                </p>
              </div>

              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Advanced Sealing Technology</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Implemented advanced rotary sealing solutions to prevent contamination while maintaining smooth operation. 
                  The seal design balances durability with minimal friction losses for maximum efficiency.
                </p>
              </div>

              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Structural Optimization</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Applied advanced topology optimization techniques to achieve maximum strength-to-weight ratio. 
                  Material distribution was optimized using finite element analysis to reduce mass while maintaining structural integrity.
                </p>
              </div>

              <div
                className="bg-neutral-900 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-400 font-ibm-plex-serif">Manufacturing Considerations</h3>
                <p className="text-gray-300 leading-relaxed font-ibm-plex-serif">
                  Design optimized for modern manufacturing processes including CNC machining and additive manufacturing. 
                  Assembly sequences were carefully planned to ensure efficient production and maintenance accessibility.
                </p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div
              className="bg-gradient-to-r from-gray-900 to-neutral-900 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 font-ibm-plex-serif">Technical Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">1.33:1</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Gear Ratio</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">175mm</div>
                  <div className="text-gray-400 text-sm font-ibm-plex-serif">Center Distance</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">2.5</div>
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
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8 font-ibm-plex-serif"
            >
              Design Philosophy
            </h2>
            <p 
              className="text-xl text-gray-300 leading-relaxed font-ibm-plex-serif"
            >
              This project represents a synthesis of mechanical engineering principles, advanced materials science, and manufacturing innovation. 
              By integrating precision engineering with modern design methodologies, the hub-carrier module achieves exceptional performance 
              while maintaining cost-effectiveness and manufacturability.
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
    </main>
  );
} 