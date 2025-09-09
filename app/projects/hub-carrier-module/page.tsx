'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectNavigation from '../../components/ProjectNavigation';
import ImageModal from '../../components/ImageModal';
import { useImageModal } from '../../hooks/useImageModal';
import ImageGallery from '../../components/ImageGallery';

export default function HubCarrierModulePage() {
  const { modalData, openModal, closeModal } = useImageModal();

  const projectImages = [
    {
      src: '/cross-section-of-corner.jpeg',
      alt: 'Hub-Carrier Cross Section',
      caption: 'Cross-sectional view showing internal component arrangement'
    },
    {
      src: '/exploded-hub-carrier-assembly.jpeg',
      alt: 'Exploded Hub-Carrier Assembly',
      caption: 'Exploded assembly view highlighting preload plate on the right side'
    },
    {
      src: '/seal.png',
      alt: 'Advanced Rotary Seal Design',
      caption: 'SKF Rotary seal with dust lip to optimize heat loss and prevent contamination'
    },
    {
      src: '/Gearbox view.jpeg',
      alt: 'Gearbox Assembly View',
      caption: 'Detailed view of the assembled internal gearbox assembly and upright'
    }
  ];

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
          <div className="max-w-6xl mx-auto">
            <ImageGallery 
              images={projectImages}
              onImageClick={openModal}
              columns={4}
            />
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