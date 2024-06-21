import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/explore/HeroSection';
import TopPickings from '@/components/explore/TopPickings';

const page = () => {
    return (
        <div>
            <Header/>
            <Hero />
            <TopPickings />
        </div>
    );
}

export default page;
