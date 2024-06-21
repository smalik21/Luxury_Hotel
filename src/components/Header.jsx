"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="flex justify-between items-center p-6 absolute w-full top-0 z-10 bg-opacity-50 px-12">
            <h1 className="text-3xl font-bold text-white text-[24px]">LuxuryHotelConcierge</h1>
            <nav className="flex-grow flex justify-center space-x-4 text-[16px] gap-5">
                <Link href="/" className={`hover:underline text-white ${pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
                <Link href="/explore" className={`hover:underline text-white ${pathname === '/explore' ? 'font-bold' : ''}`}>Explore</Link>
                <Link href="/destinations" className={`hover:underline text-white ${pathname === '/destinations' ? 'font-bold' : ''}`}>Destinations</Link>
                <Link href="/blog" className={`hover:underline text-white ${pathname === '/blog' ? 'font-bold' : ''}`}>Blog</Link>
                <Link href="/contact" className={`hover:underline text-white ${pathname === '/contact' ? 'font-bold' : ''}`}>Contact Us</Link>
            </nav>
            <div className="flex items-center space-x-4 gap-7">
                <Link href="/signin" className="hover:underline text-white">Sign In</Link>
                <button className="bg-white text-black px-7 py-1 rounded-full"><Link href="/signup">Join</Link></button>
            </div>
        </header>
    );
};

export default Header;
