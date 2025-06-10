'use client';

import React from 'react';
// import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  projectSlug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  summary,
  images,
  tags,
  projectSlug,
}) => {
  return (
    <div
      className="group"
    >
      <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-colors" />
          {images.length > 0 && (
            <img
              src={images[0]}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
          )}
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-ibm-plex-serif">
            PROJECT
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors font-ibm-plex-serif">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 font-ibm-plex-serif">
            {summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-ibm-plex-serif uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={`/projects/${projectSlug}`}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-ibm-plex-serif"
          >
            View Details
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 