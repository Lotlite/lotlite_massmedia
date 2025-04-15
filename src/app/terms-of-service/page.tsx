'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using our services, you accept and agree to be bound by these Terms of Service',
      'If you do not agree to these terms, please do not use our services',
      'We reserve the right to modify these terms at any time',
    ],
  },
  {
    title: 'Use of Services',
    content: [
      'You must be at least 18 years old to use our services',
      'You agree to provide accurate and complete information when using our services',
      'You are responsible for maintaining the confidentiality of your account information',
      'You agree not to use our services for any illegal or unauthorized purpose',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content and materials available on our services are protected by intellectual property rights',
      'You may not use, reproduce, or distribute our content without our express written permission',
      'Any unauthorized use of our content may violate copyright, trademark, and other laws',
    ],
  },
  {
    title: 'User Content',
    content: [
      'You retain ownership of any content you submit to our services',
      'By submitting content, you grant us a license to use, modify, and distribute it',
      'You are responsible for ensuring your content does not violate any laws or rights',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'Our services are provided "as is" without warranties of any kind',
      'We are not liable for any indirect, incidental, or consequential damages',
      'We do not guarantee that our services will be uninterrupted or error-free',
    ],
  },
  {
    title: 'Termination',
    content: [
      'We may terminate or suspend your access to our services at any time',
      'We may remove or modify any content at our discretion',
      'You may terminate your use of our services at any time',
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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: April 8, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Please read these Terms of Service carefully before using our services. These terms govern your use of our website and services.
            </p>

            {sections.map((section, index) => (
              <div key={section.title} className="mb-12">
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
              </div>
            ))}

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  Email: contact@lotlitefintech.com
                </p>
                <p className="text-gray-600">
                  Address: 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 mb-4">
              By using our services, you agree to these Terms of Service.
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                href="/privacy-policy"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                Privacy Policy
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