import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/explore/HeroSection';
import TopPickings from '@/components/explore/TopPickings';
import FeaturedHotels from '@/components/explore/FeaturedHotels';
import Yards from '@/components/explore/Yards';
import Find from '@/components/explore/Find';

const page = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <FeaturedHotels/>
            <TopPickings />
            <Yards/>
            <Find/>
        </div>
    );
}

export default page;
