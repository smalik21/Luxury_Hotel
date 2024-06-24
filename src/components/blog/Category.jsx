import React from 'react'

const Category = () => {
  const values = ["Hotels guide", "Travel guide", "Booking guide", "Booking guide", "Offers guide", "Top safari’s"];

  return (
    <div className='w-full max-w-[1023px] h-auto flex flex-col justify-center items-center gap-5 mx-auto px-5  py-10'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-bold text-xl sm:text-5xl text-[#2B2C34]'>Browse the category</h1>
        <p className='text-lg sm:text-2xl text-[#2B2C34E5] font-medium cursor-pointer '>see all</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full mt-10'>
        {values.map((value, i) => (
          <button key={i} className='rounded-full border text-base sm:text-xl border-gray-400 text-gray-600 px-5 py-3 hover:bg-gray-400 hover:text-white transition-colors'>
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Category;
