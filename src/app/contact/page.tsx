'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import WhatsAppButton from '../../components/WhatsAppButton';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Business Street, NY"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567"
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email Us",
      content: "contact@company.com"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      title: "WhatsApp",
      content: "+1 (555) 123-4567",
      onClick: () => window.open(`https://wa.me/15551234567`, '_blank'),
      className: "hover:bg-green-500/10"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black">
      {/* Animated gradient backgrounds */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
          animate={{
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"
          animate={{
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber="15551234567" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards including WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm
                hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300
                cursor-pointer ${item.className || ''}`}
              onClick={item.onClick}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <div className="text-blue-400">{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add WhatsApp section above the contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Connect on WhatsApp
            </h3>
            <p className="text-gray-400 mb-6">
              Get instant responses through WhatsApp. We typically reply within minutes!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(`https://wa.me/15551234567`, '_blank')}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-green-500 
                text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat with us on WhatsApp</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Form and Map Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm h-full">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05] 
                        text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 
                        focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05] 
                        text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 
                        focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05] 
                      text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 
                      focus:ring-1 focus:ring-blue-500/50 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05] 
                      text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 
                      focus:ring-1 focus:ring-blue-500/50 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white 
                    rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 
                    transition-all duration-300 flex items-center justify-center space-x-2
                    shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm h-full">
              <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Our Location
              </h3>
              <div className="rounded-lg overflow-hidden border border-white/[0.05] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986548727506!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1656543799166!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 