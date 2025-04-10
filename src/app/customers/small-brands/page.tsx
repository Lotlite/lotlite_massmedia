'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const steps = [
  {
    title: 'Create Your Profile',
    description: 'Set up your brand profile and showcase your products or services',
    icon: '🎯',
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Find Perfect Influencers',
    description: 'Connect with influencers who align with your brand values and target audience',
    icon: '🤝',
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Launch Campaigns',
    description: 'Create and manage influencer campaigns with our easy-to-use tools',
    icon: '🚀',
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Track Results',
    description: 'Monitor campaign performance with real-time analytics and insights',
    icon: '📊',
    color: 'from-green-400 to-green-600',
  },
];

const benefits = [
  {
    title: 'Cost-Effective Marketing',
    description: 'Reach your target audience without breaking the bank with our affordable influencer partnerships',
    icon: '💰',
    color: 'from-amber-400 to-amber-600',
  },
  {
    title: 'Authentic Connections',
    description: 'Build genuine relationships with influencers who truly believe in your brand',
    icon: '💖',
    color: 'from-rose-400 to-rose-600',
  },
  {
    title: 'Increased Visibility',
    description: 'Expand your reach and get your brand in front of new audiences',
    icon: '👀',
    color: 'from-indigo-400 to-indigo-600',
  },
  {
    title: 'Higher Engagement',
    description: 'Drive more meaningful interactions and conversions with your target customers',
    icon: '🔄',
    color: 'from-teal-400 to-teal-600',
  },
  {
    title: 'Brand Loyalty',
    description: 'Foster long-term customer relationships through authentic influencer partnerships',
    icon: '🤗',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with comprehensive analytics and reporting',
    icon: '📈',
    color: 'from-violet-400 to-violet-600',
  },
];

const testimonials = [
  {
    name: 'Emma Rodriguez',
    role: 'Founder',
    company: 'EcoEssentials',
    image: '/images/small brands.jpg',
    content: 'Since partnering with influencers through this platform, our sales have increased by 45%. The ROI is incredible!',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Marketing Manager',
    company: 'LocalBites',
    image: '/images/contentmarketing2.png',
    content: 'The platform made it so easy to find and connect with food influencers who genuinely love our products.',
    rating: 5,
  },
  {
    name: 'Sophia Patel',
    role: 'Owner',
    company: 'Handmade Haven',
    image: '/images/digital_head_image.webp',
    content: 'As a small business owner, this platform has been a game-changer. We\'ve reached customers we never could have on our own.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'How much does it cost to use the platform?',
    answer: 'We offer flexible pricing plans starting at just $49/month for small brands. You can also pay per campaign with no monthly commitment.',
  },
  {
    question: 'How do you match brands with influencers?',
    answer: 'Our AI-powered algorithm considers factors like brand values, target audience, budget, and campaign goals to find the perfect matches.',
  },
  {
    question: 'Can I work with influencers in my local area?',
    answer: 'Yes! You can filter influencers by location, allowing you to connect with local creators who resonate with your community.',
  },
  {
    question: 'What types of campaigns can I create?',
    answer: 'You can create various campaign types including product reviews, sponsored posts, takeovers, affiliate programs, and more.',
  },
  {
    question: 'How do I measure the success of my campaigns?',
    answer: 'Our platform provides comprehensive analytics including reach, engagement, conversions, and ROI tracking for all your campaigns.',
  },
];

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

export default function SmallBrandsPage() {
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
            src="/images/small brands.jpg"
            alt="Small Brands Background"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Grow Your Small Brand with Influencer Marketing
            </h1>
            <p className="text-xl text-white/90 mb-12">
              Connect with the perfect influencers to reach new audiences and boost your brand's visibility
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
              className="bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Get Started
              <motion.svg 
                className="ml-2 w-6 h-6 inline-block transform group-hover:translate-x-1 transition-transform duration-300" 
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

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6"
            >
              <span className="text-indigo-600 font-semibold">Simple Process</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Our platform makes it easy to connect with influencers and grow your brand
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-3xl">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6"
            >
              <span className="text-indigo-600 font-semibold">Why Choose Us</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900">Benefits for Small Brands</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover how our platform can help your small brand thrive in the digital landscape
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-3xl">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6"
            >
              <span className="text-indigo-600 font-semibold">Success Stories</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from small brands that have grown with our platform
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
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
                      <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-6"
            >
              <span className="text-indigo-600 font-semibold">Common Questions</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
              Find answers to common questions about our platform
            </p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Grow Your Small Brand?
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Join thousands of small brands already using our platform to connect with influencers
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LotLite</h3>
              <p className="text-gray-400">
                Connecting brands with the perfect influencers to grow their digital presence.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Brands</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/customers/small-brands" className="text-gray-400 hover:text-white transition-colors">
                    Small Brands
                  </Link>
                </li>
                <li>
                  <Link href="/customers/growing-brands" className="text-gray-400 hover:text-white transition-colors">
                    Growing Brands
                  </Link>
                </li>
                <li>
                  <Link href="/customers/agencies" className="text-gray-400 hover:text-white transition-colors">
                    Agencies
                  </Link>
                </li>
                <li>
                  <Link href="/customers/apps-digital" className="text-gray-400 hover:text-white transition-colors">
                    Apps & Digital
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@lotlite.com
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LotLite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 