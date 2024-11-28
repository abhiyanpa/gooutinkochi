import React from 'react';
import { motion } from 'framer-motion';
import { RocketLaunchIcon, HeartIcon, PhotoIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { containerAnimation, itemAnimation, buttonHover } from '../utils/animations';

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    variants={itemAnimation}
    whileHover={{ scale: 1.05 }}
    className="card-gradient p-6 rounded-xl"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-8 h-8 text-blue-400 mb-4" />
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: RocketLaunchIcon,
      title: "Exciting Events",
      description: "Discover and book the most exciting events happening in Kochi."
    },
    {
      icon: PhotoIcon,
      title: "Photo Galleries",
      description: "Explore stunning galleries showcasing the beauty of Kochi."
    },
    {
      icon: HeartIcon,
      title: "Community",
      description: "Join our vibrant community of explorers and event enthusiasts."
    },
    {
      icon: LockClosedIcon,
      title: "Exclusive Access",
      description: "Get VIP access to premium events and special experiences."
    }
  ];

  return (
    <div className="py-20 px-6">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemAnimation}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Best of Kochi
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover amazing events, stunning locations, and unforgettable experiences
            curated just for you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Features;