'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  return (
    <main className="flex min-h-screen flex-col relative bg-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative pt-24 pb-16 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Get in touch with us. We're here to help and answer any questions you might have.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Our Location</h3>
                    <p className="text-gray-400">123 Business Street,<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone Number</h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Address</h3>
                    <p className="text-gray-400">contact@yourcompany.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25986548727506!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1656543799166!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="text-sm text-gray-300">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                    placeholder="John"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                  <label className="text-sm text-gray-300">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                    placeholder="Doe"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label className="text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label className="text-sm text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
                  placeholder="+1 (555) 123-4567"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
                <label className="text-sm text-gray-300">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 resize-none"
                  placeholder="How can we help you?"
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage; 