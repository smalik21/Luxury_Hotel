import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/explore/HeroSection';
import TopPickings from '@/components/explore/TopPickings';
import FeaturedHotels from '@/components/explore/FeaturedHotels';
import Yards from '@/components/explore/Yards';
import Find from '@/components/explore/Find';
import TopRatedHotels from '../../components/explore/TopRatedHotels';
import Footer from '../../components/Footer';
import Offers from '@/components/explore/Offers';

const page = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <FeaturedHotels/>
            <TopPickings />
            <Yards/>
            <Find/>
            <TopRatedHotels/>
            <Offers/>
            <Footer/>
        </div>
    );
}

export default page;
