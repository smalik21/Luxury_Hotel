"use client"
import React, {useState, useEffect} from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const Yards = () => {
  const hotels=[
    {
      id:1,
      name:"Blue Origin Farms",
      place:"Jakarta, Indonesia",
      image:"/y1.png"
    },
    {
      id:2,
      name:"Blue Origin Farms",
      place:"Jakarta, Indonesia",
      image:"/y2.png"
    },
    {
      id:3,
      name:"Blue Origin Farms",
      place:"Jakarta, Indonesia",
      image:"/y3.png"
    },
    {
      id:4,
      name:"Blue Origin Farms",
      place:"Jakarta, Indonesia",
      image:"/y4.png"
    },
    {
      id:5,
      name:"Blue Origin Farms",
      place:"Jakarta, Indonesia",
      image:"/y5.png"
    },
    {
      id:6,
      name:"Blue Origin Farms",
      place:"Jakarta, Indonesia",
      image:"/y6.png"
    }
  ];

   const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [numVisibleHotels, setNumVisibleHotels] = useState(3);

  const handlePrevClick = () => {
      if (!isAnimating) {
          setIsAnimating(true);
          setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + hotels.length) % hotels.length);
              setIsAnimating(false);
          }, 400);
      }
  };

  const handleNextClick = () => {
      if (!isAnimating) {
          setIsAnimating(true);
          setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
              setIsAnimating(false);
          }, 400);
      }
  };

  const getVisibleHotels = () => {
      const visibleHotels = [];
      for (let i = 0; i < numVisibleHotels; i++) {
          visibleHotels.push(hotels[(currentIndex + i) % hotels.length]);
      }
      return visibleHotels;
  };

  const updateNumVisibleHotels = () => {
      if (window.innerWidth < 768) {
          setNumVisibleHotels(1);
      } else if (window.innerWidth < 1024) {
          setNumVisibleHotels(2);
      } else {
          setNumVisibleHotels(3);
      }
  };

  useEffect(() => {
      updateNumVisibleHotels();
      window.addEventListener('resize', updateNumVisibleHotels);
      return () => window.removeEventListener('resize', updateNumVisibleHotels);
  }, []);
  return (
    <div className='w-full max-w-6xl m-auto mt-4 px-4 pb-8'>
      <div className='mt-10 mb-7'>
        <div className='text-3xl sm:text-3xl md:text-4xl mb-1'><b>Beautiful yards</b></div>
        <div className='text-md sm:text-lg text-gray-700'>20 Most viewed</div>
        <div className="relative flex justify-end bottom-14 right-4 gap-4 items-center z-10">
                    <div className="rounded-md py-1 px-2 border hover:bg-gray-200 border-black">
                        <MdKeyboardArrowLeft className="text-black text-2xl cursor-pointer" onClick={handlePrevClick} />
                    </div>
                    <div className="bg-black hover:bg-gray-800 rounded-md py-1 px-2 border border-black">
                        <MdKeyboardArrowRight className="text-white text-2xl cursor-pointer" onClick={handleNextClick} />
                    </div>
                </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {getVisibleHotels().map((item, index) => (
          <div key={item.id} className='w-full '>
          <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src={item.image} alt="Yard 1"/>
          <div className='text-lg mx-2 mt-1'><b>{item.name}</b></div>
          <div className='text-md mx-2 text-gray-500'>{item.place}</div>
        </div>
        ))}
       
      </div>
    </div>
  );
}

export default Yards;
