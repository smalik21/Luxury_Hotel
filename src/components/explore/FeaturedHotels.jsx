import React from 'react';
import { PiLessThanBold } from "react-icons/pi";
import { PiGreaterThanBold } from "react-icons/pi";

const FeaturedHotels = () => {
  return (
    <div className="w-full p-4 mt-14">
      <div className=" max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex flex-col justify-center mb-4 md:mb-0">
            <h1 className="text-3xl text-black font-bold">Featured Hotels</h1>
            <p className="text-black text-sm">2000+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous">
              <div className="bg-white text-black border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <PiLessThanBold />
              </div>
            </button>
            <button aria-label="Next">
              <div className="bg-black text-white border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <PiGreaterThanBold />
              </div>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
          <img src="./Explore/Rectangle 5037.png" alt="Featured hotel 1" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5039.png" alt="Featured hotel 2" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5042.png" alt="Featured hotel 3" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5041.png" alt="Featured hotel 4" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5038.png" alt="Featured hotel 5" className="w-full h-full object-cover rounded-md" />
          <img src="./Explore/Rectangle 5040.png" alt="Featured hotel 6" className="w-full h-full object-cover rounded-md" />
          <div className="absolute flex items-center justify-center gap-3 w-[90%] sm:w-[357px] h-[76px] top-[85%] left-[5%] sm:top-[606px] sm:left-[252px] rounded-md bg-white">
            <div className="flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-medium text-black">Grand vhit Hotel</h3>
              <p className="text-sm sm:text-md text-[#00000099]">starts at 99$ / night</p>
            </div>
            <button className="px-3 py-2 text-black border border-black">Start Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotels;

