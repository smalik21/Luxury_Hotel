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
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
            setIsAnimating(false);
        }, 400);
    };

    const handleNextClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
            setIsAnimating(false);
        }, 400);
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
        <div className="my-10 min-h-screen relative">
            <div className="container mx-auto max-w-4xl px-5 lg:px-0 pt-16 ">
                <h2 className="text-3xl font-bold mb-2">Top pickings</h2>
                <p className="text-lg">20 Most frequents</p>
            </div>
            <div className="container mx-auto max-w-4xl lg:px-0 px-4">
                <div className="relative flex justify-end bottom-12 right-4 gap-4 items-center z-10">
                    <div className="rounded-md py-1 px-2 border border-black">
                        <MdKeyboardArrowLeft className="text-black text-2xl cursor-pointer" onClick={handlePrevClick} />
                    </div>
                    <div className="bg-black rounded-md py-1 px-2 border border-black">
                        <MdKeyboardArrowRight className="text-white text-2xl cursor-pointer" onClick={handleNextClick} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-transform duration-500 ease-in-out">
                    {getVisibleHotels().map((hotel, index) => (
                        <div
                            key={hotel.id}
                            className={`rounded-lg shadow-lg overflow-hidden transform transition-opacity duration-500 ${isAnimating ? 'opacity-0 blur-lg' : 'opacity-100 blur-0'}`}
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
