import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/explore/HeroSection';
import TopPickings from '@/components/explore/TopPickings';
import FeaturedHotels from '@/components/explore/FeaturedHotels';

const page = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <TopPickings />
            <FeaturedHotels/>
        </div>
    );
}

export default page;
