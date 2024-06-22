"use client";

import { Carousel } from 'react-responsive-carousel';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { IoCalendarOutline } from "react-icons/io5";

const Hero = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [rooms, setRooms] = useState(0);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [roomsOpen, setRoomsOpen] = useState(false);
    const [adultsOpen, setAdultsOpen] = useState(false);
    const [childrenOpen, setChildrenOpen] = useState(false);
    const [checkInOpen, setCheckInOpen] = useState(false);
    const [checkOutOpen, setCheckOutOpen] = useState(false);
    const [tab, setTab] = useState('day');

    const handleRoomsChange = (e) => setRooms(e.target.value);
    const handleAdultsChange = (e) => setAdults(e.target.value);
    const handleChildrenChange = (e) => setChildren(e.target.value);

    return (
        <div className="relative h-screen w-auto  top-0 left-0 right-0">
            <Carousel
                showThumbs={false}
                autoPlay
                interval={5000}
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                className="h-screen"
            >
                <div className="h-screen">
                    <img src="/hero-image.jpeg" alt="Background 1" className="h-screen object-cover" />
                </div>
                <div className="h-screen">
                    <img src="/luxury-hotel-3.webp" alt="Background 2" className="h-screen object-cover" />
                </div>
                <div className="h-screen">
                    <img src="/luxury-hotel-2.webp" alt="Background 3" className="h-screen object-cover" />
                </div>
                <div className="h-screen">
                    <img src="/luxury-hotel-4.jpg" alt="Background 4" className="h-screen object-cover" />
                </div>
            </Carousel>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center md:pt-0 pt-[60px] text-white bg-black bg-opacity-50 px-4">
                <p className="border border-gray-300 py-1 px-3 text-[14px] rounded-2xl md:mt-[140px] text-gray-200">it's time for vacation 🚀</p>
                <h2 className="md:text-[50px] text-[40px] font-bold">Discover Luxury</h2>
                <p className="text-[15px] text-gray-200">Experience the ultimate in hospitality..</p>

                <div className="mt-14 bg-white text-black px-8 pb-8 pt-3 rounded-3xl md:max-w-[763px] sm:max-w-[450px] max-w-[340px] w-full">
                    <div className="flex mb-4">
                        <button
                            onClick={() => setTab('day')}
                            className={`px-4 py-2 ${tab === 'day' ? 'border-b-2 border-black' : ''}`}
                        >
                            Day Inn
                        </button>

                        <button
                            onClick={() => setTab('night')}
                            className={`px-4 py-2 ${tab === 'night' ? 'border-b-2 border-black' : ''}`}
                        >
                            night lodge
                        </button>
                    </div>
                    <hr className="border-gray-300 -mt-[17px] mx-2 w-full mb-4" />
                    <div className="flex items-center mb-4 bg-gray-200 rounded-lg px-2 py-2">
                        <FaSearch className="mr-2" />
                        <input
                            type="text"
                            placeholder="Type destination, hotel, country..."
                            className="w-full px-2 bg-gray-200 focus:outline-none"
                        />
                    </div>
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
                        <div className="relative max-w-md">
                            <button
                                onClick={() => setRoomsOpen(!roomsOpen)}
                                className="px-4 py-2 rounded-lg w-full flex items-center justify-between"
                            >
                                <IoCalendarOutline size={18} className="mr-2 text-bold -mt-0.5" /> Rooms
                                {roomsOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {roomsOpen && (
                                <select
                                    className="absolute top-0 left-0 w-full p-2 border bg-white z-10"
                                    value={rooms}
                                    onChange={handleRoomsChange}
                                    onBlur={() => setRoomsOpen(false)}
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{rooms > 0 ? `${rooms} ${rooms > 1 ? 'Room' : 'Rooms'}` : 'Add Rooms'}</p>
                        </div>
                        <div className="relative max-w-md lg:mt-0 mt-2">
                            <button
                                onClick={() => setAdultsOpen(!adultsOpen)}
                                className="px-4 py-2 rounded-lg w-full flex items-center justify-between"
                            >
                                <IoCalendarOutline size={18} className="mr-2 text-bold -mt-0.5" /> Adults
                                {adultsOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {adultsOpen && (
                                <select
                                    className="absolute top-0 left-0 w-full p-2 border bg-white z-10"
                                    value={adults}
                                    onChange={handleAdultsChange}
                                    onBlur={() => setAdultsOpen(false)}
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{adults > 0 ? `${adults} ${adults > 1 ? 'Adults' : 'Adults'}` : 'Add Adults'}</p>
                        </div>
                        <div className="relative max-w-md lg:mt-0 mt-2">
                            <button
                                onClick={() => setChildrenOpen(!childrenOpen)}
                                className="px-4 py-2 rounded-lg w-full flex items-center justify-between"
                            >
                                <IoCalendarOutline size={18} className="mr-2 text-bold -mt-0.5" /> Children
                                {childrenOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {childrenOpen && (
                                <select
                                    className="absolute top-0 left-0 w-full p-2 border bg-white z-10"
                                    value={children}
                                    onChange={handleChildrenChange}
                                    onBlur={() => setChildrenOpen(false)}
                                >
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{children > 0 ? `${children} ${children > 1 ? 'Children' : 'Child'}` : 'Add Child'}</p>
                        </div>
                        <div className="sm:pr-0 pr-5">
                            <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center  lg:mt-0 mt-2">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <Link href="/explore" className="sm:bottom-12 bottom-9 absolute bg-white bg-opacity-50 border-white text-black rounded-3xl px-8 py-2 flex items-center gap-3 font-bold">
                    Explore <div className="ml-1 text-md">&gt;</div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
