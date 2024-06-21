import React from "react";

const Footer = () => {
  return(
  <>
   <div className="h-[800px]  bg-black rounded-t-3xl ">
    <div className=" justify-center items-center pt-[5rem] pb-[3rem]">
      <div className="text-4xl text-gray-200 text-center">You're important to us!</div>
      <div className="text-gray-400 text-xl text-center mt-5">Subscribe us to get notified about exciting things..</div>
    </div>
    <div className="text-3xl text-gray-200 text-center">Newsletter</div>
    <div className=" flex justify-center items-center mt-5">
        <div className="relative"> 
            <div className="absolute ">
                 <i className="fa fa-search text-white z-20 hover:text-white"></i>
            </div>
          <input type="text" className="h-14 w-[55rem] pl-10 rounded-full text-white bg-black z-0 border-2 border-white focus:shadow focus:outline-none" placeholder="Enter your email"/>
            <div className="absolute top-0 right-0">
                
                <button className="h-14 w-[13rem] text-black rounded-full bg-white hover:bg-gray-200">Receive newsletters</button>
                
            </div>
        </div>
    </div>
    <div className=" pt-10   text-center">
    <div className="text-4xl text-gray-200 pb-[3rem] ">Start your journey today, don’t miss out!</div>
    <div>
    <button type="button" className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
    {/* <svg className="w-4 h-4 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg> */}
    Start Booking Hotels
    </button>
    </div>
    </div>
    <div className=" ml-[15rem] gap-x-[7rem] flex mt-[5rem]">
    <div className='w-[20rem]'>
      <div className="text-xl text-gray-200 pb-8 "><b>LuxuryHotelConcierge</b></div>
      <div className="text-gray-400 leading-relaxed">LuxuryHotelConcierge is a cutting-edge cloud-based platform designed to revolutionize video collaboration.</div>
    </div>
    <div className="leading-loose">
      <div className="text-gray-200"><b>Company</b></div>
      <div className="text-gray-400">Blog</div>
      <div className="text-gray-400">Careers</div>
      <div className="text-gray-400">About Us</div>
    </div>

    <div className="leading-loose">
      <div className="text-gray-200"><b>Product</b></div>
      <div className="text-gray-400">Integrations</div>
      <div className="text-gray-400">Pricing</div>
      <div className="text-gray-400">Features</div>
    </div>
    <div className="leading-loose">
      <div className="text-gray-200"><b>Support</b></div>
      <div className="text-gray-400">Help Center</div>
      <div className="text-gray-400">Contact Us</div>
      <div className="text-gray-400">Status</div>
    </div>
    </div>
    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    <div className="text-gray-500 mt-7">Copyright © 2023 LuxuryHotelConcierge. All rights reserved</div>
    
  </div>
  </>
  )
};

export default Footer;
