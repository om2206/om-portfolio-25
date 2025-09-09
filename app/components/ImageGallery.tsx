'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  onImageClick: (src: string, alt: string, caption: string) => void;
  columns?: 2 | 3 | 4;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images, 
  onImageClick, 
  columns = 4 
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div 
            className="relative overflow-hidden rounded-xl shadow-2xl cursor-pointer"
            onClick={() => onImageClick(image.src, image.alt, image.caption)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-ibm-plex-serif">{image.caption}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery; 