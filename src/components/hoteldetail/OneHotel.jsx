"use client"
import { useState, useEffect  } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Highlight from '../contact/Highlight';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';



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

const dummydata=[
    {
        "id":1, 
        "name":"Meluha - The Fern", 
        "email":"hotel@gmail.com",
        "location":{
            "city":"Mumbai",
            "country":"India"
        },
        "reviewRatings":4.3,
        "stars":4,
        "rooms":[
            "Deluxe Rooms","Super Delux", "Studio Suites","Deluxe Lounge Suite","Junior Suite Le Mirador","Deluxe Suite Le Mirador","Roof Garden Suite"]
,
        "about":"With spectacular views of Arabian Sea and beautiful Mumbai, Taj Lands End Mumbai offers luxury accommodation to meet the needs of business and leisure travellers. The contemporarily decorated guest rooms at this 5-star property are equipped with comfy bedding, flat-screen TV and an en suite marble bathroom..",
        "address":"Band Stand,400 050,Mumbai",
        "phone":66681234,
        "fax": 66994488,
        "price":99,
        "facilities":[
            "offers fitness center",
            "Breakfast",
            "AC",
            "Free WiFi",
            "Spa"
        ]
    } 
]

const StarRating = ({ rating }) => {
    
    const stars = [];
  
    for (let i = 0; i < rating; i++) { 
      stars.push(<FaStar key={i} className="flex text-yellow-500" />);
    }
  
    return <div className="flex pt-2 justify-center items-center">{stars}</div>;
  };



const OneHotel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [data, setData] = useState([]);
    const [numVisibleHotels, setNumVisibleHotels] = useState(5);
    const [highlighted, setHighlighted] = useState(null);

    const handleHighlight = (id) => {
        setHighlighted(id);
    };
    
    const api = `http://localhost:4000`;

    const getVisibleHotels = () => {
        const visibleHotels = [];
        for (let i = 0; i < numVisibleHotels; i++) {
            visibleHotels.push(hotels[(currentIndex + i) % hotels.length]);
        }
        return visibleHotels;
    };

    const updateNumVisibleHotels = () => {
        if(window.innerWidth < 730){
            setNumVisibleHotels(1);
        }
        else if (window.innerWidth < 768) {
            setNumVisibleHotels(3);
        } else if (window.innerWidth < 1024) {
            setNumVisibleHotels(5);
        } else {
            setNumVisibleHotels(5);
        }
    };
  
    useEffect(() => {
        updateNumVisibleHotels();
        window.addEventListener('resize', updateNumVisibleHotels);
        return () => window.removeEventListener('resize', updateNumVisibleHotels);
    }, []);

    const handleFilter = async (city) => {
        // ${api}/search/hotels/?city=${searchText}&check_in=${checkInDate}&check_out=${checkOutDate}
    
        try {
          const res = await fetch(`${api}/search/hotels/id`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const message = await res.json();
          console.log("message: ", message);
          setData(message);
        } catch (error) {
          console.error("Error:", error);
          // setResponseMessage("An error occurred");
        }
      };

      
    return (
        <div className='h-full w-full '>
        <section className="relative h-[500px] w-auto z-0">
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/top-hotel.jpeg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
                {dummydata.map(item=>(
                    <div key={item.id} className="relative flex flex-col items-center justify-center h-full  text-white pointer-events-auto">
                        <h1 className="md:text-[70px] text-[40px] font-bold mb-8 mt-[130px]">{item.name}</h1>
                        <p className="text-lg md:text-[19px] text-[14px]">{item.location.city}, {item.location.country}</p>
                        
                    </div>
                ))}
                
           
        </section>
        <div className=' mx-5 my-10'>
        <div className='grid grid-cols-1 sm:grid-cols-3  md:grid-cols-5 gap-2'>
      {getVisibleHotels().map((item, index) => (
          <div key={item.id} className='w-full '>
          <img className='shadow-2xl hover:scale-105 md:w-[18rem] w-full  sm:w-[15rem] px-2 h-auto rounded-md' src={item.image} alt="Yard 1"/>
          
        </div>
        ))}
       
      </div>
            

        </div>
        {dummydata.map(item=>(
            <>
            <div className=' md:flex '>
            <div className='sm:w-3/5 m-auto  text-center  md:mx-[5rem] text-black '>
                <div className='text-4xl font-bold '>About </div>
                <div className='pt-5'>{item.about}</div>
                <div>
                <StarRating  rating={item.stars} />
                </div>
                
               

            </div>
            <div className=' mt-5 sm:w-2/5 text-center m-auto md:mx-[5rem] text-black  '>
                <div className='text-4xl font-bold '>Contact </div>
                <div className='pt-5 '> {item.address}</div>
                <div className=' '>Phone : {item.phone}</div>
                <div className=' '>Mail : {item.email}</div>
                
                <Link href="/checkout"><button className="bg-black text-white m-auto  my-10  flex items-center justify-center rounded-full px-4 py-2 sm:px-6 sm:py-3">
            $ {item.price} per night <GoArrowUpRight className="ml-2" />
          </button></Link>


            </div>
            
        </div>
         <div className='px-10 md:pb-10 md:pt-10 py-10 md:mr-[10rem] sm:mr-10  md:text-lg text-md flex flex-wrap'>
         {item.rooms.map((value, index) => (
             <Highlight 
             key={index} 
             name={value} 
             isHighlighted={highlighted === index}  
             onClick={() => handleHighlight(index)}  
             />
         ))}
         </div>
         </>
        ))}
        
        </div>
       
    );
};

export default OneHotel;