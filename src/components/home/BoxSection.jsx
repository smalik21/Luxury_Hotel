"use client";

import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { base_url } from '@/base_url';

const BoxSection = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [nationalities, setNationalities] = useState([]);
  const [travellingTo, setTravellingTo] = useState('');
  const [nationality, setNationality] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [requestCall, setRequestCall] = useState(false);
  const [eventReservation, setEventReservation] = useState('');
  const [luxuryItems, setLuxuryItems] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [tab, setTab] = useState('hotels');
  const [location, setLocation] = useState('');
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
      setNationalities(countryData);
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
    console.log('selected:', selectedCity);
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

  const handleSubmit = () => {
    
  };

  return (
    <div className="bg-white min-h-[400px] sm:min-h-[500px] my-6 mb-14 md:mb-0 w-auto flex justify-center overflow-hidden">
      <div className="flex flex-col justify-center items-center text-center md:pt-0 pt-[60px] text-black px-4">
        <div className="bg-gray-200 p-8 rounded-3xl">
          <h2 className="md:text-[50px] text-[40px] font-bold">Discover Luxury</h2>
          <p className="text-[15px] text-black">Experience the ultimate in hospitality..</p>

          <div className="mt-14 px-8 pb-8 pt-3 rounded-3xl md:max-w-[763px] sm:max-w-[450px] max-w-[340px] w-full bg-white">
            <div className="rounded-3xl px-4 py-4 text-black">
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
                      <select
                        className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-1/2"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                      >
                        <option className="sm:text-xs" value="">
                          Select Country
                        </option>
                        {countries.map((country) => (
                          <option key={country.country} value={country.country}>
                            {country.country}
                          </option>
                        ))}
                      </select>

                      <select
                        className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none flex-grow w-1/2"
                        value={selectedCity}
                        onChange={handleCityChange}
                        disabled={!selectedCountry}
                      >
                        <option className="sm:text-xs" value="">
                          Select City
                        </option>
                        {cities.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className=" check-in-date px-2 flex-grow">
                      <button
                        onClick={() => setCheckInOpen(!checkInOpen)}
                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left md:text-md text-xs"
                      >
                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Check In'}
                      </button>
                      {checkInOpen && (
                        <div className=" z-50">
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
                    <div className=" px-2 check-out-date flex-grow">
                      <button
                        onClick={() => setCheckOutOpen(!checkOutOpen)}
                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left md:text-md text-xs"
                      >
                        {checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Check Out'}
                      </button>
                      {checkOutOpen && (
                        <div className=" z-50">
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
                    <button
                      onClick={handleSearch}
                      className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center"
                    >
                      <FaSearch className="mr-2" /> Search
                    </button>
                  </div>
                </>
              )}

              {tab === 'safari' && (
                <>
                  <div className="flex items-center mb-4">
                    <div className=" px-2 location-search flex-grow">
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
                    <div className=" px-2 check-in-date flex-grow">
                      <button
                        onClick={() => setCheckInOpen(!checkInOpen)}
                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left"
                      >
                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Date'}
                      </button>
                      {checkInOpen && (
                        <div className=" z-50">
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
                    <button
                      className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center"
                    >
                      <FaSearch className="mr-2" /> Search
                    </button>
                  </div>
                </>
              )}

              {tab === 'visas' && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 w-full">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none"
                    />
                    <input
                      type="tel"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="Contact Number"
                      className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none"
                    />
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full mb-4"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    >
                      <option value="">Select Nationality</option>
                      {nationalities.map((country) => (
                        <option key={country.country} value={country.country}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full mb-4"
                      value={travellingTo}
                      onChange={(e) => setTravellingTo(e.target.value)}
                    >
                      <option value="">Select Country Travelling To</option>
                      {countries.map((country) => (
                        <option key={country.country} value={country.country}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                    <label className="inline-flex items-center mt-4">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={requestCall}
                        onChange={() => setRequestCall(!requestCall)}
                      />
                      <span className="ml-2">Request a call</span>
                    </label>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center"
                  >
                    Submit
                  </button>
                </div>
              )}

              {tab === 'services' && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 w-full">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none"
                    />
                    <input
                      type="text"
                      value={eventReservation}
                      onChange={(e) => setEventReservation(e.target.value)}
                      placeholder="Event Reservation"
                      className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none"
                    />
                    <input
                      type="text"
                      value={luxuryItems}
                      onChange={(e) => setLuxuryItems(e.target.value)}
                      placeholder="Luxury Items"
                      className="w-full px-4 py-2 mb-4 bg-gray-200 rounded-lg focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="bg-black text-white px-4 py-2 rounded-3xl flex items-center justify-center"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
