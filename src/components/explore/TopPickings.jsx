"use client";

import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const hotels = [
    {
        id: 1,
        name: "Blue origin Farms",
        location: "Jarata, Indonesia",
        price: "94$ / night",
        image: "/explore-toppicking-hotel.png",
    },
    {
        id: 2,
        name: "Red origin Farms",
        location: "Jarata, Indonesia",
        price: "95$ / night",
        image: "/y2.png",
    },
    {
        id: 3,
        name: "Green origin Farms",
        location: "Jarata, Indonesia",
        price: "96$ / night",
        image: "/y3.png",
    },
    {
        id: 4,
        name: "Black origin Farms",
        location: "Jarata, Indonesia",
        price: "97$ / night",
        image: "/y4.png",
    },
    {
        id: 5,
        name: "Gray origin Farms",
        location: "Jarata, Indonesia",
        price: "98$ / night",
        image: "/y5.png",
    },
];

const TopPickings = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [numVisibleHotels, setNumVisibleHotels] = useState(3);

    const handlePrevClick = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
                setIsAnimating(false);
            }, 400);
        }
    };

    const handleNextClick = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
                setIsAnimating(false);
            }, 400);
        }
    };

    const getVisibleHotels = () => {
        const visibleHotels = [];
        for (let i = 0; i < numVisibleHotels; i++) {
            visibleHotels.push(hotels[(currentIndex + i) % hotels.length]);
        }
        return visibleHotels;
    };

    const updateNumVisibleHotels = () => {
        if (window.innerWidth < 768) {
            setNumVisibleHotels(1);
        } else if (window.innerWidth < 1024) {
            setNumVisibleHotels(2);
        } else {
            setNumVisibleHotels(3);
        }
    };

    useEffect(() => {
        updateNumVisibleHotels();
        window.addEventListener('resize', updateNumVisibleHotels);
        return () => window.removeEventListener('resize', updateNumVisibleHotels);
    }, []);

    return (
        <div className="w-full max-w-6xl m-auto mt-4 px-4 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl text-black font-bold mb-2">Deserts and Rejuvinations</h1>
            <p className="text-black text-sm">2000+ hotels</p>
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
                <div className="container mx-auto max-w-6xl lg:px-0 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform duration-500 ease-in-out">
                    {getVisibleHotels().map((hotel, index) => (
                        <div
                            key={hotel.id}
                            className={`rounded-lg shadow-lg overflow-hidden transform transition-all duration-400 hover:cursor-pointer hover:scale-105 ${isAnimating ? 'opacity-0 blur-lg' : 'opacity-100 blur-0'}`}
                            style={{ backgroundImage: `url(${hotel.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '350px' }}
                        >
                            <div className="relative h-48">
                                <div className="absolute top-5 -right-4 bg-white text-black rounded-full px-5 py-1">
                                    {hotel.price}
                                </div>
                            </div>
                            <div className="p-4 text-white mt-16 ml-3">
                                <h3 className="text-xl font-bold">{hotel.name}</h3>
                                <p>{hotel.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopPickings;
