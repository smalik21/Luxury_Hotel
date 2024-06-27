"use client";

import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import { base_url } from '@/base_url';

const BoxSection = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [tab, setTab] = useState('hotels');
  const [location, setLocation] = useState('')
  const router = useRouter();

  const api = base_url;

  const fetchCountries = async () => {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries');
    const data = await res.json();
    return data.data;
  };

  const fetchCities = async (country) => {
    const res = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ country }),
    });
    const data = await res.json();
    return data.data;
  };

  useEffect(() => {
    const getCountries = async () => {
      const countryData = await fetchCountries();
      setCountries(countryData);
    };
    getCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const getCities = async () => {
        const cityData = await fetchCities(selectedCountry);
        setCities(cityData);
      };
      getCities();
    }
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearch = () => {
    console.log("selected:", selectedCity);
    if (!selectedCity) return;
    router.push(`/hotels?search=${selectedCity}`);
  };

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
    <div className="relative bg-white h-[400px] sm:h-[500px] w-auto top-0 left-0 right-0">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center md:pt-0 pt-[60px] text-black bg-white px-4">
        <h2 className="md:text-[50px] text-[40px] font-bold">Discover Luxury</h2>
        <p className="text-[15px] text-black">Experience the ultimate in hospitality..</p>

        <div className="mt-14 bg-white text-black px-8 pb-8 pt-3 rounded-3xl md:max-w-[763px] sm:max-w-[450px] max-w-[340px] w-full">
          <div className="flex mb-4">
            <button
              onClick={() => setTab('hotels')}
              className={`px-4 text-xs md:text-lg py-2 ${tab === 'hotels' ? 'border-b-2 border-black' : ''}`}
            >
              Hotels
            </button>
            <button
              onClick={() => setTab('safari')}
              className={`px-4 text-xs md:text-lg py-2 ${tab === 'safari' ? 'border-b-2 border-black' : ''}`}
            >
              Safaris
            </button>
            <button
              onClick={() => setTab('visas')}
              className={`px-4 text-xs md:text-lg py-2 ${tab === 'visas' ? 'border-b-2 border-black' : ''}`}
            >
              Visas
            </button>
            <button
              onClick={() => setTab('services')}
              className={`px-4 text-xs md:text-lg py-2 ${tab === 'services' ? 'border-b-2 border-black' : ''}`}
            >
              Procurement Services
            </button>
          </div>
          <hr className="border-gray-300 -mt-[17px] mx-2 w-full mb-4" />

          {tab === 'hotels' && (
            <>
              <div className="flex items-center mb-4 w-full">
                <div className="flex justify-between city-search px-2 gap-4 w-full">
                  <select className=" px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-1/2" value={selectedCountry} onChange={handleCountryChange}>
                    <option className='sm:text-xs' value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>

                  <select className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none flex-grow w-1/2" value={selectedCity} onChange={handleCityChange} disabled={!selectedCountry}>
                    <option className='sm:text-xs' value="">Select City</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
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
                <button onClick={handleSearch} className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center">
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
                <button className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center">
                  <FaSearch className="mr-2" /> Search
                </button>
              </div>
            </>
          )}

          {tab === 'visas' && (
            <div className="flex flex-col items-center">
              <Link href="/visas" className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center">
                Learn more <IoIosArrowForward className="ml-2" />
              </Link>
            </div>
          )}

          {tab === 'services' && (
            <div className="flex flex-col items-center">
              <Link href="/procurement-services" className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center">
                Learn more <IoIosArrowForward className="ml-2" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BoxSection;
