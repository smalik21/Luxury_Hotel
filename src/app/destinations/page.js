import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/destinations/HeroSection';
import FeaturedDestinations from '@/components/destinations/FeaturedDestination';

const page = () => {
    return (
        <div>
            <Header />
            <Hero />
            <FeaturedDestinations />
        </div>
    );
}

export default page;
