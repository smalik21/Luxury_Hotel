import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/explore/HeroSection';
import FeaturedHotels from '@/components/explore/FeaturedHotels';

const page = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <FeaturedHotels/>
        </div>
    );
}

export default page;
