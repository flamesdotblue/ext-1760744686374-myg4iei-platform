import React from 'react';
import GlassToolbar from './components/GlassToolbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="relative">
        <Hero />
        <GlassToolbar />
      </div>
      <Features />
      <Footer />
    </div>
  );
}
