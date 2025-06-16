
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import PlansSection from '../components/PlansSection';
import StoreSection from '../components/StoreSection';
import ImpactSection from '../components/ImpactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <HeroSection />
      <HowItWorks />
      <PlansSection />
      <StoreSection />
      <ImpactSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
