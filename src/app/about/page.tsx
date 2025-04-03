'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    image: '/images/socialmedia3.jpg',
    bio: 'With over 15 years of experience in digital marketing, John leads our team with vision and expertise.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Strategy',
    image: '/images/Socialmedia2.jpeg',
    bio: 'Sarah brings innovative strategies and data-driven insights to every project.'
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    image: '/images/digital_head_image.webp',
    bio: 'Michael oversees our technical operations and ensures cutting-edge solutions for our clients.'
  }
];

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const handleGetInTouch = () => {
    router.push('/contact');
  };

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/socialmedia3.jpg"
            alt="Digital Marketing Background"
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/80 to-blue-900/80"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.8), rgba(30, 64, 175, 0.8))",
                "linear-gradient(to bottom right, rgba(30, 64, 175, 0.8), rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.8))",
                "linear-gradient(to bottom right, rgba(29, 78, 216, 0.8), rgba(30, 64, 175, 0.8), rgba(37, 99, 235, 0.8))"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              A Leading Digital Marketing Agency
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
            >
              Focused on Digital Transformation and Innovation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-semibold">Our Identity</span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-8 text-blue-600">Who We Are</h2>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              We are passionate about everything digital - marketing, branding, design & development, and creatives and videos. Our performance-driven team is focused on crafting innovative, measurable, and brand/business-specific digital strategies that help our clients gain a competitive advantage in the industry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Special Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-semibold">Our Strengths</span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-8 text-blue-600">What Makes Us Special?</h2>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed mb-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              Experience, Expertise, and an Excellent team fuel our growth and make us unique. Our passion for building long-lasting partnerships with our clients makes us a forerunner in digital marketing.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Analysing',
                  description: 'Robust analysis is the foundation of all outstanding digital campaigns. Our in-depth analysis includes business/brand analysis, target audience analysis, and goals and objectives analysis.',
                  icon: '🔍'
                },
                {
                  title: 'Designing',
                  description: 'Our design consultants design tailored websites that are the perfect digital representation of your business. Expect a visually attractive and highly customized website that your audiences love!',
                  icon: '🎨'
                },
                {
                  title: 'Developing',
                  description: 'Analyzing your website\'s overall look and feel, speed and performance optimization, A/B testing and other crucial technical aspects are all taken care of by our efficient developer team.',
                  icon: '💻'
                },
                {
                  title: 'Implementing',
                  description: 'Whether your website or digital campaigns, the implementation only takes place after incorporating your feedback and thoughts! Nothing gets done without your approval!',
                  icon: '🚀'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-semibold">Our Purpose</span>
            </motion.div>
            <h2 className="text-4xl font-bold mb-8 text-blue-600">Our Vision & Mission</h2>
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed mb-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              We envision becoming a leader in advancing businesses using digital mediums. Customer loyalty and satisfaction, openness, creativity, teamwork, and growth play an essential role in driving our mission. All this contributes to reflect who we are, how we work, and what we strive for.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-semibold">Our Principles</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-blue-600">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Honesty',
                description: 'We maintain transparency and integrity in all our dealings with clients and team members.',
                icon: '🤝'
              },
              {
                title: 'Result-Oriented',
                description: 'We focus on delivering measurable results and achieving business objectives.',
                icon: '🎯'
              },
              {
                title: 'Performance Seekers',
                description: 'We constantly strive for excellence and improvement in all aspects of our work.',
                icon: '⚡'
              },
              {
                title: 'Amiable & Reliable',
                description: 'We build strong relationships based on trust and reliability with our clients.',
                icon: '💎'
              },
              {
                title: 'Productive & Efficient',
                description: 'We optimize our processes to deliver high-quality results efficiently.',
                icon: '🚀'
              },
              {
                title: 'Thoughtful',
                description: 'We carefully consider every aspect of our work to ensure the best outcomes.',
                icon: '💡'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-semibold">Our People</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-blue-600">Meet Our Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="relative h-64 mb-6 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              y,
              opacity
            }}
          />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6"
            >
              <span className="text-white font-semibold">Get Started</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow with our digital marketing expertise.
            </p>
            <motion.button
              onClick={handleGetInTouch}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              Get in Touch
              <motion.svg
                className="ml-2 w-6 h-6 inline-block transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 