'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const EnquiryButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-24 right-8 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-25" />
        
        {/* Button */}
        <div className="relative bg-blue-500 text-white p-4 rounded-full shadow-lg 
          hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center">
          {/* Enquiry SVG icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </motion.button>
  );
};

export default EnquiryButton; 