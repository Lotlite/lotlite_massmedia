'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const benefits = [
  {
    title: 'Local Visibility',
    description: 'Get found by customers in your area when they search for your services',
    icon: '📍'
  },
  {
    title: 'Google Maps Ranking',
    description: 'Appear at the top of Google Maps results for local searches',
    icon: '🗺️'
  },
  {
    title: 'Customer Reviews',
    description: 'Build trust with potential customers through positive reviews',
    icon: '⭐'
  },
  {
    title: 'Mobile Optimization',
    description: 'Reach customers searching on their mobile devices',
    icon: '📱'
  }
];

const services = [
  {
    title: 'Google My Business Optimization',
    description: 'Complete setup and optimization of your Google Business Profile',
    icon: '🏢'
  },
  {
    title: 'Local Citations',
    description: 'Build consistent business listings across local directories',
    icon: '📋'
  },
  {
    title: 'Review Management',
    description: 'Generate and manage customer reviews effectively',
    icon: '💬'
  },
  {
    title: 'Local Content Strategy',
    description: 'Create location-specific content to attract local customers',
    icon: '📝'
  }
];

const testimonials = [
  {
    name: "David Thompson",
    role: "Owner, Thompson's Auto Repair",
    initials: "DT",
    content: "Since implementing their local SEO strategy, our business has seen a 150% increase in local customer inquiries. The Google My Business optimization was particularly effective.",
    image: "/images/socialmedia.png"
  },
  {
    name: "Lisa Martinez",
    role: "Manager, Martinez Dental Clinic",
    initials: "LM",
    content: "The local SEO services helped us dominate our local market. We're now the top result for dental services in our area, leading to a significant increase in new patients.",
    image: "/images/contentmarketing2.png"
  },
  {
    name: "James Wilson",
    role: "Director, Wilson Real Estate",
    initials: "JW",
    content: "Their local SEO expertise transformed our real estate business. We're now generating more qualified leads than ever before through local search visibility.",
    image: "/images/digital_head_image.webp"
  }
];

const faqs = [
  {
    question: "How long does it take to see results from local SEO?",
    answer: "While some improvements can be seen within a few weeks, significant results typically appear within 3-6 months. This timeline varies based on your industry, competition, and the current state of your local SEO presence."
  },
  {
    question: "What makes local SEO different from regular SEO?",
    answer: "Local SEO focuses on optimizing your business for local search results and Google Maps. It includes managing your Google Business Profile, local citations, reviews, and location-specific content to help you appear in local search results."
  },
  {
    question: "How do you handle negative reviews?",
    answer: "We help you develop a proactive review management strategy, including prompt responses to all reviews (positive and negative), addressing customer concerns professionally, and implementing systems to encourage more positive reviews."
  },
  {
    question: "Do you work with businesses outside your local area?",
    answer: "Yes, we work with businesses across different locations. Our local SEO strategies are tailored to each specific market, ensuring effective results regardless of your business location."
  },
  {
    question: "What metrics do you track for local SEO success?",
    answer: "We monitor key metrics including local search rankings, Google Maps visibility, website traffic from local searches, customer reviews and ratings, click-through rates, and conversion rates from local traffic."
  }
];

export default function LocalSEOPage() {
  const router = useRouter();
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

  return (
    <div className="min-h-screen bg-white relative" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/local seo.avif"
            alt="Local SEO Background"
            fill
            className="object-cover brightness-75"
            priority
            sizes="100vw"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/60 to-blue-900/60"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(30, 58, 138, 0.6), rgba(30, 64, 175, 0.6), rgba(30, 58, 138, 0.6))",
                "linear-gradient(to bottom right, rgba(30, 64, 175, 0.6), rgba(30, 58, 138, 0.6), rgba(30, 64, 175, 0.6))",
                "linear-gradient(to bottom right, rgba(30, 58, 138, 0.6), rgba(30, 64, 175, 0.6), rgba(30, 58, 138, 0.6))"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-2"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.02, 0.04, 0.02],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <span className="text-white text-lg">Local SEO Services</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Dominate Your Local Market
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Get found by customers in your area and grow your business with our proven local SEO strategies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                try {
                  router.push('/contact');
                } catch (error) {
                  console.error('Navigation error:', error);
                  window.location.href = '/contact';
                }
              }}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Get Started
              <motion.svg 
                className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 relative">
          {/* Benefits Section */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
                >
                  <span className="text-blue-600 font-semibold">Why Local SEO?</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-blue-600">Benefits of Local SEO</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {benefit.icon}
                      </motion.div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
                >
                  <span className="text-blue-600 font-semibold">Our Services</span>
                </motion.div>
                <h2 className="text-4xl font-bold text-blue-600">Local SEO Services</h2>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={false}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-semibold">Client Success Stories</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-blue-600">What Our Clients Say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6"
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
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-semibold">Common Questions</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-blue-600">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 py-6 bg-gray-50"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/60 via-blue-800/60 to-blue-900/60 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6"
            >
              <span className="text-white font-semibold">Ready to Get Started?</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Dominate Your Local Market Today
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's work together to improve your local search visibility and attract more customers to your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                try {
                  router.push('/contact');
                } catch (error) {
                  console.error('Navigation error:', error);
                  window.location.href = '/contact';
                }
              }}
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Get Started
              <motion.svg 
                className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 