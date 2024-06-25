"use client";

import { Carousel } from 'react-responsive-carousel';
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';


const Hero = () => {
    const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [checkInOpen, setCheckInOpen] = useState(false);
    const [checkOutOpen, setCheckOutOpen] = useState(false);
    const [tab, setTab] = useState('hotels');
    const [cities, setCities] = useState([]);
    const [searchText, setSearchText] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');
    // const [location, setLocation] = useState('');

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

    useEffect(() => {
        // Fetch all countries when the component mounts
        axios.get('https://restcountries.com/v3.1/all')
          .then(response => {
            const countryList = response.data.map(country => ({
              name: country.name.common,
              code: country.cca2
            }));
            setCountries(countryList);
          })
          .catch(error => {
            console.error('Error fetching countries:', error);
          });
    }, []);

    useEffect(() => {
        // Fetch states when a country is selected
        if (selectedCountry) {
          axios.post('https://countriesnow.space/api/v0.1/countries/states', {
            country: selectedCountry
          })
            .then(response => {
              setStates(response.data.data.states);
            })
            .catch(error => {
              console.error('Error fetching states:', error);
            });
        }
    }, [selectedCountry]);
    
    

    const handleOutsideClick = (event) => {
        if (
            !event.target.closest('.check-in-date') &&
            !event.target.closest('.check-out-date') &&
            !event.target.closest('.city-search') &&
            !event.target.closest('.location-search')
        ) {
            setCheckInOpen(false);
            setCheckOutOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="relative h-[700px] sm:h-[730px] w-auto top-0 left-0 right-0">
            <Carousel
                showThumbs={false}
                autoPlay
                interval={3000}
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                className="h-[790px]"
                emulateTouch
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
                <h2 className="md:text-[50px] text-[40px] font-bold">Discover Luxury</h2>
                <p className="text-[15px] text-gray-200">Experience the ultimate in hospitality..</p>

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
                        <>
                            <div className="flex items-center mb-4">
                                <div className="relative city-search px-2 flex-grow">
                                    <input
                                        type="text"
                                        value={searchText}
                                        onChange={handleSearchChange}
                                        placeholder="Search for a city..."
                                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                                    />
                                    {cities.length > 0 && (
                                        <div className="absolute z-50 bg-white mt-1 w-full border border-gray-300 rounded-lg">
                                            {cities.map((city) => (
                                                <div
                                                    key={city.id}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                    onClick={() => handleCitySelect(city.name)}
                                                >
                                                    {city.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="relative check-in-date px-2 flex-grow">
                                    <button
                                        onClick={() => setCheckInOpen(!checkInOpen)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left md:text-md text-xs"
                                    >
                                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Check In'}
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
                                </div>
                                <div className="relative px-2 check-out-date flex-grow">
                                    <button
                                        onClick={() => setCheckOutOpen(!checkOutOpen)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left md:text-md text-xs"
                                    >
                                        {checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Check Out'}
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
                                </div>
                                <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center">
                                    <FaSearch className="mr-2" /> Search
                                </button>
                            </div>
                        </>
                    )}

                    {tab === 'safari' && (
                        <>
                            <div className="flex items-center mb-4">
                                <div className="relative px-2 location-search flex-grow">
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Enter location..."
                                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="relative px-2 check-in-date flex-grow">
                                    <button
                                        onClick={() => setCheckInOpen(!checkInOpen)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left"
                                    >
                                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Date'}
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
                                </div>
                                {/* <div className="relative check-out-date flex-grow">
                                    <button
                                        onClick={() => setCheckOutOpen(!checkOutOpen)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left"
                                    >
                                        {checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Check Out'}
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
                                </div> */}
                                <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center">
                                    <FaSearch className="mr-2" /> Search
                                </button>
                            </div>
                        </>
                    )}

                    {tab === 'flight' && (
                        <>
                            <div className="flex items-center mb-4 ">
                                <div className="relative location-search px-2 flex-grow">
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Boarding"
                                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                                    />
                                </div>
                                <div className="relative location-search flex-grow">
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Destination"
                                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="relative px-2 check-in-date flex-grow">
                                    <button
                                        onClick={() => setCheckInOpen(!checkInOpen)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left"
                                    >
                                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Select Date'}
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
                                </div>
                                {/* <div className="relative check-out-date flex-grow">
                                    <button
                                        onClick={() => setCheckOutOpen(!checkOutOpen)}
                                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left"
                                    >
                                        {checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Check Out'}
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
                                </div> */}
                                <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center">
                                    <FaSearch className="mr-2" /> Search
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <Link href="/explore" className="sm:bottom-12 bottom-9 absolute bg-white bg-opacity-50 border-white text-black rounded-3xl px-8 py-2 flex items-center gap-2 font-bold">
                    Explore <div className="ml-1 text-md font-extrabold"><IoIosArrowForward /></div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;

