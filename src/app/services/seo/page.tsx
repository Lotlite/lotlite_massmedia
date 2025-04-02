'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    role: 'E-commerce Director',
    content: 'The SEO services provided have transformed our online presence. Our organic traffic has increased by 200% in just 6 months.',
  },
  {
    name: 'Michael Chen',
    initials: 'MC',
    role: 'Marketing Manager',
    content: 'Exceptional SEO strategy and execution. We've seen a significant improvement in our search rankings and conversion rates.',
  },
  {
    name: 'Emily Rodriguez',
    initials: 'ER',
    role: 'Small Business Owner',
    content: 'The ROI from their SEO services has been incredible. Our local visibility has improved dramatically.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Monthly Reports',
      'Basic Link Building',
      'Technical SEO Audit',
    ],
    isPopular: false,
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/month',
    features: [
      'Everything in Starter',
      'Advanced Link Building',
      'Content Strategy',
      'Competitor Analysis',
      'Weekly Reports',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: '$1,999',
    period: '/month',
    features: [
      'Everything in Professional',
      'Custom Strategy',
      'Priority Support',
      'International SEO',
      'Advanced Analytics',
    ],
    isPopular: false,
  },
];

const faqs = [
  {
    question: 'How long does it take to see results from SEO?',
    answer: 'SEO is a long-term strategy, typically taking 4-6 months to see significant results. However, some improvements can be noticed within the first few months of implementation.',
  },
  {
    question: 'What makes your SEO services different?',
    answer: 'We combine data-driven strategies, cutting-edge techniques, and personalized approaches to deliver sustainable results that align with your business goals.',
  },
  {
    question: 'Do you guarantee first page rankings?',
    answer: 'While we can't guarantee specific rankings due to search engines' ever-changing algorithms, we have a proven track record of significantly improving our clients' search visibility.',
  },
  {
    question: 'What's included in your SEO services?',
    answer: 'Our services include keyword research, on-page optimization, technical SEO, content strategy, link building, and regular performance reporting.',
  },
  {
    question: 'How do you measure SEO success?',
    answer: 'We track multiple metrics including organic traffic, keyword rankings, conversion rates, backlink quality, and ROI to measure the success of our SEO campaigns.',
  },
  {
    question: 'Can you help with local SEO?',
    answer: 'Yes, we offer specialized local SEO services to help businesses improve their visibility in local search results and Google Maps.',
  },
];

export default function SEOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/background.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Boost Your Search Rankings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            Drive more organic traffic and grow your business with our expert SEO services
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our SEO Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-300">
                  Professional {service.toLowerCase()} services to improve your search engine rankings and drive more traffic.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Analysis', 'Strategy', 'Implementation', 'Results'].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl">
                  <div className="text-blue-500 text-4xl font-bold mb-4">{index + 1}</div>
                  <h3 className="text-xl font-semibold mb-4">{step}</h3>
                  <p className="text-gray-300">
                    {`Step ${index + 1} of our proven SEO process to help your business grow.`}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-lg font-semibold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {openFaq === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-300"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl ${
                  plan.isPopular ? 'border-2 border-blue-500' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-8"
          >
            Ready to Improve Your Search Rankings?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-12 max-w-3xl mx-auto"
          >
            Join hundreds of businesses that have transformed their online presence with our SEO services
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Schedule a Free Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
} 