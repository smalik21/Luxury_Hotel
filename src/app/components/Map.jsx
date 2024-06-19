// components/Map.js
import React from 'react';

const Map = () => {
  const states = ["Punjab", "Delhi", "Gurjrat", "Indore"];

  return (
    <div className="w-full">
      <div className="h-auto md:h-[880px]">
        <div className="w-full md:w-[610px] mx-auto my-10 flex flex-col gap-3">
          <h1 className="text-black text-[40px] font-[800] text-center">
            Our Global Reach
          </h1>
          <p className="text-[#00000066] font-[400] text-[24px] text-center leading-[22px]">
            Discover the destinations we service around the world.
          </p>
        </div>

        <div className="border flex flex-col md:flex-row justify-between gap-12 w-full md:w-[810px] mx-auto my-10">
          <img src="/map.png" alt="img" className="w-full md:w-auto" />
          <div className="mt-10 flex  flex-col mr-10 gap-3  md:mt-10">
            {states.map((state, i) => {
              return (
                <button
                  key={i}
                  className="border w-[100px] h-10 hover:bg-red-400 hover:text-white border-black text-center  rounded-md"
                >
                  {state}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

