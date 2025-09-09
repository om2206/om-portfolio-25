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
              Built and tested robot with functioning two-speed gearbox to perform a range of tasks including Speed, Agility, and Strength tests.
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
                onClick={() => openModal('/Robot.png', 'ME 371 Robot Design', 'Complete robot assembly with three-speed gearbox system')}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                  <img
                    src="/Robot.png"
                    alt="ME 371 Robot Design"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Complete robot assembly with two-speed gearbox system</p>
                  </div>
                </div>
              </div>

              <div 
                className="group"
                onClick={() => openModal('/Gear assembly.png', 'Three-Speed Gearbox Assembly', 'Advanced three-speed transmission system for optimal performance')}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                  <img
                    src="/Gear assembly.png"
                    alt="Three-Speed Gearbox Assembly"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Gzumwalt's shifting mechanism featuring a two-stage compound geartrain adapted to fit project deliverables </p>
                  </div>
                </div>
              </div>

              <div 
                className="group"
                onClick={() => openModal('/Ball lock cross section.png', 'Ball Lock Mechanism Cross Section', 'Precision ball lock mechanism for secure gear engagement')}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                  <img
                    src="/Ball lock cross section.png"
                    alt="Ball Lock Mechanism Cross Section"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Cross-sectional view of ball-lock shifting mechanism</p>
                  </div>
                </div>
              </div>

              <div 
                className="group"
                onClick={() => openModal('/Robot Top view.png', 'Robot Top View Layout', 'Top-down view showing strategic component placement and design')}
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer">
                  <img
                    src="/Robot Top view.png"
                    alt="Robot Top View Layout"
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-ibm-plex-serif">Top-down view of robot chassis and drivetrain position</p>
                  </div>
                </div>
              </div>
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