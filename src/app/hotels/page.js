"use client";
import Header from "@/components/Header";
import Hero from "@/components/hotel/HeroSection";
import Search from "@/components/hotel/Search";
import React, { useState } from "react";
import HotelData from "./data.json";
import HotelCard from "@/components/hotel/HotelCard";
import Footer from "@/components/Footer";


const Page = () => {
  const [visibleCards, setVisibleCards] = useState(5);
  const [data, setData] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const api = `http://localhost:4000`;
 
  const showMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);
  };

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFilter = async (city) => {
    // ${api}/search/hotels/?city=${searchText}&check_in=${checkInDate}&check_out=${checkOutDate}

    try {
      const res = await fetch(`${api}/search/hotels/?city=${searchInput}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const message = await res.json();
      console.log("message: ", message);
      setData(message);
    } catch (error) {
      console.error("Error:", error);
      // setResponseMessage("An error occurred");
    }
  };

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
            className="text-center text-xl text-black font-normal  py-2 rounded-md "
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
