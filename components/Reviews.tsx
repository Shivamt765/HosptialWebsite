'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { HospitalData } from '@/types/hospital';

interface ReviewsProps {
  data: HospitalData;
}

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
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
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read authentic reviews from our patients and their families about their
            experience with our medical care and services.
          </p>
        </motion.div>

        {/* Google Rating Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 text-center">
            <div className="mb-4">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {data.ratings.stars}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.floor(data.ratings.stars))}
              </div>
              <p className="text-gray-600">
                Based on {data.ratings.totalReviews.toLocaleString()} Google reviews
              </p>
            </div>
            <motion.a
              href={data.ratings.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View on Google
              <ExternalLink className="ml-2 w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.ratings.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-emerald-200">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.review}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">Verified Patient</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience Quality Healthcare
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied patients who trust us with their health.
            </p>
            <motion.a
              href={data.appointmentUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Book Your Appointment
              <Star className="ml-2 w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;