'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Their branding strategy transformed our business. We've seen a 40% increase in brand recognition.",
    author: "John Doe",
    company: "TechStart Inc.",
    image: "/images/testimonials/client1.jpg",
  },
  {
    quote: "The team's creative approach and attention to detail exceeded our expectations.",
    author: "Jane Smith",
    company: "Creative Solutions",
    image: "/images/testimonials/client2.jpg",
  },
  {
    quote: "Our new brand identity perfectly captures our company's vision and values.",
    author: "Mike Johnson",
    company: "Innovate Corp",
    image: "/images/testimonials/client3.jpg",
  },
  {
    quote: "The rebranding process was smooth and professional. Our new look has received amazing feedback.",
    author: "Sarah Williams",
    company: "Growth Marketing",
    image: "/images/testimonials/client4.jpg",
  },
  {
    quote: "Working with this team was a game-changer for our brand. The results speak for themselves.",
    author: "David Chen",
    company: "TechVision",
    image: "/images/testimonials/client5.jpg",
  },
  {
    quote: "Their strategic approach to branding helped us connect better with our target audience.",
    author: "Emily Brown",
    company: "Digital Solutions",
    image: "/images/testimonials/client6.jpg",
  },
  {
    quote: "The brand guidelines they created have made our marketing efforts more consistent and effective.",
    author: "Alex Thompson",
    company: "Marketing Pro",
    image: "/images/testimonials/client7.jpg",
  },
  {
    quote: "Their packaging design helped our product stand out on the shelves and increased sales by 25%.",
    author: "Lisa Chen",
    company: "Product Co",
    image: "/images/testimonials/client8.jpg",
  },
  {
    quote: "The website redesign improved our user experience and conversion rates significantly.",
    author: "Robert Wilson",
    company: "E-commerce Plus",
    image: "/images/testimonials/client9.jpg",
  },
  {
    quote: "Their brand strategy helped us pivot successfully into a new market segment.",
    author: "Maria Garcia",
    company: "Global Brands",
    image: "/images/testimonials/client10.jpg",
  },
  {
    quote: "The social media branding package gave us a cohesive look across all platforms.",
    author: "James Miller",
    company: "Social Media Hub",
    image: "/images/testimonials/client11.jpg",
  },
  {
    quote: "Their attention to detail in brand consistency is impressive. Every touchpoint is perfect.",
    author: "Sophie Anderson",
    company: "Brand Masters",
    image: "/images/testimonials/client12.jpg",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000); // Change slide every 6 seconds

      return () => clearInterval(timer);
    }
  }, [isAutoPlaying]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              initial={false}
              animate={{ x: `-${currentIndex * 25}%` }}
              transition={{ 
                duration: 1.5, 
                ease: "easeInOut",
                type: "spring",
                stiffness: 100
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  className="flex-shrink-0 w-1/4 px-4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 1,
                      delay: 0.2
                    }
                  }}
                  exit={{ opacity: 0, x: -100 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.author}</p>
                        <p className="text-gray-500">{testimonial.company}</p>
                      </div>
                    </div>
                    <motion.p 
                      className="text-gray-600"
                      whileHover={{ scale: 1.02 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index * 4)}
                className={`w-2 h-2 rounded-full ${
                  Math.floor(currentIndex / 4) === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 