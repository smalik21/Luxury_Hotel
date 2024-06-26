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
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex flex-col justify-center mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl text-black font-bold mb-2">Must Visit Places</h1>
            <p className="text-black text-sm">2000+ hotels</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <button aria-label="Previous" onClick={handlePrevClick}>
              <div className="bg-white text-black border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <MdKeyboardArrowLeft />
              </div>
            </button>
            <button aria-label="Next" onClick={handleNextClick}>
              <div className="bg-black text-white border border-black rounded-md w-9 h-7 flex items-center justify-center">
                <MdKeyboardArrowRight />
              </div>
            </button>
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
