"use client"
import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaKey } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import DashBoard from '@/components/admin/DashBoard';
import Bookings from '@/components/admin/Bookings';
import Hotels from '@/components/admin/Hotels';
import Users from '@/components/admin/Users';




const Page = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderComponent = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashBoard/>;
      case 'bookings':
        return <Bookings/>;
      case 'hotels':
        return <Hotels/>;
      case 'users':
        return <Users />;
      default:
        return <Users/>;
    }
  };

  return (
    <div className='flex h-[100vh] bg-zinc-100 overflow-hidden'>
      {/* aside nav bar */}
      <div className='fixed h-full w-[10%] flex flex-col shadow-lg items-center gap-10 bg-[#FFFFFF]'>
        <h1 className='text-[20px] text-black my-4'>LHC</h1>
        <MdOutlineSpaceDashboard 
          className={`text-gray-500 text-3xl cursor-pointer ${currentView === 'dashboard' && 'text-black'}`} 
          onClick={() => setCurrentView('dashboard')}
        />
        <SlCalender 
          className={`text-gray-500 text-3xl cursor-pointer ${currentView === 'bookings' && 'text-black'}`} 
          onClick={() => setCurrentView('bookings')}
        />
        <FaKey 
          className={`text-gray-500 text-3xl cursor-pointer ${currentView === 'hotels' && 'text-black'}`} 
          onClick={() => setCurrentView('hotels')}
        />
        <HiOutlineUsers 
          className={`text-gray-500 text-3xl cursor-pointer ${currentView === 'users' && 'text-black'}`} 
          onClick={() => setCurrentView('users')}
        />
      </div>

      {/* main content area */}
      <div className='ml-[10%] w-[90%] h-full p-4 '>
        {renderComponent()}
      </div>
    </div>
  );
}

export default Page;
