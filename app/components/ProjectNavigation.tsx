'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectNavigationProps {
  title?: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ title }) => {
  return (
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
  );
};

export default ProjectNavigation; 