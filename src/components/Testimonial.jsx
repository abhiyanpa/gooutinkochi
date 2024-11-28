import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="card-gradient rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">What Our Community Says</h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  "Go Out in Kochi has transformed how we discover and experience events in the city. 
                  Their curated selections and community insights have made exploring Kochi so much more exciting!"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Rahul Menon</p>
                    <p className="text-sm text-gray-400">Community Member</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205"
                  alt="Community Event"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;