import React from 'react';

const Yards = () => {
  return (
    <div className='w-full max-w-[950px] m-auto mt-4 px-4'>
      <div className='mt-10 mb-7'>
        <div className='text-3xl sm:text-3xl md:text-4xl mb-1'><b>Beautiful yards</b></div>
        <div className='text-md sm:text-lg text-gray-700'>20 Most viewed</div>
      </div>
      <div className='flex flex-wrap justify-center gap-4'>  
        <div className='w-full sm:w-[270px] mx-3'>
          <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src="/y1.png" alt="Yard 1"/>
          <div className='text-lg mx-2 mt-1'><b>Blue origin Farms</b></div>
          <div className='text-md mx-2 text-gray-500'>Jakarta, Indonesia</div>
        </div>
        <div className='w-full sm:w-[270px] mx-3'>
          <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src="/y2.png" alt="Yard 2"/>
          <div className='text-lg mx-2 mt-1'><b>Blue origin Farms</b></div>
          <div className='text-md mx-2 text-gray-500'>Jakarta, Indonesia</div>
        </div>
        <div className='w-full sm:w-[270px] mx-3'>
          <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src="/y3.png" alt="Yard 3"/>
          <div className='text-lg mx-2 mt-1'><b>Blue origin Farms</b></div>
          <div className='text-md mx-2 text-gray-500'>Jakarta, Indonesia</div>
        </div>
        <div className='w-full sm:w-[270px] mx-3'>
          <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src="/y4.png" alt="Yard 4"/>
          <div className='text-lg mx-2 mt-1'><b>Blue origin Farms</b></div>
          <div className='text-md mx-2 text-gray-500'>Jakarta, Indonesia</div>
        </div>
        <div className='w-full sm:w-[270px] mx-3'>
          <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src="/y5.png" alt="Yard 5"/>
          <div className='text-lg mx-2 mt-1'><b>Blue origin Farms</b></div>
          <div className='text-md mx-2 text-gray-500'>Jakarta, Indonesia</div>
        </div>
        <div className='w-full sm:w-[270px] mx-3'>
          <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src="/y6.png" alt="Yard 6"/>
          <div className='text-lg mx-2 mt-1'><b>Blue origin Farms</b></div>
          <div className='text-md mx-2 text-gray-500'>Jakarta, Indonesia</div>
        </div>
      </div>
    </div>
  );
}

export default Yards;
