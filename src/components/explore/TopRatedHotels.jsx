"use client";

import React, { useState } from 'react';
import { PiLessThanBold, PiGreaterThanBold } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const hotels = [
  {
    id: 1,
    name: "Dubai International Airport Hotel",
    location: "Dubai International Airport Terminal 03",
    rating: 4,
    description: "Situated in upper midtown Manhattan, 483 metres from the Central Park, the Whitby Hotel is a short distance away from stores such as Saks Fifth Avenue and Bergdorf Goodman. The Whitby Hotel offers complimentary WiFi to all guests.",
    features: [
      "Front Desk",
      "Free Wi-Fi in all rooms",
      "Swimming pool - indoor",
      "Check-in/out - express"
    ],
    image: "./top-hotel.jpeg",
    img1: "y1.png",
    img2: "y2.png",
    img3: "y3.png",
    img4: "y4.png",
  },
  {
    id: 2,
    name: "New York Grand Hotel",
    location: "New York, USA",
    rating: 5,
    description: "Luxury hotel located in the heart of New York City, offering stunning views of Central Park and impeccable service. Ideal for business and leisure travelers alike.",
    features: [
      "24-hour room service",
      "Fitness center",
      "Spa facilities",
      "Business center"
    ],
    image: "./top-hotel.jpeg",
    img1: "y1.png",
    img2: "y2.png",
    img3: "y3.png",
    img4: "y4.png",
  },
  {
    id: 3,
    name: "London Skyline Resort",
    location: "London, UK",
    rating: 4,
    description: "Experience the charm of London with a stay at our resort, offering luxurious rooms, fine dining, and easy access to iconic landmarks like the Big Ben and Buckingham Palace.",
    features: [
      "Rooftop bar",
      "Concierge service",
      "Event spaces",
      "Valet parking"
    ],
    image: "./top-hotel.jpeg",
    img1: "y5.png",
    img2: "y4.png",
    img3: "y6.png",
    img4: "y2.png",
  },
  {
    id: 4,
    name: "Paris Eiffel Tower Hotel",
    location: "Paris, France",
    rating: 4,
    description: "Enjoy breathtaking views of the Eiffel Tower from our elegant hotel rooms. Discover French cuisine at our onsite restaurant and explore Parisian culture nearby.",
    features: [
      "Eiffel Tower view rooms",
      "Fine dining restaurant",
      "Spa and wellness center",
      "Airport shuttle service"
    ],
    image: "./top-hotel.jpeg",
    img1: "y4.png",
    img2: "y2.png",
    img3: "y3.png",
    img4: "y6.png",
  }
];

const TopRatedHotels = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
  };

  const getVisibleHotel = () => {
    return hotels[currentIndex];
  };

  return (
    <div className="w-full p-4">
      <div className="w-full max-w-6xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl text-black font-bold">Top Rated Hotels</h1>
            <p className="text-black mt-2 text-sm">{hotels.length}+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous" onClick={handlePrevClick}>
              <div className="bg-white text-black w-7 h-7 flex items-center justify-center border border-black rounded-md hover:bg-gray-200 transition">
                <PiLessThanBold />
              </div>
            </button>
            <button aria-label="Next" onClick={handleNextClick}>
              <div className="bg-black text-white border border-black w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-700 transition">
                <PiGreaterThanBold />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5 mt-10 p-4 rounded-md">
          <div className="flex-shrink-0 w-full md:w-[270px] h-[250px] md:h-auto">
            <img src={getVisibleHotel().image} alt="top hotel" className="w-full h-full object-cover rounded-md md:rounded-b-full" />
          </div>

          <div className="flex flex-col justify-center gap-4 w-full">
            <div>
              <h1 className="text-2xl font-semibold text-black">{getVisibleHotel().name}</h1>
              <p className="text-sm text-gray-600">{getVisibleHotel().location}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(getVisibleHotel().rating)].map((_, index) => (
                  <IoStar key={index} className="text-yellow-500" />
                ))}
                {[...Array(5 - getVisibleHotel().rating)].map((_, index) => (
                  <IoStar key={index + getVisibleHotel().rating} className="text-gray-400" />
                ))}
              </div>
              <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">Top Choice</span>
            </div>
            <p className="text-base text-black">{getVisibleHotel().description}</p>
            <div className="flex flex-wrap gap-2">
              {getVisibleHotel().features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaCheck className="text-white bg-black rounded-full p-1" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Book Now</button>
              <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100 transition">Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[getVisibleHotel().img1, getVisibleHotel().img2, getVisibleHotel().img3, getVisibleHotel().img4].map((img, index) => (
            <img key={index} src={img} alt={`Hotel ${getVisibleHotel().id} Image ${index + 1}`} className="w-full h-full object-cover rounded-md" />
          ))}
        </div>

        <p className="text-center flex items-center justify-center gap-1 text-[16px] text-black font-bold mt-4">See all <span><PiGreaterThanBold className='text-[10px]'/></span></p>
      </div>
    </div>
  );
};

export default TopRatedHotels;
