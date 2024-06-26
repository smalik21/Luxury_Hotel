'use client';

import Header from "@/components/Header";
import Hero from "@/components/hotel/HeroSection";
import Search from "@/components/hotel/Search";
import React, { useState, useEffect, useCallback } from "react";
import HotelData from "./data.json";
import HotelCard from "@/components/hotel/HotelCard";
import Footer from "@/components/Footer";
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Page = () => {
  const [visibleCards, setVisibleCards] = useState(5);
  const [data, setData] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [searchInput, setSearchInput] = useState(searchQuery);

  const api = `http://localhost:4000`;

  useEffect(() => {
    if (searchQuery) {
      handleFilter(searchQuery);
    }
  }, []); // Run once on mount

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    const params = new URLSearchParams(searchParams);
    params.set('search', value);
    router.push(`?${params.toString()}`);
  };

  const handleFilter = useDebouncedCallback(async (searchValue = searchInput) => {
    if (searchInput === "") return

    try {
      const res = await fetch(`${api}/search/hotels?city=${searchValue}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();
      console.log("response: ", response);
      setData(response);
    } catch (error) {
      console.error("Error:", error);
      // setResponseMessage("An error occurred");
    }
  }, 300);

  // Debounce effect for filtering
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchInput !== searchQuery) {
        handleFilter();
      }
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  return (
    <div>
      <Header />
      <Hero />
      <Search
        searchInput={searchInput}
        handleInput={handleInput}
        handleFilter={handleFilter}
      />
      <div className="flex flex-col gap-4 p-4">
        {data &&
          HotelData.slice(0, visibleCards).map((data, i) => (
            <HotelCard key={i} data={data} />
          ))}
        {visibleCards < HotelData.length && (
          <button
            className="text-center text-xl text-black font-normal py-2 rounded-md"
            onClick={showMoreCards}
          >
            See More
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
