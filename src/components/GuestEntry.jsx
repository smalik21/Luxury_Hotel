import { FaPlay } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const GuestPage = () => {
    return (
        <div className="relative h-screen w-full">
            <img
                src="/guest-page-bg.png"
                alt="Luxury Hotel"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <div className="absolute top-6 left-6 text-lg font-semibold">
                    LuxuryHotelConcierge
                </div>
                <button className="bg-white opacity-40 text-black rounded-full p-7 mb-4">
                    <FaPlay className="text-black opacity-100" size={14} />
                </button>
                <div className="absolute bottom-20 flex flex-col mb-6 items-center space-y-4">
                    <div className="text-[18px] max-w-[330px]">
                        Elevate your travel experience with our personalized concierge services.
                    </div>
                    <Link href='/signup' className="bg-black text-center text-white text-lg py-2 px-6 rounded-full w-[320px] text-[13px]">
                        Sign up
                    </Link>
                    <Link href='/home' className="border border-white text-center text-white text-lg py-2 px-6 rounded-full w-[320px] text-[13px]">
                        Guest
                    </Link>
                </div>
                <div className="absolute left-7 bottom-5 flex space-x-4 text-sm">
                    <Link href="#" className="hover:underline">Policy</Link>
                    <Link href="#" className="hover:underline">Legal</Link>
                </div>
                <div className="absolute right-7 bottom-5 flex space-x-4 text-white">
                    <a href="https://www.facebook.com" target="_blank" >
                        <FaFacebookF size={16} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" >
                        <FaTwitter size={16} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" >
                        <FaYoutube size={16} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" >
                        <FaInstagram size={16} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GuestPage;
