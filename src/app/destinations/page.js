import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/destinations/HeroSection';
import FeaturedDestinations from '@/components/destinations/FeaturedDestination';
import BestOfOne from '@/components/destinations/BestOfOne';
import Footer from '@/components/Footer';
import hotel1 from "@/data/BestOfOne.json"
import hotel2 from "@/data/BestOfTwo.json"
import StaycationDeals from '@/components/destinations/StaycationDeals';
import WhyChooseUs from '@/components/destinations/WhyChooseUs';

const page = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturedDestinations />
            <BestOfOne city="Argentina" hotels={hotel1}/>
            <WhyChooseUs />
            <StaycationDeals />
            <BestOfOne city="Brazil" hotels={hotel2}/>
            <Footer />
        </div>
    );
}

export default page;
