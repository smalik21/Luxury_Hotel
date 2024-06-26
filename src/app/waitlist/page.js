"use client";

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import waitlistHotelsData from "@/data/HotelsData.json";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaTrashAlt } from "react-icons/fa";
// import { AuthContext } from '../context/authContext';
// import LandingPage from '@/components/LandingPage';

const Waitlist = () => {
    // const { accessToken } = useContext(AuthContext);
    // console.log(accessToken);
    const [waitlistHotels, setWaitlistHotels] = useState(waitlistHotelsData);

    const handleDelete = (id) => {
        setWaitlistHotels(waitlistHotels.filter(hotel => hotel.id !== id));
    };

    return (
        <div >
            {/* {!accessToken ? <LandingPage/> : ( */}
                <div>
                <Header />
                <section className="relative h-96">
                    <div className="absolute inset-0 pointer-events-none">
                        <Image
                            src="/hotel1.jpeg"
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center h-full text-center text-white pointer-events-auto">
                        <h1 className="md:text-6xl text-5xl font-bold mb-8 mt-20">Your Waitlist</h1>
                        <p className="text-lg md:text-lg text-gray-300">Browse all the hotels you've added to your waitlist.</p>
                    </div>
                </section>
    
                <div className="max-w-7xl mx-auto px-4 py-12 mb-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Welcome to Your Personalized Waitlist</h2>
                        <p className="text-gray-500">Here you can find all the hotels you have added to your waitlist. Check them out and book your next staycation!</p>
                    </div>
    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 hover:cursor-pointer">
                        {waitlistHotels.map((hotel) => (
                            <div key={hotel.id} className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                                <div className="relative h-60">
                                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                                    <button
                                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(hotel.id)}
                                    >
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold">{hotel.name}</h3>
                                    <p className="text-sm text-gray-500">{hotel.location}</p>
                                    <div className="flex items-center text-yellow-500 my-2">
                                        {Array.from({ length: hotel.rating }, (_, index) => (
                                            <svg key={index} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 1.52l1.745 4.932H17.66l-3.772 2.88 1.744 4.931-4.576-3.34-4.576 3.34 1.743-4.93L2.34 7.432h5.915L10 1.52z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {hotel.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 1.5c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5zm1.37 9.63l-3.5 3.5a1.5 1.5 0 01-2.12 0l-1.5-1.5a1.5 1.5 0 112.12-2.12l.79.79 2.79-2.79a1.5 1.5 0 112.12 2.12z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
                </div>
            {/* )} */}
            
        </div>
    );
};

export default Waitlist;
