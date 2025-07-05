'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { HospitalData } from '@/types/hospital';

interface FooterProps {
  data: HospitalData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: Facebook, href: data.social.facebook, name: 'Facebook' },
    { icon: Twitter, href: data.social.twitter, name: 'Twitter' },
    { icon: Instagram, href: data.social.instagram, name: 'Instagram' },
    { icon: Linkedin, href: data.social.linkedin, name: 'LinkedIn' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = data.services.slice(0, 6);

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hospital Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{data.logo}</div>
                <div>
                  <h3 className="text-2xl font-bold">{data.name}</h3>
                  <p className="text-gray-400 text-sm">{data.tagline}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {data.description.substring(0, 150)}...
              </p>
              <motion.a
                href={data.appointmentUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                Book Appointment
              </motion.a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <motion.a
                      href={data.appointmentUrl}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 block"
                    >
                      {service.title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <a
                    href={`tel:${data.contact.phone}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {data.contact.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {data.contact.email}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <a
                    href={data.contact.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {data.contact.address}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6">
                <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialIcons.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500 transition-all duration-200"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400">
                  © 2025 {data.name}. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Made with ❤️ by{' '}
                  <a
                    href="#"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    NextGen Scale
                  </a>
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Medical Disclaimer
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;