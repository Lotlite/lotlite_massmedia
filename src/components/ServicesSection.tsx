'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and rankings in search results with our comprehensive SEO strategies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      link: "/services/seo",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across all major social media platforms.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      ),
      link: "/services/social-media-marketing",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Google Ads Management",
      description: "Maximize your ROI with strategic Google Ads campaigns and expert optimization.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      link: "/services/google-ads",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Content Marketing",
      description: "Create engaging content that resonates with your audience and drives conversions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      link: "/services/content-marketing",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Web Design & Development",
      description: "Create stunning, responsive websites that engage your audience and drive conversions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: "/services/web-design",
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers with targeted local SEO strategies.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: "/services/local-seo",
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our comprehensive digital marketing solutions. We help you reach, engage, and convert your target audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Link 
                href={service.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 block p-8 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  Learn More
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: services.length * 0.1 + 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
