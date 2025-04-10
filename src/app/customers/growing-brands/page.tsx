'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const steps = [
  {
    title: 'Discover',
    description: 'Find the perfect influencers for your brand using our AI-powered matching system',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Connect',
    description: 'Engage with influencers through our streamlined communication platform',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    title: 'Grow',
    description: 'Launch and manage successful campaigns with real-time analytics and reporting',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'EcoLife',
    image: '/images/socialmedia.png',
    content: 'The platform has revolutionized how we manage influencer campaigns. We\'ve seen a 40% increase in engagement.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'TechGear',
    image: '/images/contentmarketing2.png',
    content: 'Finding and connecting with the right influencers used to take weeks. Now we can launch campaigns in days.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Brand Manager',
    company: 'StyleHub',
    image: '/images/digital_head_image.webp',
    content: 'The analytics and reporting features have made it so much easier to demonstrate ROI to our stakeholders.',
  },
];

const benefits = [
  {
    title: 'AI-Powered Matching',
    description: 'Our advanced algorithm finds the perfect influencers for your brand based on audience demographics, engagement rates, and content style.',
    image: '/images/socialmedia.png',
  },
  {
    title: 'Streamlined Communication',
    description: 'Manage all your influencer relationships in one place with our intuitive messaging platform and campaign management tools.',
    image: '/images/contentmarketing2.png',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Track campaign performance, measure ROI, and make data-driven decisions with our comprehensive analytics dashboard.',
    image: '/images/digital_head_image.webp',
  },
];

const trustedBrands = [
  '/images/small brands.jpg',
  '/images/socialmedia.png',
  '/images/contentmarketing2.png',
  '/images/digital_head_image.webp',
  '/images/Contentmarketing.webp',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const faqs = [
  {
    question: 'How does the AI matching system work?',
    answer: 'Our AI analyzes influencer profiles, audience demographics, engagement rates, and content style to find the perfect match for your brand. The system continuously learns and improves based on campaign results.',
  },
  {
    question: 'What types of brands can benefit from your platform?',
    answer: 'Our platform is designed for brands of all sizes, from startups to established companies. Whether you\'re in fashion, tech, food, or any other industry, our tools help you connect with relevant influencers.',
  },
  {
    question: 'How do you ensure influencer authenticity?',
    answer: 'We use advanced verification tools to check influencer authenticity, including audience quality analysis, engagement rate verification, and content authenticity checks.',
  },
  {
    question: 'What kind of analytics do you provide?',
    answer: 'Our analytics dashboard provides real-time insights into campaign performance, including reach, engagement, conversion rates, and ROI. You can also track audience demographics and growth metrics.',
  },
  {
    question: 'How do you handle campaign payments?',
    answer: 'We offer a secure payment system that handles all transactions between brands and influencers. Payments are released only after campaign deliverables are verified.',
  },
  {
    question: 'Can I manage multiple campaigns at once?',
    answer: 'Yes, our platform allows you to manage multiple campaigns simultaneously. Each campaign has its own dashboard, analytics, and communication channels.',
  },
];

export default function GrowingBrandsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/growing brands.jpg"
            alt="Growing Brands Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-indigo-800/80 to-indigo-900/80"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(79, 70, 229, 0.8), rgba(67, 56, 202, 0.8), rgba(79, 70, 229, 0.8))",
                "linear-gradient(to bottom right, rgba(67, 56, 202, 0.8), rgba(79, 70, 229, 0.8), rgba(67, 56, 202, 0.8))",
                "linear-gradient(to bottom right, rgba(79, 70, 229, 0.8), rgba(67, 56, 202, 0.8), rgba(79, 70, 229, 0.8))"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
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
            className="absolute top-1/4 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"
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
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="mb-8"
            >
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
                <span className="text-white text-lg">Influencer Marketing Platform</span>
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Grow Your Brand with Influencer Marketing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Connect with the right influencers, launch successful campaigns, and track your growth with our all-in-one platform
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
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
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

      {/* Trusted Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center"
          >
            {trustedBrands.map((brand, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand}
                  alt="Trusted brand"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform simplifies influencer marketing with a powerful three-step process
              </p>
            </motion.div>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join leading brands who are growing their presence with influencer marketing
              </p>
            </motion.div>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-gray-600">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 italic mb-8">"{testimonials[activeTestimonial].content}"</p>
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      activeTestimonial === index ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div variants={itemVariants} className="md:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-600">{benefit.description}</p>
              </motion.div>
              <motion.div variants={itemVariants} className="md:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
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
              className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6"
            >
              <span className="text-indigo-600 font-semibold">Common Questions</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our influencer marketing platform
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
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
                    className="w-6 h-6 text-indigo-600"
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Grow Your Brand?
              </h2>
              <p className="text-xl text-indigo-200 mb-12">
                Join thousands of brands who are already using our platform to connect with influencers and grow their presence
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                  <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 