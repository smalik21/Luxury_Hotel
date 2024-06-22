import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return(
  <>
   <div className="h-[600px] md:h-[835px]  bg-black rounded-t-3xl ">
    <div className=" justify-center items-center pt-10 md:pt-[5rem] pb-5 md:pb-[3rem]">
      <div className="text-2xl md:text-4xl text-gray-200 text-center">You're important to us!</div>
      <div className="text-gray-400 text-lg md:text-xl text-center mt-5">Subscribe us to get notified about exciting things..</div>
    </div>
    <div className="text-2xl md:text-3xl text-gray-200 text-center">Newsletter</div>
    <div className=" flex justify-center items-center mt-5">
        <div className="relative"> 
            <div className="absolute ">
                 <i className="fa fa-search text-white z-20 hover:text-white"></i>
            </div>
          <input type="text" className="h-10 w-[20rem] md:h-14 md:w-[55rem] md:pl-10 pl-3 rounded-full text-white bg-black z-0 border-2 border-white focus:shadow focus:outline-none" placeholder="Enter your email"/>
            <div className="absolute top-0 right-0">
                
                <button className="md:h-14 md:w-[13rem] h-10 w-[7rem] text-black rounded-full bg-white hover:bg-gray-200 text-xs md:text-lg">Receive newsletters</button>
                
            </div>
        </div>
    </div>
    <div className=" md:pt-10 pt-5   text-center">
    <div className="md:text-4xl text-gray-200 pb-3 md:pb-[3rem] ">Start your journey today, don’t miss out!</div>
    <div className="">
    <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 md:font-medium rounded-lg text-sm md:text-sm md:px-5 md:py-2.5 p-1.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
    {/* <svg className="w-4 h-4 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg> */}
    Start Booking Hotels
    </button>
    </div>
    </div>
    <div className="pl-1 md:ml-[15rem] gap-x-2 md:gap-x-[7rem] flex md:mt-[5rem]">
    <div className='md:w-[20rem]'>
      <div className="md:text-lg text-xs text-gray-200 md:pb-8 pb-2"><b>LuxuryHotelConcierge</b></div>
      <div className="text-gray-400 leading-relaxed md:text-lg text-xs">LuxuryHotelConcierge is a cutting-edge cloud-based platform designed to revolutionize video collaboration.</div>
    </div>
    <div className="leading-relaxed">
      <div className="text-gray-200 md:text-lg text-xs"><b>Company</b></div>
      <div className="text-gray-400  md:text-lg text-xs  ">Blog</div>
      <div className="text-gray-400 md:text-lg text-xs">Careers</div>
      <div className="text-gray-400 md:text-lg text-xs">About Us</div>
    </div>

    <div className="leading-relaxed">
      <div className="text-gray-200 md:text-lg text-xs"><b>Product</b></div>
      <div className="text-gray-400 md:text-lg text-xs">Integrations</div>
      <div className="text-gray-400 md:text-lg text-xs">Pricing</div>
      <div className="text-gray-400 md:text-lg text-xs">Features</div>
    </div>
    <div className="leading-relaxed">
      <div className="text-gray-200 md:text-lg text-xs"><b>Support</b></div>
      <div className="text-gray-400 md:text-lg text-xs">Help Center</div>
      <div className="text-gray-400 md:text-lg text-xs">Contact Us</div>
      <div className="text-gray-400 md:text-lg text-xs">Status</div>
    </div>
    </div>
    <hr className="h-px md:my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div className="flex">
    <div className="text-gray-500 mt-2 md:mt-7 md:text-lg text-xs ">Copyright © 2023 LuxuryHotelConcierge. All rights reserved</div>
    <div className="text-gray-500 mt-2 md:mt-7 md:text-lg text-xs ">Terms</div>
    <div className="text-gray-500 mt-2 md:mt-7 md:text-lg text-xs ">Cookies</div>
    <div className="text-gray-500 mt-2 md:mt-7 md:text-lg text-xs ">Privacy Policies</div>
    <div className=""><FaSquareFacebook /></div>
    <div><CiTwitter /></div>
    </div>
  </div>
  </>
  )
};

export default Footer;
