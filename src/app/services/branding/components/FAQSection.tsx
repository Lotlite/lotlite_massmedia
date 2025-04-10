'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: "How long does the branding process typically take?",
    answer: "The branding process typically takes 4-8 weeks, depending on the scope of work. This includes discovery, strategy, design, and refinement phases. We ensure thorough attention to detail while maintaining efficient timelines."
  },
  {
    question: "What's included in your branding packages?",
    answer: "Our branding packages include logo design, brand guidelines, color palette, typography, and basic marketing collateral. Premium packages may include website design, social media assets, and ongoing brand support."
  },
  {
    question: "Do you provide ongoing brand support?",
    answer: "Yes, we offer ongoing brand support through our maintenance packages. This includes brand asset updates, style guide maintenance, and consultation for brand evolution as your business grows."
  },
  {
    question: "How do you ensure brand consistency?",
    answer: "We create comprehensive brand guidelines that cover all aspects of your brand identity. This includes detailed specifications for logo usage, color codes, typography, and design elements to maintain consistency across all touchpoints."
  },
  {
    question: "Do you specialize in any particular industry?",
    answer: "While we work across various industries, we have extensive experience in technology, healthcare, retail, and professional services. Our diverse portfolio allows us to bring fresh perspectives to any sector."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                scale: 1.01
              }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 