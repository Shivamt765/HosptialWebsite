'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';
import { HospitalData } from '@/types/hospital';

interface ContactProps {
  data: HospitalData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const contactItems = [
    {
      icon: Phone,
      title: 'Phone',
      value: data.contact.phone,
      href: `tel:${data.contact.phone}`,
      color: 'text-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: data.contact.email,
      href: `mailto:${data.contact.email}`,
      color: 'text-blue-500',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: data.contact.address,
      href: data.contact.mapLink,
      color: 'text-purple-500',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: data.contact.hours,
      href: '#',
      color: 'text-orange-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for appointments, emergencies, or any questions
            about our medical services. We're here to help 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 border border-gray-100 hover:border-gray-200"
                    >
                      <div className={`p-4 rounded-xl bg-white ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                          {item.value}
                        </p>
                      </div>
                      {item.href.startsWith('http') && (
                        <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                      )}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-2">Emergency Care</h4>
              <p className="mb-4">
                For life-threatening emergencies, call immediately or visit our emergency department.
              </p>
              <motion.a
                href={`tel:${data.contact.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Phone className="mr-2 w-4 h-4" />
                Call Emergency: {data.contact.phone}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">Interactive Map Location</p>
                <motion.a
                  href={data.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  View on Google Maps
                  <ExternalLink className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Appointment CTA */}
            <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Book an Appointment?
              </h3>
              <p className="text-emerald-100 mb-6">
                Schedule your visit with our expert medical team. We'll ensure you receive
                the best possible care at a convenient time for you.
              </p>
              <div className="space-y-4">
                <motion.a
                  href={data.appointmentUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-center hover:bg-gray-100 transition-colors duration-200"
                >
                  Book Online Appointment
                </motion.a>
                <motion.a
                  href={`tel:${data.contact.phone}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white hover:text-emerald-600 transition-all duration-200"
                >
                  Call to Book: {data.contact.phone}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;