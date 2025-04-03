'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import ServicesSection from '@/components/ServicesSection';
import DigitalMarketingSection from '@/components/DigitalMarketingSection';

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

// Custom hook for counting animation with intersection observer
const useCountAnimation = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return { count, elementRef };
};

// Parallax Effect for Video
export default function Home() {
  const { count: projectsCount, elementRef: projectsRef } = useCountAnimation(2000);
  const { count: clientsCount, elementRef: clientsRef } = useCountAnimation(300);
  const { count: teamCount, elementRef: teamRef } = useCountAnimation(50);
  const { count: satisfactionCount, elementRef: satisfactionRef } = useCountAnimation(98);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden"
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
              objectPosition: "center center"
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

      {/* Digital Marketing Section */}
      <DigitalMarketingSection />

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              ref={projectsRef}
              className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200"
              {...fadeInLeft}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{projectsCount}+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div 
              ref={clientsRef}
              className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{clientsCount}+</div>
              <div className="text-gray-600">Happy Clients</div>
            </motion.div>
            <motion.div 
              ref={teamRef}
              className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{teamCount}+</div>
              <div className="text-gray-600">Team Members</div>
            </motion.div>
            <motion.div 
              ref={satisfactionRef}
              className="text-center bg-gray-50 rounded-xl p-6 border border-gray-200"
              {...fadeInRight}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">{satisfactionCount}%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />
    </main>
  );
}
