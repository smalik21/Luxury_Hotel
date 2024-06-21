import React from 'react';
import { PiLessThanBold, PiGreaterThanBold } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const TopRatedHotels = () => {
  return (
    <div className="w-full p-4">
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex flex-col justify-center mb-4 md:mb-0">
            <h1 className="text-3xl text-black font-bold">Top Rated Hotels</h1>
            <p className="text-black mt-2 text-sm">20+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous">
              <div className="bg-white text-black  w-7 h-7 flex items-center justify-center border border-black rounded-md hover:bg-gray-200 transition">
                <PiLessThanBold />
              </div>
            </button>
            <button aria-label="Next">
              <div className="bg-black text-white border border-black w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-700 transition">
                <PiGreaterThanBold />
              </div>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-5  mt-10 p-4 rounded-md">
          <div className="flex-shrink-0 w-[270px] h-[250px]">
            <img src="./top-hotel.jpeg" alt="top hotel" className=" h-[300px] rounded-b-full object-cover md:w-auto" />
          </div>

          <div className="flex flex-col justify-center gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-black">Dubai International Airport Hotel</h1>
              <p className="text-sm text-gray-600">Dubai International Airport Terminal 03</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-yellow-500" />
                <IoStar className="text-gray-400" />
              </div>
              <span className="bg-purple-600 text-white px-2 py-1 rounded-lg text-sm">Top Choice</span>
            </div>
            <p className="text-base text-black">Situated in upper midtown Manhattan, 483 metres from the Central Park, the Whitby Hotel is a short distance away from stores such as Saks Fifth Avenue and Bergdorf Goodman. The Whitby Hotel offers complimentary WiFi to all guests.</p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <FaCheck className="text-white bg-black rounded-full p-1" />
                <span className="text-sm">Front Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white bg-black rounded-full p-1" />
                <span className="text-sm">Free Wi-Fi in all rooms</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white bg-black rounded-full p-1" />
                <span className="text-sm">Swimming pool - indoor</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheck className="text-white bg-black rounded-full p-1" />
                <span className="text-sm">Check-in/out - express</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Book Now</button>
              <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-gray-100 transition">Add To Cart</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <img src="./Explore/Rectangle 5037.png" alt="Featured hotel 1" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5039.png" alt="Featured hotel 2" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5042.png" alt="Featured hotel 3" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5041.png" alt="Featured hotel 4" className="w-full h-full object-cover rounded-md" />
        </div>

        <p className="text-center flex items-center justify-center gap-1 text-[16px] text-black font-bold mt-4">See all <span><PiGreaterThanBold className='text-[10px]'/></span></p>
      </div>
    </div>
  );
};

export default TopRatedHotels;

