import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/destinations/HeroSection';
import FeaturedDestinations from '@/components/destinations/FeaturedDestination';
import BestOfOne from '@/components/destinations/BestOfOne';
import Footer from '@/components/Footer';
import hotels from "@/data/BestOfOne.json"
import StaycationDeals from '@/components/destinations/StaycationDeals';
import WhyChooseUs from '@/components/destinations/WhyChooseUs';

const page = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturedDestinations />
            <BestOfOne city="New York" hotels={hotels}/>
            <WhyChooseUs />
            <StaycationDeals />
            <BestOfOne city="Singapore" hotels={hotels}/>
            <Footer />
        </div>
    );
}

export default page;
