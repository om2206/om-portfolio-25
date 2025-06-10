'use client';

import React from 'react';

const WorldMapBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for subtle depth */}
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#333', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.1 }} />
          </linearGradient>
          
          {/* Pattern for dotted flight path */}
          <pattern id="dottedLine" patternUnits="userSpaceOnUse" width="10" height="2">
            <circle cx="2" cy="1" r="1" fill="#666" opacity="0.6" />
          </pattern>
        </defs>

        {/* Simplified World Map Outlines */}
        <g fill="url(#mapGradient)" stroke="#333" strokeWidth="0.5" opacity="0.4">
          {/* North America */}
          <path d="M 100 120 Q 80 100 120 80 Q 180 70 220 90 Q 280 85 320 110 Q 350 140 340 180 Q 320 200 280 190 Q 240 200 200 180 Q 150 160 100 120 Z" />
          
          {/* South America */}
          <path d="M 200 220 Q 180 200 190 180 Q 210 170 230 180 Q 250 200 245 240 Q 240 280 220 320 Q 200 350 180 340 Q 170 320 175 280 Q 180 240 200 220 Z" />
          
          {/* Europe */}
          <path d="M 420 100 Q 400 80 430 70 Q 470 75 500 85 Q 520 100 510 120 Q 490 130 460 125 Q 440 120 420 100 Z" />
          
          {/* Africa */}
          <path d="M 450 140 Q 430 120 440 110 Q 480 105 520 120 Q 540 140 535 180 Q 530 220 520 260 Q 510 300 490 320 Q 470 310 475 280 Q 480 240 485 200 Q 485 170 450 140 Z" />
          
          {/* Asia */}
          <path d="M 550 80 Q 530 60 560 50 Q 620 45 680 60 Q 740 70 780 90 Q 800 110 790 140 Q 770 160 730 155 Q 680 150 630 145 Q 580 140 550 80 Z" />
          
          {/* India subcontinent */}
          <path d="M 650 140 Q 630 130 640 120 Q 670 115 690 125 Q 710 140 705 160 Q 700 180 685 175 Q 670 170 650 140 Z" />
          
          {/* Australia */}
          <path d="M 750 280 Q 730 270 740 260 Q 780 255 820 265 Q 840 275 835 295 Q 830 315 810 310 Q 780 305 750 280 Z" />
        </g>

        {/* Flight Path from Pune (approx 650,150) to Champaign (approx 280,140) */}
        <path
          d="M 650 150 Q 400 80 280 140"
          fill="none"
          stroke="url(#dottedLine)"
          strokeWidth="3"
          strokeDasharray="8,12"
          opacity="0.7"
          className="animate-pulse"
        />

        {/* Animated Airplane */}
        <g className="animate-[fly_20s_ease-in-out_infinite]">
          <g transform="translate(650,150)">
            <path
              d="M 0 0 L -8 -2 L -6 0 L -8 2 Z M -3 0 L -10 -4 M -3 0 L -10 4"
              fill="#666"
              stroke="#666"
              strokeWidth="1"
              opacity="0.8"
            />
          </g>
        </g>

        {/* Location markers */}
        <circle cx="650" cy="150" r="3" fill="#666" opacity="0.6">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="140" r="3" fill="#666" opacity="0.6">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>

        {/* Grid overlay for subtle texture */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#333" strokeWidth="0.3" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default WorldMapBackground; 