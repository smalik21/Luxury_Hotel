const Features = () => {
    return (
        <section className="py-20 bg-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-0 max-w-6xl justify-center">
                <div className="text-center mb-10">
                    <h2 className="text-[40px] text-black font-bold mb-4">Features we provide</h2>
                    <p className="text-gray-500 text-[24px] text-center ">Explore the unexplored, Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>
                <div className="space-y-8 md:-mr-14 md:ml-[70px] md:mt-14">
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 mb-[120px]">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="h-48 bg-gradient-to-t to-gray-500 from-white mx-auto md:mx-0 rounded-md" style={{ maxWidth: '405.2px', maxHeight: '233px' }}></div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="max-w-md mx-auto md:mx-0">
                                <h3 className="text-[36px] font-semibold mb-2 text-black">Impressive experience</h3>
                                <p className="text-gray-600 text-[18px] max-w-[370px] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 pb-[120px]">
                        <div className="order-1 md:w-1/2">
                            <div className="h-48 bg-gradient-to-t to-gray-400 from-white mx-auto md:mx-0 rounded-md" style={{ maxWidth: '405.2px', maxHeight: '233px' }}></div>
                        </div>
                        <div className="order-2 md:w-1/2">
                            <div className="max-w-md mx-auto md:mx-0">
                                <h3 className="text-[36px] font-semibold mb-2 text-black leading-tight">Premium sport destination</h3>
                                <p className="text-gray-600 text-[18px] max-w-[370px] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 ">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="h-48 bg-gradient-to-t to-gray-400 from-white mx-auto md:mx-0 rounded-md" style={{ maxWidth: '405.2px', maxHeight: '233px' }}></div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="max-w-md mx-auto md:mx-0">
                                <h3 className="text-[36px] font-semibold mb-2 text-black">Big savings</h3>
                                <p className="text-gray-600 text-[18px] max-w-[370px] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10">
                    <button className="mt-10 px-6 py-2 bg-black text-white rounded-full">See all</button>
                </div>
            </div>
        </section>
    );
};

export default Features;
