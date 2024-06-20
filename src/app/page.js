import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/FeatureSection';
import Map from '../components/Map'
import Experts from '../components/Experts'
import BestChoice from '../components/BestChoice'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Map />
      <BestChoice />
      <Experts />
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home;