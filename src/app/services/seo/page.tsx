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

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const testimonials = [
  {
    name: 'David Thompson',
    initials: 'DT',
    role: 'CEO, TechStart',
    content: 'The SEO strategies implemented by the team have significantly improved our website rankings and organic traffic.',
  },
  {
    name: 'Lisa Chen',
    initials: 'LC',
    role: 'Marketing Director',
    content: 'Their technical SEO expertise and content optimization have helped us achieve better visibility in search results.',
  },
  {
    name: 'James Wilson',
    initials: 'JW',
    role: 'E-commerce Owner',
    content: 'Our organic traffic has increased by 200% since implementing their SEO recommendations.',
  },
];

const faqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. While some improvements can be seen within weeks, significant results typically appear after 3-6 months of consistent optimization.',
  },
  {
    question: 'What SEO services do you provide?',
    answer: 'We offer comprehensive SEO services including technical optimization, content strategy, keyword research, link building, and local SEO.',
  },
  {
    question: 'How do you measure SEO success?',
    answer: 'We track key metrics including organic traffic, keyword rankings, conversion rates, and user engagement to measure SEO performance.',
  },
  {
    question: 'Do you provide ongoing SEO support?',
    answer: 'Yes, we offer monthly SEO maintenance and optimization packages to ensure your website maintains and improves its search rankings.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across various industries including e-commerce, technology, healthcare, and professional services.',
  },
  {
    question: 'How do you stay updated with SEO trends?',
    answer: 'Our team regularly attends industry conferences, participates in training, and stays current with Google\'s algorithm updates.',
  },
];

export default function SEOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/seo bg.webp"
            alt="SEO Background"
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-indigo-800/60 to-indigo-900/60"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(49, 46, 129, 0.6), rgba(55, 48, 163, 0.6), rgba(49, 46, 129, 0.6))",
                "linear-gradient(to bottom right, rgba(55, 48, 163, 0.6), rgba(49, 46, 129, 0.6), rgba(55, 48, 163, 0.6))",
                "linear-gradient(to bottom right, rgba(49, 46, 129, 0.6), rgba(55, 48, 163, 0.6), rgba(49, 46, 129, 0.6))"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.08, 0.05],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              y,
              opacity
            }}
          />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.1) 0%, transparent 70%)",
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 70%)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
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
              <span className="text-white text-lg">Search Engine Optimization</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Boost Your Online Visibility
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Improve your website's search rankings and drive more organic traffic with our comprehensive SEO services
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
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Get Started
              <svg className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            <Link
              href="/services/seo/portfolio"
              className="inline-flex items-center px-8 py-4 border border-white/20 text-lg font-semibold rounded-full text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6"
              >
                <span className="text-blue-600 font-semibold">Our Expertise</span>
              </motion.div>
              <h2 className="text-4xl font-bold mb-8 text-blue-600">Optimize Your Digital Presence</h2>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                In today's digital landscape, appearing in search results is crucial for business success. Our comprehensive SEO services help you improve your website's visibility and attract more qualified visitors.
              </p>
              <div className="space-y-6">
                {[
                  'Technical SEO optimization',
                  'Content strategy and optimization',
                  'Keyword research and targeting',
                  'Link building and outreach',
                  'Local SEO optimization',
                  'Performance monitoring and reporting'
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 bg-blue-50 rounded-lg mr-4 group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <p className="text-lg text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-[500px]"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-blue-100 rounded-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative w-full h-full"
                whileHover={{ 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/images/contentmarketing2.png"
                  alt="SEO Services"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
              <span className="text-blue-600 font-semibold">Our Process</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-blue-600">Our SEO Process</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Analysis', description: 'Comprehensive website audit and competitor analysis' },
              { title: 'Strategy', description: 'Custom SEO strategy and keyword research' },
              { title: 'Optimization', description: 'Technical and content optimization' },
              { title: 'Monitoring', description: 'Performance tracking and continuous improvement' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    className="text-blue-600 text-5xl font-bold mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
              <span className="text-blue-600 font-semibold">Client Success</span>
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
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
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
                  <div className="flex items-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4"
                    >
                      {testimonial.initials}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </motion.button>
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
      <section className="py-20 bg-indigo-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              y,
              opacity
            }}
          />
        </motion.div>
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
              <span className="text-white font-semibold">Get Started Today</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's work together to optimize your website and drive more organic traffic to your business.
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
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Start Your SEO Journey
              <svg className="inline-block ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 