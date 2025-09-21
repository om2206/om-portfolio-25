'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  summary: string;
  images: string[];
  projectSlug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  images,
  projectSlug,
}) => {
  return (
    <Link href={`/projects/${projectSlug}`}>
      <motion.div
        className="group h-full"
        whileHover={{ 
          scale: 1.02,
          rotateX: 5,
          rotateY: 5,
          z: 50
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          duration: 0.3
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000
        }}
      >
        <motion.div 
          className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300 h-full flex flex-col cursor-pointer"
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative aspect-video overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-colors" />
            {images.length > 0 && (
              <motion.img
                src={images[0]}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <motion.h3 
              className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-ibm-plex-serif"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-400 flex-1 font-ibm-plex-serif">
              {summary}
            </p>
            <motion.div
              className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors font-ibm-plex-serif mt-4"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
              <motion.svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard; 