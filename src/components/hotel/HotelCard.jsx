"use client"
import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { IoEarth } from "react-icons/io5";

const HotelCard = ({ data }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-full max-w-[921px] border border-gray-300 rounded-md flex flex-col gap-4 p-6 bg-white shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-[#000000E5] font-semibold text-2xl sm:text-3xl md:text-4xl">{data.name}</h1>
          <div
            className="flex items-center border border-gray-300 justify-center w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setLiked(!liked)}
          >
            {liked ? <FaHeart className="text-xl text-red-500" /> : <FaRegHeart className="text-xl" />}
          </div>
        </div>

        <div className="grid grid-cols-3  items-center justify-center gap-2 overflow-x-auto">
          {data.images.map((image, i) => (
            <img key={i} src={image} alt={`image-${i}`} className="object-cover h-32 sm:h-48 md:h-64 rounded-md flex-shrink-0"  />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button className="font-light text-xs sm:text-sm md:text-base rounded-full bg-gray-300 text-black px-4 py-1">{data.btn1}</button>
            <button className="font-light text-xs sm:text-sm md:text-base rounded-full bg-gray-300 text-black px-4 py-1">{data.btn2}</button>
          </div>
          <div className="flex items-center gap-1">
            <IoStarSharp className="text-xl text-yellow-300" />
            <IoStarSharp className="text-xl text-yellow-300" />
            <IoStarSharp className="text-xl text-yellow-300" />
            <IoStarSharp className="text-xl text-yellow-300" />
            <IoStarSharp className="text-xl text-gray-300" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-col items-start  sm:items-center    gap-3">
            <p className="text-[#000000E5] text-base sm:text-lg md:text-xl flex items-center"><IoEarth className="mr-2" />{data.heading2}</p>
            <p className="text-[#000000E5]  text-sm  sm:text-base md:text-lg">{data.heading3}</p>
          </div>
          <button className="bg-black text-white flex items-center justify-center rounded-full px-4 py-2 sm:px-6 sm:py-3">
            {data.btn3} <GoArrowUpRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
