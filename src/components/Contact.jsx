import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact-section" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="card-gradient rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in touch for inquiries or to collaborate!</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <span>📧</span>
                  <span>info@gooutinkochi.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <span>📱</span>
                  <span>+91 9633577268</span>
                </p>
                <p className="flex items-center gap-3">
                  <span>📍</span>
                  <span>Kochi, Kerala, India</span>
                </p>
              </div>
              <motion.button 
                onClick={() => window.open('https://api.whatsapp.com/send?phone=919496468935&text=Hi!%20l%27d%20love%20to%20feature%20my%20shop%2Fservice%20on%20Go%20Out%20in%20Kochi%2C%20How%20can%20we%20collaborate%20to%20make%20it%20happen%3F', '_blank')}
                className="mt-8 bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                alt="Community"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;