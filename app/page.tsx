'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import hospitalData from '@/data/hospitalData.json';
import { HospitalData } from '@/types/hospital';
import Doctors from '@/components/Doctors'; 
export default function Home() {
  const data = hospitalData as HospitalData;

  return (
    <div className="min-h-screen">
      <Navbar data={data} />
      <Hero data={data} />
      <About data={data} />
      <Services data={data} />
      <Doctors data={hospitalData} />
      <WhyChooseUs data={data} />
      <Reviews data={data} />
      <Contact data={data} />
      <Footer data={data} />
    </div>
  );
}