"use client";

import React, { useState } from 'react';
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

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    };

    const getVisibleHotels = () => {
        const visibleHotels = [];
        for (let i = 0; i < 3; i++) {
            visibleHotels.push(hotels[(currentIndex + i) % hotels.length]);
        }
        return visibleHotels;
    };

    return (
        <div className="my-10 min-h-screen relative">
            <div className="pl-[50px] md:pl-[320px] pt-16 pb-4">
                <h2 className="text-3xl font-bold mb-2">Top pickings</h2>
                <p className="text-lg mb-4">20 Most frequents</p>
            </div>
            <div className="absolute top-[88px] right-[50px] md:right-[320px] flex gap-4 items-center z-10">
                <div className="rounded-md py-1 px-2 border border-black">
                    <MdKeyboardArrowLeft className="text-black text-2xl cursor-pointer" onClick={handlePrevClick} />
                </div>
                <div className="bg-black rounded-md py-1 px-2 border border-black">
                    <MdKeyboardArrowRight className="text-white text-2xl cursor-pointer" onClick={handleNextClick} />
                </div>
            </div>
            <div className="border-dashed py-8 px-5 border-2 rounded-md border-purple-500 mx-[50px] md:mx-[300px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-transform duration-500 ease-in-out">
                    {getVisibleHotels().map((hotel) => (
                        <div key={hotel.id} className="rounded-lg shadow-lg overflow-hidden"
                            style={{ backgroundImage: `url(${hotel.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '350px' }}>
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
