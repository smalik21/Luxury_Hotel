import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/explore/HeroSection';
import TopPickings from '@/components/explore/TopPickings';
import FeaturedHotels from '@/components/explore/FeaturedHotels';
import Yards from '@/components/explore/Yards';
import Find from '@/components/explore/Find';
import TopRatedHotels from '../../components/explore/TopRatedHotels';
import Footer from '../../components/Footer';

const page = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <TopPickings />
            <FeaturedHotels/>
            <Yards/>
            <Find/>
            <TopRatedHotels/>
            <Footer/>
        </div>
    );
}

export default page;
