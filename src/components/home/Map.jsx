// components/Map.js
import React from 'react';

const Map = () => {
  const states = ["Punjab", "Delhi", "Gurjrat", "Indore"];

  return (
    <div className="w-full">
      <div className="h-auto md:h-[780px]">
        <div className="w-full md:w-[610px] mx-auto my-10 flex flex-col gap-3">
          <h1 className="text-black text-[40px] font-[800] text-center">
            Our Global Reach
          </h1>
          <p className="text-[#00000066] font-[400] text-[24px] text-center leading-[22px]">
            Discover the destinations we service around the world.
          </p>
        </div>

        <div className=" flex   flex-col md:flex-row justify-between relative gap-12 w-full md:w-[810px] mx-auto my-10 " >
             <img src="/Mexi.png" alt="mexico" className='absolute   left-0 top-[60%]' />
              <img src="/map.png" alt="img" className="w-full md:w-auto" />
              <img src="/paris.png" alt="mexico" className='absolute   left-20 top-[80%]' />
              <img src="/Aus.png" alt="mexico" className='absolute   left-[60%] top-[90%]' />
              <img src="/India.png" alt="mexico" className='absolute w-[80px]  right-10 top-[50%]' />
        </div>
      </div>
    </div>
  );
};

export default Map;

