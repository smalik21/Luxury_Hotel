import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import Features from '@/components/home/FeatureSection';
import Map from '@/components/home/Map'
//import Experts from '@/components/home/Experts'
import BestChoice from '@/components/home/BestChoice'
//import Reviews from '@/components/home/Reviews'
import Footer from '@/components/Footer'
import Fixed from '@/components/home/Fixed';
import Virtual from '@/components/home/Virtual';

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Features />
            <Map />
            <BestChoice />
            <Virtual/>
            <Footer />
            
        </div>
    )
}

export default Home;