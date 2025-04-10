'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Why Branding Matters</h2>
          <p className="text-gray-600">
            A strong brand is more than just a logo. It's the complete experience your customers have with your business.
            We help you create a brand that resonates with your audience and stands out in the market.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Build Trust", description: "A consistent brand builds credibility and trust with your audience." },
            { title: "Stand Out", description: "Differentiate your business from competitors with a unique brand identity." },
            { title: "Drive Growth", description: "A strong brand leads to increased recognition and customer loyalty." }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 