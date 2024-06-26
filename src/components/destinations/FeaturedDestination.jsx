"use client";

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const destinations = [
  {
    id: 1,
    name: "Paris",
    hotels: "100+ Hotels",
    image: "./destinations/paris.png",
  },
  {
    id: 2,
    name: "Singapore",
    hotels: "300+ Hotels",
    image: "./destinations/singapore.png",
  },
  {
    id: 3,
    name: "Rome",
    hotels: "400+ Hotels",
    image: "./destinations/roma.png",
  },
  {
    id: 4,
    name: "Bali",
    hotels: "600+ Hotels",
    image: "./destinations/bali.png",
  },
  {
    id: 5,
    name: "Phuket",
    hotels: "200+ Hotels",
    image: "./destinations/phuket.png",
  },
  {
    id: 6,
    name: "Tokyo",
    hotels: "700+ Hotels",
    image: "./destinations/tokyo.png",
  },
  {
    id: 7,
    name: "London",
    hotels: "500+ Hotels",
    image: "./destinations/singapore.png",
  },
  {
    id: 8,
    name: "New York",
    hotels: "400+ Hotels",
    image: "./destinations/tokyo.png",
  },
  {
    id: 9,
    name: "Sydney",
    hotels: "300+ Hotels",
    image: "./destinations/paris.png",
  },
  {
    id: 10,
    name: "Bangkok",
    hotels: "600+ Hotels",
    image: "./destinations/bali.png",
  },
  {
    id: 11,
    name: "Hong Kong",
    hotels: "500+ Hotels",
    image: "./destinations/phuket.png",
  },
  {
    id: 12,
    name: "Dubai",
    hotels: "700+ Hotels",
    image: "./destinations/roma.png",
  },
];

const FeaturedDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [numVisibleCards, setNumVisibleCards] = useState(6);
  const router = useRouter()

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + numVisibleCards) % destinations.length);
        setIsAnimating(false);
      }, 400);
    }
  };

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - numVisibleCards + destinations.length) % destinations.length);
        setIsAnimating(false);
      }, 400);
    }
  };

  const getVisibleDestinations = () => {
    const visibleDestinations = [];
    for (let i = 0; i < numVisibleCards; i++) {
      visibleDestinations.push(destinations[(currentIndex + i) % destinations.length]);
    }
    return visibleDestinations;
  };

  const updateNumVisibleCards = () => {
    if (window.innerWidth < 1024) {
      setNumVisibleCards(3);
    } else {
      setNumVisibleCards(6);
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
          <h2 className="md:text-4xl text-2xl font-bold">Destinations we recommend</h2>
          <p className="md:text-lg text-md">2000+ hotels</p>
        </div>
        <div className="flex space-x-2">
          <button onClick={handlePrevClick} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdKeyboardArrowLeft className="text-2xl" />
          </button>
          <button onClick={handleNextClick} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 cursor-pointer">
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
      <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' : ''} gap-6 transition-transform duration-400 ease-in-out`}>
        {getVisibleDestinations().map((destination) => (
          <div
            key={destination.id}
            className="bg-white p-4 rounded-lg border border-gray-400 flex items-center transform transition-transform duration-400 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => router.push(`/hotels?search=${destination.name}`)}
          >
            <img src={destination.image} alt={destination.name} className="w-[90px] h-[90px] rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-bold">{destination.name}</h3>
              <p className="text-gray-500">{destination.hotels}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
