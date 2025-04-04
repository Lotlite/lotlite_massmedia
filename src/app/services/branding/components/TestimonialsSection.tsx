'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/images/testimonials/client1.jpg",
    content: "The branding service exceeded our expectations. They captured our vision perfectly and delivered a cohesive brand identity that resonates with our audience. Their attention to detail and creative approach helped us stand out in a competitive market. The team's expertise in brand strategy and design was invaluable.",
    rating: 5,
    company: "TechStart Inc.",
    location: "San Francisco, CA"
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    image: "/images/testimonials/client2.jpg",
    content: "Professional, creative, and results-driven. Their strategic approach to branding helped us stand out in a crowded market. The comprehensive brand guidelines they created have made our marketing efforts more consistent and effective. Their team's dedication to understanding our business goals was impressive.",
    rating: 5,
    company: "GrowthLabs",
    location: "New York, NY"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, InnovateCo",
    image: "/images/testimonials/client3.jpg",
    content: "The team's attention to detail and commitment to excellence is impressive. They transformed our brand identity completely. Their innovative approach to brand positioning helped us connect with our target audience in ways we hadn't imagined. The results have been outstanding.",
    rating: 5,
    company: "InnovateCo",
    location: "Austin, TX"
  },
  {
    name: "David Kim",
    role: "CEO, FutureScale",
    image: "/images/testimonials/client4.jpg",
    content: "Outstanding work on our brand strategy. They helped us create a memorable and impactful brand presence. Their expertise in digital branding and social media integration was particularly valuable. The team's collaborative approach made the entire process smooth and enjoyable.",
    rating: 5,
    company: "FutureScale",
    location: "Seattle, WA"
  },
  {
    name: "Lisa Thompson",
    role: "Founder, DesignHub",
    image: "/images/testimonials/client5.jpg",
    content: "The branding process was smooth and collaborative. They understood our vision and delivered beyond our expectations. Their ability to translate our brand values into visual elements was exceptional. The comprehensive brand package they delivered has been instrumental in our growth.",
    rating: 5,
    company: "DesignHub",
    location: "Chicago, IL"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setVisibleCards((prev) => {
        const newCards = [...prev.slice(1), (prev[prev.length - 1] + 1) % testimonials.length];
        return newCards;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/brandingpagebackground.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="relative h-[400px] overflow-hidden">
          <div className="flex justify-center items-center h-full">
            <div className="flex w-full justify-between">
              {visibleCards.map((index, position) => (
                <motion.div
                  key={testimonials[index].name}
                  initial={{ 
                    opacity: 0,
                    y: 20
                  }}
                  animate={{ 
                    opacity: 1,
                    y: 0
                  }}
                  exit={{ 
                    opacity: 0,
                    y: 20
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-[30%]"
                >
                  <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 h-[350px] flex flex-col transition-all duration-300 ${
                    position === 1 ? 'hover:-translate-y-4 hover:shadow-xl' : ''
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                        {testimonials[index].name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base">{testimonials[index].name}</h3>
                        <p className="text-white/70 text-sm">{testimonials[index].role}</p>
                        <p className="text-white/50 text-xs">{testimonials[index].company}</p>
                        <p className="text-white/40 text-xs">{testimonials[index].location}</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm flex-grow leading-relaxed">{testimonials[index].content}</p>
                    <div className="flex items-center mt-4">
                      {[...Array(testimonials[index].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                const newCards = [];
                for (let i = 0; i < 3; i++) {
                  newCards.push((index + i) % testimonials.length);
                }
                setVisibleCards(newCards);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-blue-500' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 