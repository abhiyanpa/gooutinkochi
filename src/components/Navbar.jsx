import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed w-full py-4 px-6 md:px-12 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B1120]/80 backdrop-blur-md' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-[#FFD700]">Go Out In Kochi</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-white hover:text-[#FFD700] transition-colors">Home</a>
          <a href="#" className="text-white hover:text-[#FFD700] transition-colors">About Us</a>
          <motion.button 
            onClick={scrollToContact}
            className="bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;