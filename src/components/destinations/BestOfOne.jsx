"use client"
import React, {useState} from 'react'

const hotels=[
    {
        id:1,
        image:"/y1.png",
        place:"New York, USA",
        name:"Molokini and Tutle Town Snorkeling Adventure Aboard",
        rating:4.8,
        people:243,
        days:4,
        price:225
    },
    {
        id:2,
        image:"/y1.png",
        place:"New York, USA",
        name:"Molokini and Tutle Town Snorkeling Adventure Aboard",
        rating:4.8,
        people:243,
        days:4,
        price:225
    },
    {
        id:3,
        image:"/y1.png",
        place:"New York, USA",
        name:"Molokini and Tutle Town Snorkeling Adventure Aboard",
        rating:4.8,
        people:243,
        days:4,
        price:225
    }

];

const BestOfOne = () => {
    const [numVisibleCards, setNumVisibleCards] = useState(3);

    const updateNumVisibleCards = () => {
        if (window.innerWidth < 1024) {
            setNumVisibleCards(1);
        } else {
            setNumVisibleCards(3);
        }
    };
  return (
   <div className="max-w-5xl sm:mx-auto mx-6 p-4 pb-14 pt-[80px] relative">
        <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="md:text-4xl text-2xl font-bold">Best Of New York</h2>
                    <p className="md:text-lg text-md">2000+ hotels</p>
                </div>
                <div className="flex space-x-2">
                    <div>See all</div>
                </div>
        </div>
        <div className={`grid grid-cols-1 ${numVisibleCards > 1 ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3' : ''} gap-6 transition-transform duration-400 ease-in-out`}>
                {hotels.map((item) => (
                    <div key={item.id} className="bg-white  rounded-xl h-[30rem] border border-gray-400  items-center transform transition-transform duration-400 ease-in-out hover:scale-105 cursor-pointer">
                        <img src={item.image} alt={item.name} className="w-full h-[270px] rounded-lg mr-4" />
                        <div>
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-gray-500">{item.hotels}</p>
                        </div>
                    </div>
                ))}
            </div>
   </div>
  )
}

export default BestOfOne