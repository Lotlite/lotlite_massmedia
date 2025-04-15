'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
    title: 'Collaborate',
    description: 'Launch and manage successful campaigns with real-time analytics and reporting',
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    role: 'Marketing Director',
    company: 'Digital First Agency',
    image: '/images/testimonial1.jpg',
    content: 'The platform has revolutionized how we manage influencer campaigns. We\'ve seen a 40% increase in campaign efficiency.',
  },
  {
    name: 'Michael Chen',
    initials: 'MC',
    role: 'CEO',
    company: 'Growth Marketing Co',
    image: '/images/testimonial2.jpg',
    content: 'Finding and connecting with the right influencers used to take weeks. Now we can launch campaigns in days.',
  },
  {
    name: 'Emily Rodriguez',
    initials: 'ER',
    role: 'Head of Partnerships',
    company: 'Social Media Agency',
    image: '/images/testimonial3.jpg',
    content: 'The analytics and reporting features have made it so much easier to demonstrate ROI to our clients.',
  },
];

const faqs = [
  {
    question: 'How does your influencer matching system work?',
    answer: 'Our AI-powered system analyzes multiple data points including audience demographics, engagement rates, content quality, and brand alignment to find the perfect influencers for your campaigns. This ensures higher success rates and better ROI for your clients.',
  },
  {
    question: 'What kind of reporting and analytics do you provide?',
    answer: 'We offer comprehensive analytics including real-time campaign tracking, engagement metrics, audience insights, ROI calculations, and customizable white-label reports that you can share directly with your clients.',
  },
  {
    question: 'Can we manage multiple client campaigns simultaneously?',
    answer: 'Yes! Our platform is designed for agencies to manage multiple client campaigns efficiently. You can organize campaigns by client, track performance separately, and maintain different workflows for each campaign.',
  },
  {
    question: 'Do you offer white-label solutions?',
    answer: 'Absolutely! Our white-label solutions allow you to brand the platform and reports with your agency\'s logo and colors, maintaining your professional image with clients.',
  },
  {
    question: 'What support do you provide to agencies?',
    answer: 'We provide dedicated account management, 24/7 technical support, regular training sessions, and strategy consultations to help your agency succeed with influencer marketing.',
  },
  {
    question: 'How long does it take to launch a campaign?',
    answer: 'With our streamlined process, you can launch a campaign in as little as 48 hours. This includes influencer discovery, outreach, and campaign setup. Complex campaigns may require additional time for customization.',
  },
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

export default function AgencyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            src="/images/agencies bg.jpg"
            alt="Agencies Background"
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
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Connect with the Right Influencers Effortlessly
              </h1>
              <p className="text-lg md:text-xl text-indigo-200 mb-8 leading-relaxed">
                Scale your agency's influencer campaigns with AI-powered matching, streamlined workflows, and comprehensive analytics
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-full bg-white text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book a Demo
                  <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform simplifies influencer marketing for agencies with a powerful three-step process
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
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-3xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Powerful Dashboard for Agencies</h3>
                    <ul className="space-y-4">
                      {[
                        'Real-time campaign analytics',
                        'Automated influencer discovery',
                        'Content approval workflows',
                        'Performance tracking',
                        'Client reporting tools',
                      ].map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-indigo-100"
                        >
                          <svg className="w-5 h-5 mr-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl overflow-hidden shadow-2xl bg-indigo-800/50"
                    >
                      <div className="aspect-[3/2] relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-indigo-200 text-center p-8">
                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <p className="text-lg font-medium">Platform Dashboard Preview</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Agencies</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See what agency professionals are saying about our platform
                </p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-semibold text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundImage: [
              'radial-gradient(circle at 20% 20%, #4F46E5 0%, transparent 70%)',
              'radial-gradient(circle at 80% 80%, #4F46E5 0%, transparent 70%)',
              'radial-gradient(circle at 20% 20%, #4F46E5 0%, transparent 70%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
              Everything you need to know about our agency platform and services
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-indigo-50/50 transition-colors duration-200"
                >
                  <span className="text-xl font-semibold text-gray-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <svg 
                        className="w-5 h-5 text-indigo-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </motion.div>
                </motion.button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 py-6 bg-indigo-50/50"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
          <motion.div 
            className="absolute inset-0"
            animate={{
              backgroundImage: [
                'radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.4) 0%, transparent 70%)',
                'radial-gradient(circle at 70% 70%, rgba(79, 70, 229, 0.4) 0%, transparent 70%)',
                'radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.4) 0%, transparent 70%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Agency's Influencer Marketing?
              </h2>
              <p className="text-xl text-indigo-200 mb-12 max-w-2xl mx-auto">
                Join leading agencies who are scaling their influencer campaigns with our platform
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
                  Book a Demo
                  <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 