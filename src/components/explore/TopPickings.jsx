import React from 'react';
import Image from 'next/image';
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
        name: "Blue origin Farms",
        location: "Jarata, Indonesia",
        price: "94$ / night",
        image: "/explore-toppicking-hotel.png",
    },
    {
        id: 3,
        name: "Blue origin Farms",
        location: "Jarata, Indonesia",
        price: "94$ / night",
        image: "/explore-toppicking-hotel.png",
    },
];

const TopPickings = () => {
    return (
        <div className="min-h-screen relative">
            <div className="pl-[88px] pt-16 pb-4">
                <h2 className="text-3xl font-bold mb-2">Top pickings</h2>
                <p className="text-lg mb-4">20 Most frequents</p>
            </div>
            <div className="absolute top-[88px] right-[88px] flex gap-4 items-center z-10">
                <div className="rounded-md py-1 px-2 border border-black">
                    <MdKeyboardArrowLeft className="text-black text-2xl cursor-pointer" />
                </div>
                <div className="bg-black rounded-md py-1 px-2">
                    <MdKeyboardArrowRight className="text-white text-2xl cursor-pointer" />
                </div>
            </div>
            <div className="border-dashed p-8 border-2 rounded-md border-purple-500 mx-[58px] md:mx-[70px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {hotels.map((hotel) => (
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
