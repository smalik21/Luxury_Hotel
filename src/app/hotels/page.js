"use client"
import Header from '@/components/Header'
import Hero from '@/components/hotel/HeroSection'
import Search from '@/components/hotel/Search'
import React, { useState } from 'react'
import HotelData from './data.json'
import HotelCard from '@/components/hotel/HotelCard'
import Footer from '@/components/Footer'

const Page = () => {
  const [visibleCards, setVisibleCards] = useState(5);
  
  const showMoreCards = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 5);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Search />
      <div className="flex flex-col gap-4 p-4">
        {HotelData.slice(0, visibleCards).map((data, i) => (
          <HotelCard key={i} data={data} />
        ))}
        {visibleCards < HotelData.length && (
          <button 
            className="text-center text-xl text-black font-normal  py-2 rounded-md " 
            onClick={showMoreCards}
          >
            See More
          </button>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Page;
