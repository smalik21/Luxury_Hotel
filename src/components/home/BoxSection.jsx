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
  const [result, setResult] = useState('');
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

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d6efbbeb-5a9c-48d6-8378-c53e1344b2a9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Form submission error", error);
      setResult("An error occurred while submitting the form. Please try again later.");
    }
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
                        <div className="z-50">
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
                    <div className=" check-out-date px-2 flex-grow">
                      <button
                        onClick={() => setCheckOutOpen(!checkOutOpen)}
                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left md:text-md text-xs"
                      >
                        {checkOutDate ? `${checkOutDate.toLocaleDateString()}` : 'Check Out'}
                      </button>
                      {checkOutOpen && (
                        <div className="z-50">
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
                    <div className="px-2 check-in-date flex-grow">
                      <button
                        onClick={() => setCheckInOpen(!checkInOpen)}
                        className="px-4 py-2 bg-gray-200 rounded-lg w-full text-left"
                      >
                        {checkInDate ? `${checkInDate.toLocaleDateString()}` : 'Date'}
                      </button>
                      {checkInOpen && (
                        <div className="z-50">
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
                <form onSubmit={onSubmit}>
                  <input type="hidden" name="subject" value="Visa Inquiry Form" />
                  <div className="mb-4 flex items-center gap-4">
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      name="nationality"
                      required
                    >
                      <option value="">Select Nationality</option>
                      {nationalities.map((nat) => (
                        <option key={nat.country} value={nat.country}>
                          {nat.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={travellingTo}
                      onChange={(e) => setTravellingTo(e.target.value)}
                      name="travellingTo"
                      required
                    >
                      <option value="">Travelling To</option>
                      {countries.map((country) => (
                        <option key={country.country} value={country.country}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="requestCall"
                        className="form-checkbox"
                        checked={requestCall}
                        onChange={() => setRequestCall(!requestCall)}
                      />
                      <span className="ml-2">Request a Call</span>
                    </label>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#111111] text-white font-bold py-2 px-4 rounded w-full"
                    >
                      Submit
                    </button>
                    {result}
                  </div>
                </form>
              )}

              {tab === 'services' && (
                <form onSubmit={onSubmit}>
                  <input type="hidden" name="subject" value="Procurement Services Form" />
                  <div className="mb-4">
                    <input
                      type="text"
                      name="luxuryItems"
                      placeholder="Luxury Items"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={luxuryItems}
                      onChange={(e) => setLuxuryItems(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <select
                      className="px-4 py-2 bg-gray-200 rounded-lg focus:outline-none w-full"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      name="nationality"
                      required
                    >
                      <option value="">Select Nationality</option>
                      {nationalities.map((nat) => (
                        <option key={nat.country} value={nat.country}>
                          {nat.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number"
                      className="px-4 py-2 bg-gray-200 rounded-lg w-full focus:outline-none"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="requestCall"
                        className="form-checkbox"
                        checked={requestCall}
                        onChange={() => setRequestCall(!requestCall)}
                      />
                      <span className="ml-2">Request a Call</span>
                    </label>
                  </div>
                  <div className="mt-8">
                    <button
                      type="submit"
                      className="bg-black hover:bg-[#111111] text-white font-bold py-2 px-4 rounded w-full"
                    >
                      Submit
                    </button>
                    {result}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;
