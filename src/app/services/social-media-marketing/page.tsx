'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const SocialMediaProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Brand Analysis",
      description:
        "We first understand your brand's vision, values, and goals. Then we conduct research on the target market, competitors, and industry trends to develop a strategy.",
      textColor: "text-red-600",
    },
    {
      number: "2",
      title: "Personalized Content Calendar",
      description:
        "Based on your brand analysis, we create a customized content calendar that aligns with your marketing objectives and budget.",
      textColor: "text-blue-600",
    },
    {
      number: "3",
      title: "Creative Thinking",
      description:
        "Our creative thinking experts visualize designs that are eye-catching and user-friendly, complementing your content and enhancing your brand image.",
      textColor: "text-red-600",
    },
    {
      number: "4",
      title: "Reach Potential Customers",
      description:
        "We leverage the power of social media marketing and other strategies to reach your ideal customers and drive traffic to your website.",
      textColor: "text-blue-600",
    },
    {
      number: "5",
      title: "Generate Quality Leads",
      description:
        "We help you convert your visitors into leads by offering them valuable and relevant content that solves their problems and addresses their needs.",
      textColor: "text-red-600",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col justify-start w-full lg:w-[55%] space-y-3"
    >
      <h2 className="text-3xl font-bold text-blue-600">
        Our<span className="text-red-600"> Social Media Marketing </span>Process Which Drives Growth For Your Business!
      </h2>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="grid grid-cols-[2%,96%] items-start gap-4 3xl:gap-6 justify-evenly"
        >
          <span className={`text-lg sm:text-xl lg:text-3xl font-bold ${step.textColor}`}>{step.number}</span>
          <div className="space-y-2">
            <h3 className={`text-xl font-bold ${step.textColor}`}>{step.title}</h3>
            <p className="text-blue-600 font-medium">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const SocialMediaMarketingPage = () => {
  const steps = [
    {
      number: "1",
      title: "Brand Analysis",
      description:
        "We first understand your brand's vision, values, and goals. Then we conduct research on the target market, competitors, and industry trends to develop a strategy.",
      textColor: "text-red-600",
    },
    {
      number: "2",
      title: "Personalized Content Calendar",
      description:
        "Based on your brand analysis, we create a customized content calendar that aligns with your marketing objectives and budget.",
      textColor: "text-blue-600",
    },
    {
      number: "3",
      title: "Creative Thinking",
      description:
        "Our creative thinking experts visualize designs that are eye-catching and user-friendly, complementing your content and enhancing your brand image.",
      textColor: "text-red-600",
    },
    {
      number: "4",
      title: "Reach Potential Customers",
      description:
        "We leverage the power of social media marketing and other strategies to reach your ideal customers and drive traffic to your website.",
      textColor: "text-blue-600",
    },
    {
      number: "5",
      title: "Generate Quality Leads",
      description:
        "We help you convert your visitors into leads by offering them valuable and relevant content that solves their problems and addresses their needs.",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%' }}
          >
            <source src="/images/blog3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="p-8"
            >
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Transform Your Social Media Presence</h2>
              <p className="mb-6 text-black font-semibold">
                In today's digital age, social media has become an essential part of any successful marketing strategy. Our social media marketing services help you build a strong online presence, engage with your audience, and drive meaningful results for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black font-semibold">Strategic social media planning and execution</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black font-semibold">Engaging content creation and curation</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black font-semibold">Community management and engagement</p>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black font-semibold">Social media advertising and promotion</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-[400px]"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ 
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/images/socialmedia3.jpg"
                  alt="Social Media Marketing"
                  fill
                  className="object-cover"
                  priority
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 mt-8 lg:mt-12"
            >
              <motion.div 
                className="relative h-[500px] lg:h-[600px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/socialmedia.png"
                  alt="Social Media Marketing Process"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Process Content */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-start w-full space-y-6"
              >
                <h2 className="text-3xl font-bold text-blue-600">
                  Our<span className="text-red-600"> Social Media Marketing </span>Process Which Drives Growth For Your Business!
                </h2>
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="grid grid-cols-[8%,92%] items-start gap-2"
                  >
                    <span className={`text-2xl font-extrabold ${step.textColor}`}>{step.number}</span>
                    <div className="space-y-2">
                      <h3 className={`text-xl font-extrabold ${step.textColor}`}>{step.title}</h3>
                      <p className="text-black font-semibold">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent"
          >
            Our Social Media Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.1 }
                }}
                className="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-all duration-100 border border-blue-100 relative overflow-hidden group"
              >
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="text-white"
                      whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
                    >
                      {service.icon}
                    </motion.div>
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-700 font-medium group-hover:text-white/90 transition-colors duration-300"
                    whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/Socialmedia2.jpeg"
            alt="Social Media Marketing Background"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            onError={(e) => {
              console.error('Error loading image:', e);
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Grow Your Social Media Presence?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a customized social media strategy for your business
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                Contact Us Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Strategy Development",
    description: "Custom social media strategies tailored to your business goals and target audience.",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-600"
  },
  {
    title: "Content Creation",
    description: "Engaging content that resonates with your audience and drives meaningful interactions.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    gradient: "from-purple-500 to-purple-600"
  },
  {
    title: "Community Management",
    description: "Active engagement with your followers to build strong relationships and brand loyalty.",
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: "from-green-500 to-green-600"
  },
  {
    title: "Paid Advertising",
    description: "Targeted social media advertising campaigns to reach your ideal customers.",
    icon: (
      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    gradient: "from-red-500 to-red-600"
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed insights and reports to track performance and optimize your strategy.",
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    gradient: "from-orange-500 to-orange-600"
  },
  {
    title: "Brand Building",
    description: "Consistent brand messaging and visual identity across all social platforms.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: "from-indigo-500 to-indigo-600"
  }
];

export default SocialMediaMarketingPage; 