"use client"
import React, { useState } from 'react';


const VirtualCard = ({ data, onContactClick }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 mx-auto w-full max-w-[921px] p-5 md:p-0">
      <div className="w-full md:w-auto">
        <img src={data.img} alt="image" className="object-cover rounded-md w-full md:w-[150px] lg:w-[350px]" />
      </div>

      <div className="flex flex-col justify-center items-start w-full md:w-[450px] space-y-2">
        <h1 className="text-2xl text-black font-semibold">{data.heading}</h1>
        <p className="text-gray-400 text-sm">{data.time} | Free</p>
        <p className="text-gray-400 text-sm">{data.info}</p>
      </div>

      <div className="w-full md:w-auto flex justify-center md:justify-start">
        <button
          className="text-white bg-black flex items-center justify-center rounded-md w-[180px] h-10 mt-4 md:mt-0"
          onClick={onContactClick}
        >
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default VirtualCard;
