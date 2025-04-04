'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const projects = [
  {
    title: 'E-commerce Website',
    category: 'E-commerce',
    description: 'A modern e-commerce platform with advanced filtering and search capabilities.',
    image: '/images/contentmarketing2.png',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    link: '/case-studies/ecommerce-website'
  },
  {
    title: 'Corporate Website',
    category: 'Corporate',
    description: 'A professional corporate website with modern design and smooth animations.',
    image: '/images/Contentmarketing.webp',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: '/case-studies/corporate-website'
  },
  {
    title: 'Portfolio Website',
    category: 'Portfolio',
    description: 'A creative portfolio website showcasing work with interactive elements.',
    image: '/images/socialmedia3.jpg',
    tags: ['React', 'Three.js', 'Tailwind CSS'],
    link: '/case-studies/portfolio-website'
  },
  {
    title: 'Blog Platform',
    category: 'Blog',
    description: 'A content-rich blog platform with advanced content management.',
    image: '/images/contentmarketing2.png',
    tags: ['Next.js', 'MDX', 'Tailwind CSS'],
    link: '/case-studies/blog-platform'
  },
  {
    title: 'Landing Page',
    category: 'Landing',
    description: 'A high-converting landing page with modern design elements.',
    image: '/images/Contentmarketing.webp',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: '/case-studies/landing-page'
  },
  {
    title: 'Web Application',
    category: 'Web App',
    description: 'A full-featured web application with real-time updates.',
    image: '/images/socialmedia3.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/case-studies/web-application'
  }
];

const categories = [
  'All',
  'E-commerce',
  'Corporate',
  'Portfolio',
  'Blog',
  'Landing',
  'Web App'
];

export default function WebDesignPortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const containerRef = useRef(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
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
            alt="Web Design Portfolio Background"
            fill
            className="object-cover brightness-100"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-800/20 to-purple-900/20"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), rgba(107, 33, 168, 0.2), rgba(88, 28, 135, 0.2))",
                "linear-gradient(to bottom right, rgba(107, 33, 168, 0.2), rgba(88, 28, 135, 0.2), rgba(107, 33, 168, 0.2))",
                "linear-gradient(to bottom right, rgba(88, 28, 135, 0.2), rgba(107, 33, 168, 0.2), rgba(88, 28, 135, 0.2))"
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
        </motion.div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <span className="text-white text-lg">Web Design Portfolio</span>
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Our Web Design Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of successful web design projects and see how we've helped businesses create their digital presence
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300"
                  >
                    View Case Study
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
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
              <span className="text-white font-semibold">Start Your Project</span>
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