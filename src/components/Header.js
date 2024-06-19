const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 absolute w-full top-0 z-10 bg-opacity-50 px-12">
            <h1 className="text-3xl font-bold text-white text-[24px]">LuxuryHotelConcierge</h1>
            <nav className="flex-grow flex justify-center space-x-4 text-[16px] gap-5">
                <a href="#" className="hover:underline text-white">Home</a>
                <a href="#" className="hover:underline text-white">Explore</a>
                <a href="#" className="hover:underline text-white">Destinations</a>
                <a href="#" className="hover:underline text-white">Blog</a>
                <a href="#" className="hover:underline text-white">Contact Us</a>
            </nav>
            <div className="flex items-center space-x-4 gap-7">
                <a href="#" className="hover:underline text-white">Sign In</a>
                <button className="bg-white text-black px-7 py-1 rounded-full">Join</button>
            </div>
        </header>
    );
};

export default Header;
