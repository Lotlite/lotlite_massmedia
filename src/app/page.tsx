'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ServicesSection from '@/components/ServicesSection';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.3 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay: 0.6 }
};

// Parallax Effect for Video
export default function Home() {
  const [videoPosition, setVideoPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX / window.innerWidth - 0.5) * 30; // Adjust sensitivity
    const moveY = (clientY / window.innerHeight - 0.5) * 30;
    setVideoPosition({ x: moveX, y: moveY });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background Video (Only for Hero Section) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              objectPosition: "center center",
              transform: `translate(${videoPosition.x}px, ${videoPosition.y}px)`,
            }}
          >
            <source src="/images/landing page video.mp4" type="video/mp4" />
          </motion.video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        {/* <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            {...fadeInUp}
          >
            Transform Your Digital Presence
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Comprehensive digital solutions to help your business grow and succeed in the modern age.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-block bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Get Started
          </motion.a>
        </div> */}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              {...fadeInLeft}
            >
              <div className="text-4xl font-bold text-white mb-2">2000+</div>
              <div className="text-white/80">Projects Completed</div>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="text-4xl font-bold text-white mb-2">300+</div>
              <div className="text-white/80">Happy Clients</div>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Team Members</div>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              {...fadeInRight}
            >
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
    </main>
  );
}
