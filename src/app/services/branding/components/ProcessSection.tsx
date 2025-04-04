'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your business, audience, and goals.",
  },
  {
    title: "Strategy",
    description: "Defining brand voice, messaging, and style.",
  },
  {
    title: "Design & Development",
    description: "Creating visuals, logos, and website UI/UX.",
  },
  {
    title: "Testing & Refinement",
    description: "Gathering feedback and making improvements.",
  },
  {
    title: "Launch & Support",
    description: "Delivering assets and ensuring smooth implementation.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="flex items-start mb-8"
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 