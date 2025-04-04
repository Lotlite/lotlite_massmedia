'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    title: "Logo & Identity Design",
    description: "Crafting memorable logos and brand guidelines that represent your business perfectly.",
    backDescription: "Our logo design process includes market research, competitor analysis, and multiple iterations to create a unique and memorable brand identity.",
    backFeatures: [
      "Custom logo design",
      "Brand style guide",
      "Color palette selection",
      "Typography system",
      "Brand asset kit"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Website & UI/UX Design",
    description: "Creating engaging digital experiences that convert visitors into customers.",
    backDescription: "We focus on user-centered design principles, creating intuitive interfaces that enhance user engagement and drive conversions.",
    backFeatures: [
      "Responsive design",
      "User interface design",
      "User experience mapping",
      "Interactive prototypes",
      "Mobile-first approach"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Brand Strategy & Positioning",
    description: "Defining your brand's personality and voice to stand out in the market.",
    backDescription: "We develop comprehensive brand strategies that align with your business goals and resonate with your target audience.",
    backFeatures: [
      "Market analysis",
      "Brand positioning",
      "Target audience research",
      "Competitor analysis",
      "Brand voice guidelines"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Marketing Collateral",
    description: "Designing brochures, social media graphics, and ads that capture attention.",
    backDescription: "Our marketing collateral designs are crafted to maintain brand consistency while engaging your audience across all channels.",
    backFeatures: [
      "Social media graphics",
      "Print brochures",
      "Digital ads",
      "Email templates",
      "Marketing presentations"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Packaging Design",
    description: "Creating unique product packaging that stands out on the shelves.",
    backDescription: "We design packaging that not only looks great but also protects your product and enhances the unboxing experience.",
    backFeatures: [
      "Product packaging",
      "Box design",
      "Label design",
      "Sustainable materials",
      "Custom finishes"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Brand Experience Design",
    description: "Creating immersive brand experiences that leave lasting impressions.",
    backDescription: "We design comprehensive brand experiences that connect with customers at every touchpoint, from digital to physical spaces.",
    backFeatures: [
      "Event branding",
      "Store design",
      "Digital experiences",
      "Brand activations",
      "Customer journey mapping"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-600",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/brandingpagebackground.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Branding & Design Services
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative h-[250px] group"
              style={{
                perspective: "1000px",
              }}
            >
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out
                  ${hoveredIndex === index ? '[transform:rotateY(180deg)]' : ''}
                `}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front of card */}
                <div 
                  className={`absolute inset-0 w-full h-full p-6 rounded-xl shadow-lg
                    ${hoveredIndex === index ? 'bg-gradient-to-br ' + service.color + ' transform -translate-y-2' : 'bg-gradient-to-br ' + service.color + ' hover:shadow-xl'}
                  `}
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)"
                  }}
                >
                  <motion.div 
                    className={`${hoveredIndex === index ? 'text-white' : 'text-white'} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 
                    className={`text-lg font-bold mb-2 ${hoveredIndex === index ? 'text-white' : 'text-white'}`}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className={hoveredIndex === index ? 'text-white/90 text-sm' : 'text-white/80 text-sm'}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Back of card */}
                <div 
                  className={`absolute inset-0 w-full h-full p-6 rounded-xl shadow-lg flex items-center justify-center
                    ${hoveredIndex === index ? 'bg-gradient-to-br ' + service.color + ' transform -translate-y-2' : 'bg-gradient-to-br ' + service.color}
                  `}
                  style={{ 
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="text-center">
                    <p className="text-black font-medium mb-4 text-sm">
                      {service.backDescription}
                    </p>
                    <div className="space-y-1.5">
                      {service.backFeatures.map((feature, idx) => (
                        <div key={idx} className="text-black/90 flex items-center justify-center text-sm">
                          <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="text-black/80 text-xs mt-4">
                      Hover to flip back
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 