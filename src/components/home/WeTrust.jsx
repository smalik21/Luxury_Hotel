"use client";

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const destinations = [
  {
    id: 1,
    name: "Four Seasons",
    hotels: "100+ Hotels",
    image: "./destinations/paris.png",
  },
  {
    id: 2,
    name: "Capella Hotels",
    hotels: "300+ Hotels",
    image: "./destinations/singapore.png",
  },
  {
    id: 3,
    name: "One & Only",
    hotels: "400+ Hotels",
    image: "./destinations/roma.png",
  },
  {
    id: 4,
    name: "Dorchester",
    hotels: "600+ Hotels",
    image: "./destinations/bali.png",
  },
  {
    id: 5,
    name: "Park Hyatt",
    hotels: "200+ Hotels",
    image: "./destinations/phuket.png",
  },
  {
    id: 6,
    name: "St.Regis",
    hotels: "700+ Hotels",
    image: "./destinations/tokyo.png",
  },
  {
    id: 7,
    name: "Rosewood",
    hotels: "500+ Hotels",
    image: "./destinations/singapore.png",
  },
  {
    id: 8,
    name: "The Peninsula",
    hotels: "400+ Hotels",
    image: "./destinations/tokyo.png",
  },
  {
    id: 9,
    name: "Rocco Forte",
    hotels: "300+ Hotels",
    image: "./destinations/paris.png",
  },
  {
    id: 10,
    name: "Viceroy Hotels",
    hotels: "600+ Hotels",
    image: "./destinations/bali.png",
  },
  {
    id: 11,
    name: "Montage Hotels",
    hotels: "500+ Hotels",
    image: "./destinations/phuket.png",
  },
  {
    id: 12,
    name: "The Leela Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/bali.png",
  },
  {
    id: 13,
    name: "ITC Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/paris.png",
  },
  {
    id: 14,
    name: "W Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/tokyo.png",
  },
  {
    id: 15,
    name: "Bulgani Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/roma.png",
  },
  {
    id: 16,
    name: "Auberfy Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/phuket.png",
  },
  {
    id: 17,
    name: "Raffles Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/roma.png",
  },
  {
    id: 18,
    name: "Fourmont Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/paris.png",
  },
  {
    id: 19,
    name: "Marriott Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/bali.png",
  },
  {
    id: 20,
    name: "Langham Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/tokyo.png",
  },
  {
    id: 21,
    name: "Wyndham Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/roma.png",
  },
  {
    id: 22,
    name: "Hilton Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/paris.png",
  },
  {
    id: 23,
    name: "Taj Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/phuket.png",
  },
  {
    id: 24,
    name: "Oberoi Hotels",
    hotels: "700+ Hotels",
    image: "./destinations/roma.png",
  },
  {
    id: 25,
    name: "Waldorf Astova",
    hotels: "700+ Hotels",
    image: "./destinations/paris.png",
  }

];

const  WeTrust = () => {
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
          <h2 className="md:text-4xl text-2xl font-bold">Luxury Chains We Trust</h2>
          <p className="md:text-lg text-md">50+ chains</p>
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
      <Link href="/contactus">
      <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' : ''} gap-6 transition-transform duration-400 ease-in-out`}>
        {getVisibleDestinations().map((destination) => (
         <Link href="/contact">
          <div
            key={destination.id}
            className="bg-white p-4 rounded-lg border border-gray-400 flex items-center transform transition-transform duration-400 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => router.push(`/hotels?search=${destination.name}`)}
          >
            <img src={destination.image} alt={destination.name} className="w-[90px] h-[90px] rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-bold">{destination.name}</h3>
              
            </div>
          </div>
         </Link>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default  WeTrust;
