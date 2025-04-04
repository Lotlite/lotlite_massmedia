'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/branding1.jpg"
          alt="Branding Services"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
          whileInView={{ y: [50, 0] }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-indigo-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              type: "spring",
              stiffness: 100 
            }}
            whileHover={{ scale: 1.05 }}
          >
            Branding & Design Services
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl mb-12 text-purple-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.6,
              type: "spring",
              bounce: 0.4
            }}
            whileHover={{ x: 10 }}
          >
            We help businesses build strong, memorable brands that connect with their audience and drive growth.
          </motion.p>
          
          <Link href="/contact">
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                rotate: [0, 5, -5, 0]
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                type: "spring",
                stiffness: 200
              }}
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 