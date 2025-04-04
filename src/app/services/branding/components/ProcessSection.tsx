'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your business, audience and goals",
    color: "bg-emerald-500",
    circleColor: "bg-indigo-500",
  },
  {
    title: "Strategy",
    description: "Defining brand voice, messaging, and style",
    color: "bg-amber-400",
    circleColor: "bg-orange-400",
  },
  {
    title: "Design & Development",
    description: "Creating visuals, logos, and website UI/UX",
    color: "bg-red-400",
    circleColor: "bg-red-500",
  },
  {
    title: "Testing & Refinement",
    description: "Gathering feedback and making improvements",
    color: "bg-cyan-500",
    circleColor: "bg-cyan-500",
  },
  {
    title: "Launch & Support",
    description: "Delivering assets and ensuring smooth implementation",
    color: "bg-purple-500",
    circleColor: "bg-purple-500",
  },
];

const Arrow = () => (
  <div className="flex-shrink-0 w-16 h-4 flex items-center justify-center mx-2">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.5 }}
      className="h-0.5 bg-blue-900 relative"
    >
      <div className="absolute -right-1 -top-1 w-2 h-2 border-t-2 border-r-2 border-blue-900 rotate-45" />
    </motion.div>
  </div>
);

export default function ProcessSection() {
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
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          OUR PROCESS
        </motion.h2>

        {/* Process Flow */}
        <div className="max-w-7xl mx-auto">
          {/* Numbers with arrows */}
          <div className="flex justify-center items-center mb-8">
            {processSteps.map((step, index) => (
              <div key={`circle-${index}`} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-14 h-14 ${step.circleColor} rounded-full flex items-center justify-center text-2xl text-white font-bold`}
                >
                  {index + 1}
                </motion.div>
                {index < processSteps.length - 1 && <Arrow />}
              </div>
            ))}
          </div>

          {/* Boxes */}
          <div className="flex justify-center items-start space-x-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={`box-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1"
              >
                <div className={`${step.color} text-white p-4 rounded-lg mb-4 text-center min-h-[80px] flex items-center justify-center`}>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
                <p className="text-white text-center text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 