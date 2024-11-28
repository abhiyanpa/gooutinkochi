import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromLeft, slideInFromRight, buttonHover } from '../utils/animations';

const Hero = () => {
  const handleContactClick = () => {
    window.open('https://api.whatsapp.com/send?phone=919496468935&text=Hi!%20l%27d%20love%20to%20feature%20my%20shop%2Fservice%20on%20Go%20Out%20in%20Kochi%2C%20How%20can%20we%20collaborate%20to%20make%20it%20happen%3F', '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className="md:w-1/2 text-white"
          variants={slideInFromLeft}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            Boost Your Business with{' '}
            <div className="text-[#FFD700]">Go Out In<br />Kochi</div>
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg mb-8"
            variants={fadeInUp}
          >
            Discover the beauty of Kochi through our curated events and places,
            showcased on Instagram. Join us exploring!
          </motion.p>
          <motion.div 
            className="flex gap-4"
            variants={fadeInUp}
          >
            <motion.button 
              onClick={handleContactClick}
              className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
            <motion.button 
              onClick={scrollToContact}
              className="border-2 border-[#FFD700] text-[#FFD700] px-8 py-3 rounded-full hover:bg-[#FFD700] hover:text-[#0B1120] transition-colors font-medium"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </motion.div>
          <motion.div 
            className="mt-12 flex gap-12"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-3xl font-bold">1.6M+</h3>
              <p className="text-gray-400">Views</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-3xl font-bold">311k+</h3>
              <p className="text-gray-400">Interactions</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <h3 className="text-3xl font-bold">4.8</h3>
              <p className="text-gray-400">ratings</p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 pl-8"
          variants={slideInFromRight}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-[#FFD700] p-0 rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/logo.png"
              alt="Go Out In Kochi Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;