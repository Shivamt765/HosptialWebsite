'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HospitalData } from '@/types/hospital';

interface DoctorsProps {
  data: HospitalData;
}

const Doctors: React.FC<DoctorsProps> = ({ data }) => {
  return (
    <section id="doctors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of highly experienced and compassionate specialists are here to provide you with the best medical care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.doctors?.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-6">
                <Image
                  src={doctor.photo}
                  alt={doctor.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{doctor.name}</h3>
              <p className="text-emerald-600 font-medium mt-1">{doctor.specialization}</p>
              <p className="text-gray-600 mt-4">{doctor.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
