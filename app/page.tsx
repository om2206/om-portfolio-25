'use client';

import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
    </main>
  );
}
