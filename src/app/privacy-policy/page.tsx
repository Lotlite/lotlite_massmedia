'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal information (name, email, phone number) provided when you contact us or use our services',
      'Usage data including how you interact with our website and services',
      'Device information such as IP address, browser type, and operating system',
      'Cookies and similar tracking technologies to enhance your experience',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To provide and maintain our services',
      'To communicate with you about our services and updates',
      'To improve and personalize your experience',
      'To analyze usage patterns and optimize our website',
      'To comply with legal obligations',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate security measures to protect your personal information',
      'Regular security assessments and updates to our systems',
      'Encryption of sensitive data',
      'Limited access to personal information to authorized personnel only',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'Access your personal information',
      'Request correction of inaccurate data',
      'Request deletion of your data',
      'Opt-out of marketing communications',
      'Withdraw consent for data processing',
    ],
  },
  {
    title: 'Third-Party Services',
    content: [
      'We may use third-party services that collect, monitor, and analyze data',
      'These services have their own privacy policies',
      'We are not responsible for the practices of third-party services',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this privacy policy from time to time',
      'We will notify you of any changes by posting the new policy on this page',
      'Changes are effective immediately upon posting',
    ],
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

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: April 8, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At our company, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
              </p>
            </motion.div>

            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-emerald-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  Email: contact@lotlitefintech.com
                </p>
                <p className="text-gray-600">
                  Address: 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 mb-4">
              By using our services, you agree to the terms of this Privacy Policy.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="/terms-of-service"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 