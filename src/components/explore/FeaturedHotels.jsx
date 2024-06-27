"use client";
import Link  from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const hotels = [
  {
    id: 1,
    name: "Arakur Ushuaia Resort & Spa",
    location: "Ushuaia, Argentina",
    price: "200$ / night",
    images: [
      "./Explore/Rectangle 5037.png",
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5042.png",
    ]
  },
  {
    id: 2,
    name: "Faena Hotel Buenos Aires",
    price: "215$",
    images: [
      "./Explore/Rectangle 5042.png",
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5037.png",
    ]
  },
  {
    id: 3,
    name: "Gran Melia Iguazu",
    price: "205$",
    images: [
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5041.png",
      "./Explore/Rectangle 5040.png",
    ]
  },
  {
    id: 4,
    name: "Palacio Duhau - Park Hyatt Buenos Aires",
    price: "250$",
    images: [
      "./Explore/Rectangle 5042.png",
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5040.png",
    ]
  },
  {
    id: 5,
    name: "Llao Llao Resort, Golf & Spa",
    price: "298$",
    images: [
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5037.png",
      "./Explore/Rectangle 5038.png",
    ]
  },
];

const FeaturedHotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
  };

  const getVisibleImages = () => {
    const hotel = hotels[currentIndex];
    return hotel.images.map((image, index) => (
      <img 
        key={index} 
        src={image} 
        alt={`Featured hotel image ${index + 1}`} 
        loading="lazy" 
        className={`w-full h-64 sm:h-72 md:h-90 lg:h-100 hover:scale-105 object-cover rounded-md transition-transform duration-500 ease-in-out ${index === 0 ? 'block' : 'hidden'} sm:block`} 
      />
    ));
  };

  return (
    <div className="w-full p-4 mt-14 mb-[7rem]">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl text-black font-bold mb-2">Luxury Hubs of the World</h1>
            <p className="text-black text-sm">50+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous" onClick={handlePrevClick}>
              <div className="bg-white text-black border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <MdKeyboardArrowLeft />
              </div>
            </button>
            <button aria-label="Next" onClick={handleNextClick}>
              <div className="bg-black text-white border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <MdKeyboardArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="relative transition-transform duration-500 ease-in-out">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {getVisibleImages()}
          </div>
        </div>
        <div className="mt-[2rem] m-4 sm:mx-[23rem]  md:mx-[35rem] flex flex-col sm:flex-row  items-center sm:p-2 md:p-3 p-1 md:w-[50%] justify-between gap-3 w-[90%] sm:w-auto bg-white rounded-md top-[85%] left-[5%] sm:top-[70%] sm:left-[50%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 shadow-xl">
          <div className=" justify-center text-center sm:text-left p-0">
            <h3 className="text-lg sm:text-xl font-medium text-black">{hotels[currentIndex].name}</h3>
            
          </div>
          <Link href="/contact"><button className="px-2 py-1 mx-2 my-2 sm:mt-0 text-black border border-black">Start Booking</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
