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

const testimonials = [
  {
    name: 'David Thompson',
    initials: 'DT',
    role: 'CEO, TechStart',
    content: 'The website they built for us is not just beautiful but also converts visitors into customers. Our online sales have increased by 150%.',
  },
  {
    name: 'Lisa Chen',
    initials: 'LC',
    role: 'Marketing Director',
    content: 'Their attention to detail and user experience expertise is outstanding. The new website has significantly improved our brand perception.',
  },
  {
    name: 'James Wilson',
    initials: 'JW',
    role: 'E-commerce Owner',
    content: 'The team delivered a stunning, responsive website that works perfectly across all devices. Our mobile sales have doubled.',
  },
];

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the complexity of your website. A basic website can take 4-6 weeks, while more complex projects may take 8-12 weeks or more.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including React, Next.js, Tailwind CSS, and other cutting-edge tools to build fast, secure, and scalable websites.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally.',
  },
  {
    question: 'What\'s included in your web design services?',
    answer: 'Our services include UI/UX design, responsive development, content management systems, e-commerce solutions, and performance optimization.',
  },
  {
    question: 'Can you help with website redesigns?',
    answer: 'Absolutely! We specialize in modernizing existing websites while maintaining brand consistency and improving user experience.',
  },
  {
    question: 'Do you offer custom web applications?',
    answer: 'Yes, we develop custom web applications tailored to your specific business needs, from simple tools to complex enterprise solutions.',
  },
];

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function WebDesignPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const containerRef = useRef(null);
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
            src="/images/web design bg.jpg"
            alt="Web Design Background"
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-purple-800/60 to-purple-900/60"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(88, 28, 135, 0.6), rgba(107, 33, 168, 0.6), rgba(88, 28, 135, 0.6))",
                "linear-gradient(to bottom right, rgba(107, 33, 168, 0.6), rgba(88, 28, 135, 0.6), rgba(107, 33, 168, 0.6))",
                "linear-gradient(to bottom right, rgba(88, 28, 135, 0.6), rgba(107, 33, 168, 0.6), rgba(88, 28, 135, 0.6))"
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
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
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
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
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
          <motion.div
            className="absolute top-1/3 right-1/3 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{
              duration: 3,
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
              <span className="text-white text-lg">Web Design & Development</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Create Your Digital Presence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Create stunning, responsive websites that engage your audience and drive conversions
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
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Start Your Project
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
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border border-white/20 text-lg font-semibold rounded-full text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
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
                className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
              >
                <span className="text-purple-600 font-semibold">Our Expertise</span>
              </motion.div>
              <h2 className="text-4xl font-bold mb-8 text-purple-600">Create Your Digital Presence</h2>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                In today's digital world, your website is often the first impression potential customers have of your business. We create beautiful, functional websites that not only look great but also drive results.
              </p>
              <div className="space-y-6">
                {[
                  'Modern, responsive design for all devices',
                  'Optimized performance and loading speed',
                  'User-friendly navigation and interface',
                  'SEO-friendly structure and content'
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
                      className="p-2 bg-purple-50 rounded-lg mr-4 group-hover:bg-purple-100 transition-colors duration-300"
                    >
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <p className="text-lg text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">
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
                className="absolute inset-0 bg-purple-100 rounded-3xl"
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
                  alt="Web Design Services"
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
              className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
            >
              <span className="text-purple-600 font-semibold">Our Process</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-purple-600">Our Web Design Process</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Discovery', 
                description: 'Understanding your goals and requirements',
                icon: '🔍',
                color: 'from-purple-500 to-purple-600'
              },
              { 
                title: 'Design', 
                description: 'Creating beautiful, user-friendly interfaces',
                icon: '🎨',
                color: 'from-blue-500 to-blue-600'
              },
              { 
                title: 'Development', 
                description: 'Building with modern technologies',
                icon: '💻',
                color: 'from-green-500 to-green-600'
              },
              { 
                title: 'Launch', 
                description: 'Testing, optimization, and deployment',
                icon: '🚀',
                color: 'from-orange-500 to-orange-600'
              }
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
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
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
                    {step.icon}
                  </motion.div>
                  <motion.div
                    className="text-purple-600 text-5xl font-bold mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <motion.div
                    className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${step.color}`}
                      animate={{
                        x: [0, 20, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
            >
              <span className="text-purple-600 font-semibold">Client Success</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-purple-600">What Our Clients Say</h2>
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
                  className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                      className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4"
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
              className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
            >
              <span className="text-purple-600 font-semibold">Common Questions</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-purple-600">Frequently Asked Questions</h2>
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
      <section className="py-20 bg-purple-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
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
              Ready to Create Your Dream Website?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's work together to build a website that not only looks great but also drives results for your business.
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
              className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Start Your Project
              <svg className="ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 