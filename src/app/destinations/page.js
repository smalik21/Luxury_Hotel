import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/destinations/HeroSection';
import FeaturedDestinations from '@/components/destinations/FeaturedDestination';
import BestOfOne from '@/components/destinations/BestOfOne';

const page = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturedDestinations />
            <BestOfOne/>
        </div>
    );
}

export default page;
