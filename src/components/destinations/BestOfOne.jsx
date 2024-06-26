"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';


const BestOfOne = ({ city, hotels }) => {
  const [numVisibleCards, setNumVisibleCards] = useState(3);

  const updateNumVisibleCards = () => {
    if (window.innerWidth < 640) {
      setNumVisibleCards(1);
    } else if (window.innerWidth < 1024) {
      setNumVisibleCards(2);
    } else {
      setNumVisibleCards(3);
    }
  };

  useEffect(() => {
    updateNumVisibleCards();
    window.addEventListener('resize', updateNumVisibleCards);
    return () => window.removeEventListener('resize', updateNumVisibleCards);
  }, []);

  return (
    <div className="max-w-5xl sm:mx-auto mx-6 p-4 pb-14 pt-[80px] relative">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="md:text-4xl text-2xl font-bold">Best Of {city}</h2>
          <p className="md:text-lg text-md">2000+ hotels</p>
        </div>
        <div className="flex space-x-2">
          <Link href={`/hotels?search=${city}`}>See all</Link>
        </div>
      </div>
      <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'sm:grid-cols-2' : ''} ${numVisibleCards > 2 ? 'lg:grid-cols-3' : ''} gap-6 transition-transform duration-400 ease-in-out`}>
        {hotels.slice(0, numVisibleCards).map((item) => (
          <div key={item.id} className="bg-white rounded-xl h-[30rem] border border-gray-400 items-center transform transition-transform duration-400 ease-in-out hover:scale-105 cursor-pointer">
            <img src={item.image} alt={item.name} className="w-full h-[270px] rounded-t-lg mr-4" />
            <div className="p-4">
              <p className="text-xs text-gray-400">{item.place}</p>
              <h3 className="text-md font-bold pt-2">{item.name}</h3>
              <div className="flex text-sm text-gray-500 mt-3 gap-1">
                <p>{item.rating}</p>
                <p>({item.people})</p>
              </div>
              <div className="mt-6">
                <hr />
              </div>
              <div className="flex justify-between text-md pt-3">
                <p>{item.days} days</p>
                <p>From ${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfOne;
