"use client";

import React, { useState } from 'react';
import { PiLessThanBold, PiGreaterThanBold } from "react-icons/pi";

const hotels = [
  {
    id: 1,
    name: "Blue origin Farms",
    location: "Jarata, Indonesia",
    price: "94$ / night",
    images: [
      "./Explore/Rectangle 5037.png",
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5042.png",
      "./Explore/Rectangle 5041.png",
      "./Explore/Rectangle 5038.png",
      "./Explore/Rectangle 5040.png"
    ]
  },
  {
    id: 2,
    name: "Red origin Farms",
    price: "95$",
    images: [
      "./Explore/Rectangle 5042.png",
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5037.png",
      "./Explore/Rectangle 5040.png",
      "./Explore/Rectangle 5038.png",
      "./Explore/Rectangle 5041.png",
    ]
  },
  {
    id: 3,
    name: "Green origin Farms",
    price: "96$",
    images: [
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5041.png",
      "./Explore/Rectangle 5040.png",
      "./Explore/Rectangle 5037.png",
      "./Explore/Rectangle 5038.png",
      "./Explore/Rectangle 5042.png",
    ]
  },
  {
    id: 4,
    name: "Black origin Farms",
    price: "97$",
    images: [
      "./Explore/Rectangle 5042.png",
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5040.png",
      "./Explore/Rectangle 5038.png",
      "./Explore/Rectangle 5037.png",
      "./Explore/Rectangle 5041.png",
    ]
  },
  {
    id: 5,
    name: "Gray origin Farms",
    price: "98$",
    images: [
      "./Explore/Rectangle 5039.png",
      "./Explore/Rectangle 5037.png",
      "./Explore/Rectangle 5038.png",
      "./Explore/Rectangle 5041.png",
      "./Explore/Rectangle 5042.png",
      "./Explore/Rectangle 5040.png"
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
      <img key={index} src={image} alt={`Featured hotel ${index + 1}`} className="w-full h-64 sm:h-72 md:h-80 lg:h-96 hover:scale-105 object-cover rounded-md transition-transform duration-500 ease-in-out" />
    ));
  };

  return (
    <div className="w-full p-4 mt-14">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl text-black font-bold mb-2">Featured Hotels</h1>
            <p className="text-black text-sm">2000+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous" onClick={handlePrevClick}>
              <div className="bg-white text-black border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <PiLessThanBold />
              </div>
            </button>
            <button aria-label="Next" onClick={handleNextClick}>
              <div className="bg-black text-white border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <PiGreaterThanBold />
              </div>
            </button>
          </div>
        </div>
        <div className="relative transition-transform duration-500 ease-in-out">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {getVisibleImages()}
          </div>
          <div className="absolute flex flex-col sm:flex-row items-center  md:p-4 md:w-[50%]   justify-between gap-3  w-[90%] sm:w-auto  sm:p-0 bg-white rounded-md top-[85%] left-[5%] sm:top-[70%] sm:left-[50%] sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 shadow-lg">
            <div className="flex flex-col justify-center  text-center sm:text-left p-3 sm:p-0">
              <h3 className="text-lg sm:text-xl font-medium text-black">{hotels[currentIndex].name}</h3>
              <p className="text-sm sm:text-md text-[#00000099]">starts at {hotels[currentIndex].price}</p>
            </div>
            <button className="px-3 py-2 mx-2 my-2  sm:mt-0 text-black border border-black">Start Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;
