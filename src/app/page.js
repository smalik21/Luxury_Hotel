import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/FeatureSection';
import Map from '../components/Map'
import Experts from '../components/Experts'
import BestChoice from '../components/BestChoice'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Map />
      <BestChoice />
      <Experts />

    </div>
  )
}

export default Home