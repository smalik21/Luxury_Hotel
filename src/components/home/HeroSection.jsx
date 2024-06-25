"use client";

import { Carousel } from 'react-responsive-carousel';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { IoCalendarOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
   
    const [checkInOpen, setCheckInOpen] = useState(false);
    const [checkOutOpen, setCheckOutOpen] = useState(false);
    const [tab, setTab] = useState('hotels');
    
    const [cities, setCities] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    
    

    const handleSearchChange = async (e) => {
        const searchText = e.target.value;
        setSearchText(searchText);
        if (searchText.length > 1) {
            const data = await fetchCities(searchText);
            setCities(data);
        } else {
            setCities([]);
        }
    };

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setSearchText('');
        setCities([]);
    };


    // Replace this with your actual API endpoint that fetches cities data
    const fetchCities = async (searchText) => {
        try {
            // Mock API endpoint for demonstration
            const response = await fetch(`https://api.example.com/cities?q=${searchText}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching cities:', error);
            return [];
        }
    };


    return (
        <div className="relative h-[700px] sm:h-[730px] w-auto  top-0 left-0 right-0">
            <Carousel
                showThumbs={false}
                autoPlay
                interval={5000}
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                className="h-[790px]"
            >
                <div className="h-[700px] sm:h-[730px]">
                    <img src="/hero-image.jpeg" alt="Background 1" className="h-[790px] object-cover" />
                </div>
                <div className="h-[700px] sm:h-[730px]">
                    <img src="/luxury-hotel-3.webp" alt="Background 2" className="h-[790px] object-cover" />
                </div>
                <div className="h-[700px] sm:h-[730px]">
                    <img src="/luxury-hotel-2.webp" alt="Background 3" className="h-[790px] object-cover" />
                </div>
                <div className="h-[700px] sm:h-[730px]">
                    <img src="/luxury-hotel-4.jpg" alt="Background 4" className="h-[790px] object-cover" />
                </div>
            </Carousel>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center md:pt-0 pt-[60px] text-white bg-black bg-opacity-50 px-4">
                <p className="border border-gray-300 py-1 px-3 text-[14px] rounded-2xl md:mt-[140px] text-gray-200">it's time for vacation 🚀</p>
                <h2 className="md:text-[50px] text-[40px] font-f_2 font-bold">Discover Luxury</h2>
                <p className="text-[15px] font-f_2 text-gray-200">Experience the ultimate in hospitality..</p>

                <div className="mt-14 bg-white text-black px-8 pb-8 pt-3 rounded-3xl md:max-w-[763px] sm:max-w-[450px] max-w-[340px] w-full">
                    <div className="flex mb-4">
                        <button
                            onClick={() => setTab('hotels')}
                            className={`px-4 py-2 ${tab === 'hotels' ? 'border-b-2 border-black' : ''}`}
                        >
                            Hotels
                        </button>

                        <button
                            onClick={() => setTab('safari')}
                            className={`px-4 py-2 ${tab === 'safari' ? 'border-b-2 border-black' : ''}`}
                        >
                            Safaris
                        </button>
                        <button
                            onClick={() => setTab('flight')}
                            className={`px-4 py-2 ${tab === 'flight' ? 'border-b-2 border-black' : ''}`}
                        >
                            Flights
                        </button>
                    </div>
                    <hr className="border-gray-300 -mt-[17px] mx-2 w-full mb-4" />
                    {tab === 'hotels' && (
                <div className="flex items-center mb-4 bg-gray-200 rounded-lg px-2 py-2">
                    <select
                        value={selectedCity}
                        onChange={(e) => handleCitySelect(e.target.value)}
                        className="w-2/3 px-2 bg-gray-200 focus:outline-none"
                    >
                        <option value="">Select a city</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.name}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={searchText}
                        onChange={handleSearchChange}
                        placeholder="Search for a city..."
                        className="w-1/3 px-2 bg-gray-200 focus:outline-none"
                    />
                </div>
            )}
                    <div className="flex flex-wrap justify-between items-center space-x-1 text-[15px] ">
                        <div className="relative sm:ml-0 ml-3 text-black">
                            <button
                                onClick={() => setCheckInOpen(!checkInOpen)}
                                className="px-4 py-2 rounded-lg w-full text-black"
                            >
                                Check In
                            </button>
                            {checkInOpen && (
                                <div className="absolute z-50">
                                    <DatePicker
                                        selected={checkInDate}
                                        onChange={(date) => {
                                            setCheckInDate(date);
                                            setCheckInOpen(false);
                                        }}
                                        inline
                                        className="text-sm"
                                    />
                                </div>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Add date'}</p>
                        </div>

                        <div className="relative sm:pr-0 pr-4">
                            <button
                                onClick={() => setCheckOutOpen(!checkOutOpen)}
                                className="px-4 py-2 rounded-lg w-full"
                            >
                                Check Out
                            </button>
                            {checkOutOpen && (
                                <div className="absolute z-50">
                                    <DatePicker
                                        selected={checkOutDate}
                                        onChange={(date) => {
                                            setCheckOutDate(date);
                                            setCheckOutOpen(false);
                                        }}
                                        inline
                                        className="text-sm"
                                    />
                                </div>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Add date'}</p>
                        </div>
                        <div className="sm:pr-0 pr-5">
                            <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center  lg:mt-0 mt-2">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <Link href="/explore" className="sm:bottom-12 bottom-9 absolute bg-white bg-opacity-50 border-white text-black rounded-3xl px-8 py-2 flex items-center gap-2 font-bold">
                    Explore <div className="ml-1 text-md font-extrabold"><IoIosArrowForward /></div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
