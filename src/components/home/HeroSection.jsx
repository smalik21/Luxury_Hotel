"use client";

import { Carousel } from 'react-responsive-carousel';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { FaSearch, FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

const Hero = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [roomsOpen, setRoomsOpen] = useState(false);
    const [adultsOpen, setAdultsOpen] = useState(false);
    const [childrenOpen, setChildrenOpen] = useState(false);
    const [tab, setTab] = useState('day');

    const toggleRooms = () => setRoomsOpen(!roomsOpen);
    const toggleAdults = () => setAdultsOpen(!adultsOpen);
    const toggleChildren = () => setChildrenOpen(!childrenOpen);

    const handleRoomsChange = (e) => setRooms(e.target.value);
    const handleAdultsChange = (e) => setAdults(e.target.value);
    const handleChildrenChange = (e) => setChildren(e.target.value);

    return (
        <div className="relative h-screen overflow-hidden top-0 left-0 right-0 bottom-0">
            <Carousel
                showThumbs={false}
                autoPlay
                interval={5000}
                infiniteLoop
                showStatus={false}
                showArrows={false}
                className="h-full"
            >
                <div className="h-full">
                    <img src="/hero-image.jpeg" alt="Background 1" className="object-cover h-full w-full" />
                </div>
                <div className="h-full">
                    <img src="/luxury-hotel-3.webp" alt="Background 2" className="object-cover h-full w-full" />
                </div>
                <div className="h-full">
                    <img src="/luxury-hotel-2.webp" alt="Background 3" className="object-cover h-full w-full" />
                </div>
                <div className="h-full">
                    <img src="/luxury-hotel-4.jpg" alt="Background 4" className="object-cover h-full w-full" />
                </div>
            </Carousel>

            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 px-4">
                <p className="border border-gray-300 py-1 px-3 text-[14px] rounded-2xl md:mt-[140px] text-gray-200">it's time for vacation 🚀</p>
                <h2 className="md:text-[50px] text-[40px] font-weight:900">Discover Luxury</h2>
                <p className="text-[15px] text-gray-200">Experience the ultimate in hospitality..</p>

                <div className="mt-14 bg-white text-black px-8 pb-8 pt-3 rounded-3xl max-w-[763px] w-full">
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
                            className="w-full px-2 bg-gray-200"
                        />
                    </div>

                    <div className="flex flex-wrap justify-between items-center space-x-2 text-[15px]">
                        <div className="relative flex-grow text-black">
                            <button
                                onClick={() => document.querySelector("#checkInDate").focus()}
                                className="px-4 py-2 rounded-lg w-full text-black"
                            >
                                Check In
                            </button>
                            <DatePicker
                                selected={checkInDate}
                                onChange={(date) => setCheckInDate(date)}
                                className="hidden"
                                id="checkInDate"
                            />
                            <p className="text-sm -mt-1 text-gray-400">{checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Add date'}</p>
                        </div>

                        <div className="relative flex-grow">
                            <button
                                onClick={() => document.querySelector("#checkOutDate").focus()}
                                className="px-4 py-2 rounded-lg w-full"
                            >
                                Check Out
                            </button>
                            <DatePicker
                                selected={checkOutDate}
                                onChange={(date) => setCheckOutDate(date)}
                                className="hidden"
                                id="checkOutDate"
                            />
                            <p className="text-sm -mt-1 text-gray-400">{checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Add date'}</p>
                        </div>

                        <div className="relative flex-grow">
                            <button
                                onClick={toggleRooms}
                                className="px-4 py-2 rounded-lg w-full flex items-center justify-between"
                            >
                                Rooms
                                {roomsOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {roomsOpen && (
                                <select
                                    className="absolute top-full left-0 w-full p-2 border bg-white"
                                    value={rooms}
                                    onChange={handleRoomsChange}
                                    onBlur={() => setRoomsOpen(false)}
                                >
                                    <option value="1">1 Room</option>
                                    <option value="2">2 Rooms</option>
                                    <option value="3">3 Rooms</option>
                                </select>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{`${rooms > 1 ? rooms : 'Add room'}`}</p>
                        </div>

                        <div className="relative flex-grow">
                            <button
                                onClick={toggleAdults}
                                className=" px-4 py-2 rounded-lg w-full flex items-center justify-between"
                            >
                                Adults
                                {adultsOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {adultsOpen && (
                                <select
                                    className="absolute top-full left-0 w-full p-2 border bg-white"
                                    value={adults}
                                    onChange={handleAdultsChange}
                                    onBlur={() => setAdultsOpen(false)}
                                >
                                    <option value="1">1 Adult</option>
                                    <option value="2">2 Adults</option>
                                    <option value="3">3 Adults</option>
                                </select>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{`${adults > 1 ? adults : 'Add adults'}`}</p>
                        </div>

                        <div className="relative flex-grow">
                            <button
                                onClick={toggleChildren}
                                className="px-4 py-2 rounded-lg w-full flex items-center justify-between"
                            >
                                Children
                                {childrenOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                            </button>
                            {childrenOpen && (
                                <select
                                    className="absolute top-full left-0 w-full p-2 border bg-white"
                                    value={children}
                                    onChange={handleChildrenChange}
                                    onBlur={() => setChildrenOpen(false)}
                                >
                                    <option value="0">No Children</option>
                                    <option value="1">1 Child</option>
                                    <option value="2">2 Children</option>
                                </select>
                            )}
                            <p className="text-sm -mt-1 text-gray-400">{children > 0 ? children : 'Add Child'}</p>
                        </div>

                        <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center flex-grow">
                            Search
                        </button>
                    </div>
                </div>
                <Link href="#" className="mt-8 bg-white bg-opacity-50 border-white text-black rounded-3xl px-8 py-2 flex items-center font-bold">
                    Explore
                    <FaArrowRight className="ml-2" />
                </Link>

            </div>
        </div>
    );
};

export default Hero;
