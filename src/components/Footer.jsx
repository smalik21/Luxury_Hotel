import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black rounded-t-3xl px-4 py-10 md:px-20 md:py-16">
      <div className="text-center">
        <div className="text-2xl md:text-4xl text-gray-200">You're important to us!</div>
        <div className="text-lg md:text-xl text-gray-400 mt-3">
          Subscribe to get notified about exciting things..
        </div>
      </div>

      <div className="text-2xl md:text-3xl text-gray-200 text-center mt-10">Newsletter</div>
      <div className="flex justify-center items-center mt-5">
        <div className="relative w-full max-w-lg md:max-w-3xl">
          <input
            type="text"
            className="w-full h-10 md:h-14 pl-3 md:pl-10 pr-32 rounded-full text-white bg-black border-2 border-white focus:shadow focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="absolute top-0 right-0 h-10 md:h-14 w-28 md:w-52 text-black rounded-full bg-white hover:bg-gray-200 text-xs md:text-lg">
            Receive newsletters
          </button>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-16">
        <div className="text-2xl md:text-4xl text-gray-200 pb-3">Start your journey today, don’t miss out!</div>
        <button
          type="button"
          className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Start Booking Hotels
        </button>
      </div>

      <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mt-10 md:mt-16 gap-8 md:gap-0">
        <div className="md:w-1/4">
          <div className="text-lg text-gray-200 pb-2 md:pb-8"><b>LuxuryHotelConcierge</b></div>
          <div className="text-gray-400 leading-relaxed text-sm md:text-lg">
            LuxuryHotelConcierge is a cutting-edge cloud-based platform designed to revolutionize video collaboration.
          </div>
        </div>
        <div className="leading-relaxed">
          <div className=" text-gray-200 text-lg pb-2"><b>Company</b></div>
          <Link href="/blog"><div className="cursor-pointer text-gray-400 text-sm md:text-lg">Blog</div></Link>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Careers</div>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">About Us</div>
        </div>
        <div className="leading-relaxed">
          <div className="text-gray-200  text-lg pb-2"><b>Product</b></div>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Integrations</div>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Pricing</div>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Features</div>
        </div>
        <div className="leading-relaxed">
          <div className="text-gray-200 text-lg pb-2"><b>Support</b></div>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Help Center</div>
          <Link href="contact"><div className="text-gray-400 cursor-pointer text-sm md:text-lg">Contact Us</div></Link>
          <div className="text-gray-400 cursor-pointer text-sm md:text-lg">Status</div>
        </div>
      </div>

      <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-xs md:text-lg">© 2023 LuxuryHotelConcierge. All rights reserved</div>
        <div className="flex gap-4">
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">Terms</div>
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">Cookies</div>
          <div className="text-gray-500 text-xs md:text-lg cursor-pointer">Privacy Policies</div>
          <div className="text-gray-500 flex items-center gap-2">
            <FaSquareFacebook className="text-xl md:text-2xl" />
            <FaTwitter className="text-xl md:text-2xl" />
            <FaYoutube  className="text-xl md:text-2xl" />
            <RiInstagramFill className="text-xl md:text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
