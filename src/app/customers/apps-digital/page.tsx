// Updated Apps & Digital Services Page
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const services = [
  {
    id: 1,
    title: 'Social Media Analytics',
    description: 'Track and analyze your social media performance across all platforms with real-time insights and detailed reports.',
    icon: '📊',
    color: 'from-purple-500 to-indigo-600',
    features: ['Real-time tracking', 'Custom reports', 'Competitor analysis'],
    image: '/images/analytics.png'
  },
  {
    id: 2,
    title: 'Content Scheduler',
    description: 'Plan and schedule your content across multiple platforms with our intuitive drag-and-drop calendar interface.',
    icon: '📅',
    color: 'from-blue-500 to-cyan-600',
    features: ['Visual calendar', 'Auto-posting', 'Content library'],
    image: '/images/scheduler.png'
  },
  {
    id: 3,
    title: 'Engagement Bot',
    description: 'Automate your social media engagement with smart AI-powered responses and community management.',
    icon: '🤖',
    color: 'from-green-500 to-emerald-600',
    features: ['Smart responses', 'Comment management', '24/7 monitoring'],
    image: '/images/bot.png'
  },
  {
    id: 4,
    title: 'Influencer CRM',
    description: 'Manage your influencer relationships, campaigns, and performance tracking all in one place.',
    icon: '🤝',
    color: 'from-pink-500 to-rose-600',
    features: ['Contact management', 'Campaign tracking', 'Performance metrics'],
    image: '/images/crm.png'
  },
  {
    id: 5,
    title: 'Content Generator',
    description: 'Create engaging social media content with our AI-powered content generation and optimization tools.',
    icon: '✨',
    color: 'from-yellow-500 to-orange-600',
    features: ['AI writing', 'Image generation', 'Hashtag optimization'],
    image: '/images/generator.png'
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'Get a comprehensive view of your digital presence with our all-in-one analytics dashboard.',
    icon: '📈',
    color: 'from-red-500 to-pink-600',
    features: ['Custom widgets', 'Data visualization', 'Export options'],
    image: '/images/dashboard.png'
  }
];

// Enhancements summary (already applied in your code or to be applied):
// - Add subtle hover tilt and glow to cards
// - Add gradient border or background shift on hover
// - Include subtle parallax/scroll animation or blob shapes in hero/testimonials
// - Use animated gradient text for headings
// - Add subtle delay-based entrance animations
// - Improve CTA with bouncing or pulsing icon
//
// To keep the example clean, I recommend checking the canvas where the full updated code is pasted. I've added interactive touches and enhancements for better visual impact.

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AppsDigitalPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/aad bg.webp"
            alt="Apps and Digital Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-indigo-800/70 to-indigo-900/70"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(79, 70, 229, 0.7), rgba(67, 56, 202, 0.7), rgba(79, 70, 229, 0.7))",
                "linear-gradient(to bottom right, rgba(67, 56, 202, 0.7), rgba(79, 70, 229, 0.7), rgba(67, 56, 202, 0.7))",
                "linear-gradient(to bottom right, rgba(79, 70, 229, 0.7), rgba(67, 56, 202, 0.7), rgba(79, 70, 229, 0.7))"
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
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full mb-6"
            >
              <span className="text-white font-semibold">Apps & Digital Services</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful Tools for Digital Success
            </h1>
            <p className="text-xl text-white/90 mb-12">
              Discover our suite of digital tools and services designed to help you grow your online presence
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
              className="inline-flex items-center bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredId(service.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="relative group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl">{service.icon}</span>
                      <motion.div
                        animate={{
                          rotate: hoveredId === service.id ? 360 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full flex items-center justify-center"
                      >
                        <svg
                          className="w-5 h-5 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-indigo-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-8 py-6 bg-gray-50 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-200"
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6"
            >
              <span className="text-indigo-600 font-semibold">Client Success</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-indigo-600">What Our Clients Say</h2>
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
                  className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                      className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4"
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
              className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6"
            >
              <span className="text-indigo-600 font-semibold">Common Questions</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-indigo-600">Frequently Asked Questions</h2>
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
      <section className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Get started with our digital tools and services today
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    name: 'Alex Chen',
    initials: 'AC',
    role: 'Marketing Manager, TechFlow',
    content: 'Their digital tools have revolutionized how we manage our social media presence. The analytics and scheduling features save us hours every week.',
  },
  {
    name: 'Sarah Miller',
    initials: 'SM',
    role: 'Digital Director, CreativeHub',
    content: 'The content generation tools and engagement features have helped us double our social media engagement in just three months.',
  },
  {
    name: 'Marcus Johnson',
    initials: 'MJ',
    role: 'Founder, Digital First',
    content: 'Having all our digital tools in one place has streamlined our workflow significantly. The automation features are a game-changer.',
  },
];

const faqs = [
  {
    question: 'What digital tools do you offer?',
    answer: 'We offer a comprehensive suite of digital tools including social media analytics, content scheduling, engagement automation, influencer CRM, content generation, and performance dashboards.',
  },
  {
    question: 'How do your tools integrate with existing platforms?',
    answer: 'Our tools seamlessly integrate with all major social media platforms and digital marketing tools. We provide easy-to-use APIs and native integrations for popular services.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we can customize our digital tools and services to meet your specific business needs, whether you\'re a small business or enterprise client.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, regular training sessions, and dedicated account managers for enterprise clients. Our help center also provides comprehensive documentation.',
  },
  {
    question: 'How secure are your digital tools?',
    answer: 'Security is our top priority. We use industry-standard encryption, regular security audits, and comply with GDPR and other privacy regulations.',
  },
  {
    question: 'Can I try before subscribing?',
    answer: 'Yes, we offer a 14-day free trial for all our digital tools. You can explore all features and decide which tools best suit your needs.',
  },
]; 