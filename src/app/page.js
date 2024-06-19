import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/FeatureSection';

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Features />
    </div>
  )
}

export default page