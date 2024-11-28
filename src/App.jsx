import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] overflow-hidden">
      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;