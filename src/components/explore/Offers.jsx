"use client"
import Link from 'next/link';
import React, {useState, useEffect} from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


const offer=[
    {
        id:1,
        name:"Enjoy nature Oceanfront Escapes",
        image:"/Explore/three.png"
    },
    {
        id:2,
        name:"Snowscapes Cabin",
        image:"/Explore/two.png"
    },
    {
        id:3,
        name:"Safaris at its best!",
        image:"/Explore/one.png"
    },
    {
        id:4,
        name:"Forts and Castles",
        image:"/Explore/one.png"
    }
];

const Offers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [numVisibleHotels, setNumVisibleHotels] = useState(3);

    const handlePrevClick = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + offer.length) % offer.length);
                setIsAnimating(false);
            }, 400);
        }
    };

    const handleNextClick = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % offer.length);
                setIsAnimating(false);
            }, 400);
        }
    };

    const getVisibleHotels = () => {
        const visibleHotels = [];
        for (let i = 0; i < numVisibleHotels; i++) {
            visibleHotels.push(offer[(currentIndex + i) % offer.length]);
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
        <div className='text-3xl sm:text-3xl md:text-4xl mb-1'><b>Special Offers</b></div>
        <div className='text-md sm:text-lg text-gray-700'>Most curated offer & plans only for you!</div>
        <div className=" flex justify-end bottom-14 right-4 gap-4 items-center z-10">
                    <div className="rounded-md py-1 px-2 border hover:bg-gray-200 border-black">
                        <MdKeyboardArrowLeft className="text-black md:text-2xl text-xl cursor-pointer" onClick={handlePrevClick} />
                    </div>
                    <div className="bg-black hover:bg-gray-800 rounded-md py-1 px-2 border border-black">
                        <MdKeyboardArrowRight className="text-white md:text-2xl text-xl cursor-pointer" onClick={handleNextClick} />
                    </div>
                </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {getVisibleHotels().map((item, index) => (
        <Link href="/contact">
            <div key={item.id} className='relative w-full max-w-md mx-auto '>
                <img className='shadow-2xl hover:scale-105 w-full h-auto rounded-md' src={item.image} alt="Yard 1"/>
                <div className=' text-lg mx-2 mt-1 absolute inset-0 flex items-center justify-center pl-5 pr-[10rem]'>
                    <span className='text-gray-500 text-xl font-bold'>{item.name}</span>
                </div>
            </div>
            </Link>
        ))}
       
      </div>
    </div>
  )
}

export default Offers