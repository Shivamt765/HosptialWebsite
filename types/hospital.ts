export interface HospitalData {
  name: string;
  tagline: string;
  description: string;
  appointmentUrl: string;
  logo: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  services: Service[];
  ratings: {
    stars: number;
    totalReviews: number;
    googleReviewLink: string;
    testimonials: Testimonial[];
  };
  trustStats: {
    yearsOfExperience: number;
    happyPatients: number;
    expertDoctors: number;
    successRate: number;
  };
  whyChooseUs: WhyChooseUsItem[];
  contact: {
    phone: string;
    email: string;
    address: string;
    mapLink: string;
    hours: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
}