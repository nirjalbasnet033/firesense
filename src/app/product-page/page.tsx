'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import SensitivityShowcase from './components/SensitivityShowcase';
import FeaturesBento from './components/FeaturesBento';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProductPage() {
  useScrollReveal();

  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <SensitivityShowcase />
      <FeaturesBento />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}