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
      title: "Web Designing & Development",
      description: "Create stunning, responsive websites that engage your audience and drive conversions.",
      link: "/services/web-design"
    },
    {
      title: "Ecommerce Website Designing",
      description: "Build powerful online stores that drive sales and provide seamless shopping experiences.",
      link: "/services/ecommerce"
    },
    {
      title: "ERP Development",
      description: "Streamline your business operations with custom ERP solutions.",
      link: "/services/erp"
    },
    {
      title: "Google Adwords",
      description: "Maximize your ROI with strategic Google Ads campaigns.",
      link: "/services/google-ads"
    },
    {
      title: "Search Engine Optimisation",
      description: "Improve your website's visibility and rankings in search results.",
      link: "/services/seo"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers.",
      link: "/services/local-seo"
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience and build brand awareness across social platforms.",
      link: "/services/smm"
    }
  ];

  // Group services into rows of 3
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/services-bg.jpg')" }} // Background Image for Services Section
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital age.
          </p>
        </motion.div>

        <div className="space-y-8">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: rowIndex * 0.3 }}
            >
              {row.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.7, delay: rowIndex * 0.3 + index * 0.1 }}
                >
                  <Link 
                    href={service.link}
                    className="group bg-white/10 backdrop-blur-md rounded-xl shadow-sm hover:bg-white/20 transition-all duration-300 overflow-hidden border border-white/20 block"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/80">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: rows.length * 0.3 + 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-white/20 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
          >
            Get Started Now
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
