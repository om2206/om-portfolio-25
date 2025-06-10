'use client';

import React from 'react';
// import { motion } from 'framer-motion';

const GearSystem = () => {
  return (
    <>
      {/* Large Spiral Gear - Center Left (Odd = Clockwise) */}
      <div className="absolute" style={{ left: '30%', top: '40%', transform: 'translate(-50%, -50%)' }}>
        <div
          className="animate-spin"
          style={{ animationDuration: '20s', animationDirection: 'normal' }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-60">
            <g className="text-gray-300">
              {[...Array(24)].map((_, i) => {
                const angle = (i * 360) / 24;
                const toothWidth = 6;
                const angle1 = angle - toothWidth / 2;
                const angle2 = angle + toothWidth / 2;
                
                const x1 = 100 + 70 * Math.cos((angle1 * Math.PI) / 180);
                const y1 = 100 + 70 * Math.sin((angle1 * Math.PI) / 180);
                const x2 = 100 + 80 * Math.cos((angle1 * Math.PI) / 180);
                const y2 = 100 + 80 * Math.sin((angle1 * Math.PI) / 180);
                const x3 = 100 + 80 * Math.cos((angle2 * Math.PI) / 180);
                const y3 = 100 + 80 * Math.sin((angle2 * Math.PI) / 180);
                const x4 = 100 + 70 * Math.cos((angle2 * Math.PI) / 180);
                const y4 = 100 + 70 * Math.sin((angle2 * Math.PI) / 180);
                
                return (
                  <path key={i} d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`} 
                        fill="none" stroke="currentColor" strokeWidth="1.5" />
                );
              })}
              
              {/* Spiral cuts */}
              {[...Array(8)].map((_, i) => {
                const startAngle = i * 45;
                const path = `M ${100 + 30 * Math.cos((startAngle * Math.PI) / 180)} ${100 + 30 * Math.sin((startAngle * Math.PI) / 180)}
                             Q ${100 + 50 * Math.cos(((startAngle + 180) * Math.PI) / 180)} ${100 + 50 * Math.sin(((startAngle + 180) * Math.PI) / 180)}
                               ${100 + 70 * Math.cos(((startAngle + 360) * Math.PI) / 180)} ${100 + 70 * Math.sin(((startAngle + 360) * Math.PI) / 180)}`;
                return (
                  <path key={i} d={path} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                );
              })}
              
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Intermediate Gear - Between Main Gears (Even = Counter-clockwise) */}
      <div className="absolute" style={{ left: '50%', top: '37%', transform: 'translate(-50%, -50%)' }}>
        <div
          className="animate-spin"
          style={{ animationDuration: '15s', animationDirection: 'reverse' }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" className="opacity-40">
            <g className="text-gray-400">
              {[...Array(14)].map((_, i) => {
                const angle = (i * 360) / 14;
                const toothWidth = 10;
                const angle1 = angle - toothWidth / 2;
                const angle2 = angle + toothWidth / 2;
                
                const x1 = 60 + 35 * Math.cos((angle1 * Math.PI) / 180);
                const y1 = 60 + 35 * Math.sin((angle1 * Math.PI) / 180);
                const x2 = 60 + 42 * Math.cos((angle1 * Math.PI) / 180);
                const y2 = 60 + 42 * Math.sin((angle1 * Math.PI) / 180);
                const x3 = 60 + 42 * Math.cos((angle2 * Math.PI) / 180);
                const y3 = 60 + 42 * Math.sin((angle2 * Math.PI) / 180);
                const x4 = 60 + 35 * Math.cos((angle2 * Math.PI) / 180);
                const y4 = 60 + 35 * Math.sin((angle2 * Math.PI) / 180);
                
                return (
                  <path key={i} d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`} 
                        fill="none" stroke="currentColor" strokeWidth="1" />
                );
              })}
              <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <circle cx="60" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.7" />
            </g>
          </svg>
        </div>
      </div>

      {/* Secondary Gear - Bottom Left (Odd = Clockwise) */}
      <div className="absolute" style={{ left: '20%', top: '65%', transform: 'translate(-50%, -50%)' }}>
        <div
          className="animate-spin"
          style={{ animationDuration: '12s', animationDirection: 'normal' }}
        >
          <svg width="90" height="90" viewBox="0 0 90 90" className="opacity-35">
            <g className="text-gray-500">
              {[...Array(10)].map((_, i) => {
                const angle = (i * 360) / 10;
                const toothWidth = 15;
                const angle1 = angle - toothWidth / 2;
                const angle2 = angle + toothWidth / 2;
                
                const x1 = 45 + 25 * Math.cos((angle1 * Math.PI) / 180);
                const y1 = 45 + 25 * Math.sin((angle1 * Math.PI) / 180);
                const x2 = 45 + 32 * Math.cos((angle1 * Math.PI) / 180);
                const y2 = 45 + 32 * Math.sin((angle1 * Math.PI) / 180);
                const x3 = 45 + 32 * Math.cos((angle2 * Math.PI) / 180);
                const y3 = 45 + 32 * Math.sin((angle2 * Math.PI) / 180);
                const x4 = 45 + 25 * Math.cos((angle2 * Math.PI) / 180);
                const y4 = 45 + 25 * Math.sin((angle2 * Math.PI) / 180);
                
                return (
                  <path key={i} d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`} 
                        fill="none" stroke="currentColor" strokeWidth="0.8" />
                );
              })}
              <circle cx="45" cy="45" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="45" cy="45" r="15" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <circle cx="45" cy="45" r="8" fill="currentColor" opacity="0.6" />
            </g>
          </svg>
        </div>
      </div>

      {/* Meshing Gear - Center Right (Even = Counter-clockwise) */}
      <div className="absolute" style={{ left: '70%', top: '35%', transform: 'translate(-50%, -50%)' }}>
        <div
          className="animate-spin"
          style={{ animationDuration: '25s', animationDirection: 'reverse' }}
        >
          <svg width="160" height="160" viewBox="0 0 160 160" className="opacity-60">
            <g className="text-gray-400">
              {[...Array(18)].map((_, i) => {
                const angle = (i * 360) / 18;
                const toothWidth = 8;
                const angle1 = angle - toothWidth / 2;
                const angle2 = angle + toothWidth / 2;
                
                const x1 = 80 + 50 * Math.cos((angle1 * Math.PI) / 180);
                const y1 = 80 + 50 * Math.sin((angle1 * Math.PI) / 180);
                const x2 = 80 + 60 * Math.cos((angle1 * Math.PI) / 180);
                const y2 = 80 + 60 * Math.sin((angle1 * Math.PI) / 180);
                const x3 = 80 + 60 * Math.cos((angle2 * Math.PI) / 180);
                const y3 = 80 + 60 * Math.sin((angle2 * Math.PI) / 180);
                const x4 = 80 + 50 * Math.cos((angle2 * Math.PI) / 180);
                const y4 = 80 + 50 * Math.sin((angle2 * Math.PI) / 180);
                
                return (
                  <path key={i} d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`} 
                        fill="none" stroke="currentColor" strokeWidth="1.2" />
                );
              })}
              
              {[...Array(6)].map((_, i) => {
                const angle = i * 60;
                const x1 = 80 + 20 * Math.cos((angle * Math.PI) / 180);
                const y1 = 80 + 20 * Math.sin((angle * Math.PI) / 180);
                const x2 = 80 + 45 * Math.cos((angle * Math.PI) / 180);
                const y2 = 80 + 45 * Math.sin((angle * Math.PI) / 180);
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                );
              })}
              
              <circle cx="80" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="80" cy="80" r="35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <circle cx="80" cy="80" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="80" cy="80" r="12" fill="currentColor" opacity="0.8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Small Idler Gear - Upper Right (Odd = Clockwise) */}
      <div className="absolute" style={{ left: '75%', top: '55%', transform: 'translate(-50%, -50%)' }}>
        <div
          className="animate-spin"
          style={{ animationDuration: '8s', animationDirection: 'normal' }}
        >
          <svg width="70" height="70" viewBox="0 0 70 70" className="opacity-30">
            <g className="text-gray-500">
              {[...Array(8)].map((_, i) => {
                const angle = (i * 360) / 8;
                const toothWidth = 18;
                const angle1 = angle - toothWidth / 2;
                const angle2 = angle + toothWidth / 2;
                
                const x1 = 35 + 18 * Math.cos((angle1 * Math.PI) / 180);
                const y1 = 35 + 18 * Math.sin((angle1 * Math.PI) / 180);
                const x2 = 35 + 24 * Math.cos((angle1 * Math.PI) / 180);
                const y2 = 35 + 24 * Math.sin((angle1 * Math.PI) / 180);
                const x3 = 35 + 24 * Math.cos((angle2 * Math.PI) / 180);
                const y3 = 35 + 24 * Math.sin((angle2 * Math.PI) / 180);
                const x4 = 35 + 18 * Math.cos((angle2 * Math.PI) / 180);
                const y4 = 35 + 18 * Math.sin((angle2 * Math.PI) / 180);
                
                return (
                  <path key={i} d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`} 
                        fill="none" stroke="currentColor" strokeWidth="0.8" />
                );
              })}
              <circle cx="35" cy="35" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="35" cy="35" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <circle cx="35" cy="35" r="6" fill="currentColor" opacity="0.5" />
            </g>
          </svg>
        </div>
      </div>

      {/* Small Output Gear - Bottom Right (Even = Counter-clockwise) */}
      <div className="absolute" style={{ left: '80%', top: '70%', transform: 'translate(-50%, -50%)' }}>
        <div
          className="animate-spin"
          style={{ animationDuration: '18s', animationDirection: 'reverse' }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-50">
            <g className="text-gray-500">
              {[...Array(12)].map((_, i) => {
                const angle = (i * 360) / 12;
                const toothWidth = 12;
                const angle1 = angle - toothWidth / 2;
                const angle2 = angle + toothWidth / 2;
                
                const x1 = 50 + 25 * Math.cos((angle1 * Math.PI) / 180);
                const y1 = 50 + 25 * Math.sin((angle1 * Math.PI) / 180);
                const x2 = 50 + 32 * Math.cos((angle1 * Math.PI) / 180);
                const y2 = 50 + 32 * Math.sin((angle1 * Math.PI) / 180);
                const x3 = 50 + 32 * Math.cos((angle2 * Math.PI) / 180);
                const y3 = 50 + 32 * Math.sin((angle2 * Math.PI) / 180);
                const x4 = 50 + 25 * Math.cos((angle2 * Math.PI) / 180);
                const y4 = 50 + 25 * Math.sin((angle2 * Math.PI) / 180);
                
                return (
                  <path key={i} d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`} 
                        fill="none" stroke="currentColor" strokeWidth="1" />
                );
              })}
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.8" />
            </g>
          </svg>
        </div>
      </div>

      {/* Micro Output Gear - Far Right (Odd = Clockwise) */}
      <div className="absolute" style={{ left: '85%', top: '45%', transform: 'translate(-50%, -50%)' }}>
        <div
          className="animate-spin"
          style={{ animationDuration: '6s', animationDirection: 'normal' }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-25">
            <g className="text-gray-600">
              {[...Array(6)].map((_, i) => {
                const angle = (i * 360) / 6;
                const toothWidth = 25;
                const angle1 = angle - toothWidth / 2;
                const angle2 = angle + toothWidth / 2;
                
                const x1 = 30 + 15 * Math.cos((angle1 * Math.PI) / 180);
                const y1 = 30 + 15 * Math.sin((angle1 * Math.PI) / 180);
                const x2 = 30 + 20 * Math.cos((angle1 * Math.PI) / 180);
                const y2 = 30 + 20 * Math.sin((angle1 * Math.PI) / 180);
                const x3 = 30 + 20 * Math.cos((angle2 * Math.PI) / 180);
                const y3 = 30 + 20 * Math.sin((angle2 * Math.PI) / 180);
                const x4 = 30 + 15 * Math.cos((angle2 * Math.PI) / 180);
                const y4 = 30 + 15 * Math.sin((angle2 * Math.PI) / 180);
                
                return (
                  <path key={i} d={`M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`} 
                        fill="none" stroke="currentColor" strokeWidth="0.6" />
                );
              })}
              <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
              <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.4" />
            </g>
          </svg>
        </div>
      </div>

      {/* Cleaned Up Connecting Shafts - No Overlapping Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
        {/* Main Power Transmission Shaft */}
        <line x1="30%" y1="40%" x2="70%" y2="35%" stroke="#999" strokeWidth="4" strokeDasharray="none" />
        
        {/* Secondary Power Line */}
        <line x1="70%" y1="35%" x2="80%" y2="70%" stroke="#888" strokeWidth="3" />
        
        {/* Tertiary Connection */}
        <line x1="75%" y1="55%" x2="85%" y2="45%" stroke="#777" strokeWidth="2" />
        
        {/* Auxiliary System */}
        <line x1="30%" y1="40%" x2="20%" y2="65%" stroke="#777" strokeWidth="2" />
        
        {/* Bearing Centers */}
        <circle cx="30%" cy="40%" r="6" fill="none" stroke="#aaa" strokeWidth="2" />
        <circle cx="70%" cy="35%" r="6" fill="none" stroke="#aaa" strokeWidth="2" />
        <circle cx="75%" cy="55%" r="3" fill="none" stroke="#aaa" strokeWidth="1.5" />
        <circle cx="80%" cy="70%" r="4" fill="none" stroke="#aaa" strokeWidth="2" />
        <circle cx="85%" cy="45%" r="2" fill="none" stroke="#aaa" strokeWidth="1" />
        <circle cx="20%" cy="65%" r="4" fill="none" stroke="#aaa" strokeWidth="1.5" />
      </svg>

      {/* CAD Coordinate System */}
      <div className="absolute bottom-4 left-4 opacity-40">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <line x1="10" y1="50" x2="40" y2="50" stroke="#ccc" strokeWidth="2" />
          <polygon points="40,50 35,47 35,53" fill="#ccc" />
          <text x="42" y="54" fontSize="8" fill="#ccc">X</text>
          
          <line x1="10" y1="50" x2="10" y2="20" stroke="#aaa" strokeWidth="2" />
          <polygon points="10,20 7,25 13,25" fill="#aaa" />
          <text x="6" y="18" fontSize="8" fill="#aaa">Y</text>
          
          <line x1="10" y1="50" x2="30" y2="30" stroke="#888" strokeWidth="2" />
          <polygon points="30,30 25,32 27,28" fill="#888" />
          <text x="32" y="28" fontSize="8" fill="#888">Z</text>
        </svg>
      </div>
    </>
  );
};

export default GearSystem; 