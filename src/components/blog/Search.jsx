import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const values = ["Quick Topics", "Design Thinking", "Technology", "Web3", "Programming", "AI"];

  return (
    <>
      <div className='mx-auto mt-5 w-full max-w-[503px] relative h-[49px] flex items-center justify-center px-4 sm:px-0'>
        <input 
          type="search" 
          placeholder='search...' 
          className='w-full border focus:outline-none px-5 py-3 text-gray-500 rounded-l-full rounded-r-full' 
        />
        <div className='flex items-center w-[50px] sm:w-[100px] h-full justify-center absolute right-0 bg-black rounded-r-full'>
          <IoSearch className='text-white text-xl sm:text-3xl' />
        </div>
      </div>

      <div className='flex flex-wrap w-full mx-auto mt-10 justify-center gap-3 px-4'>
        {values.map((value, i) => (
          <button 
            key={i} 
            className='px-4 py-2 sm:px-5 sm:py-3 text-black bg-white border rounded-full hover:bg-[#00000066] hover:text-white'
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
}

export default Search;
