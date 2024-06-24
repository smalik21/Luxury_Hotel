"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-between items-center p-6 absolute w-full top-0 z-10 bg-opacity-50 px-8 mt-4">
            <Link href="/home" className="lg:text-2xl text-lg font-bold text-white text-[24px]">LuxuryHotelConcierge</Link>
            <nav className="hidden lg:flex flex-grow justify-center space-x-4 text-[16px] gap-5">
                <Link href="/" className={`text-white ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
                <Link href="/explore" className={`text-white ${pathname === '/explore' ? 'font-bold' : ''}`}>Explore</Link>
                <Link href="/destinations" className={`text-white ${pathname === '/destinations' ? 'font-bold' : ''}`}>Destinations</Link>
                <Link href="/blog" className={`text-white ${pathname === '/blog' ? 'font-bold' : ''}`}>Blog</Link>
                <Link href="/contact" className={`text-white ${pathname === '/contact' ? 'font-bold' : ''}`}>Contact Us</Link>
            </nav>
            <div className="hidden lg:flex items-center space-x-4 gap-7">
                <Link href="/signin" className="text-white">Sign In</Link>
                <button className="bg-white text-black px-7 py-1 rounded-full"><Link href="/signup">Join</Link></button>
            </div>
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-70 flex justify-end">
                    <div className="bg-black bg-opacity-50 w-full h-full" onClick={toggleMenu}></div>
                    <div className="bg-white w-64 h-full p-6 flex flex-col absolute right-0">
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu} className="text-black focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4 text-[16px] mt-4">
                            <Link href="/home" className={`text-black px-2 py-1 rounded-md ${pathname === '/home' ? 'font-bold' : ''} hover:bg-gray-200`} onClick={toggleMenu}>Home</Link>
                            <Link href="/explore" className={`text-black px-2 py-1 rounded-md ${pathname === '/explore' ? 'font-bold' : ''} hover:bg-gray-200`} onClick={toggleMenu}>Explore</Link>
                            <Link href="/destinations" className={`text-black px-2 py-1 rounded-md ${pathname === '/destinations' ? 'font-bold' : ''} hover:bg-gray-200`} onClick={toggleMenu}>Destinations</Link>
                            <Link href="/blog" className={`text-black px-2 py-1 rounded-md ${pathname === '/blog' ? 'font-bold' : ''} hover:bg-gray-200`} onClick={toggleMenu}>Blog</Link>
                            <Link href="/contact" className={`text-black px-2 py-1 rounded-md ${pathname === '/contact' ? 'font-bold' : ''} hover:bg-gray-200`} onClick={toggleMenu}>Contact Us</Link>
                            <Link href="/signin" className="text-black px-2 py-1 rounded-md hover:bg-gray-200" onClick={toggleMenu}>Sign In</Link>
                            <button className="bg-black text-white px-7 py-1 rounded-full mt-4" onClick={toggleMenu}>
                                <Link href="/signup">Join</Link>
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
