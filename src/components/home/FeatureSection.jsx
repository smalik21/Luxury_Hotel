import Image from "next/image";

const Features = () => {
    return (
        <section className="py-20 max-w-screen overflow-hidden bg-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-0 max-w-6xl justify-center">
                <div className="text-center mb-10">
                    <h2 className="text-[30px] lg:text-[40px] text-black font-bold mb-4">Features we provide</h2>
                    <p className="text-gray-500 lg:text-[24px] md:text-[20px] text-[18px] text-center px-2">Explore the unexplored, Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>
                <div className="space-y-8 md:-mr-14 md:ml-[70px] md:mt-14 ">
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 mb-[120px]">
                        <div className="order-1 md:order-2 lg:w-1/2">
                            <div className="mx-auto lg:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/y1.png"
                                    alt="Impressive experience"
                                    className="lg:w-[405.2px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="max-w-md mx-auto md:mx-0">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-semibold mb-2 text-black">Impressive experience</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 pb-[120px]">
                        <div className="order-1 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/y2.png"
                                    alt="Premium sport destination"
                                    className="lg:w-[405.2px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:w-1/2">
                            <div className="max-w-md mx-auto md:mx-0">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-semibold mb-2 text-black leading-tight">Premium sport destination</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] lg:max-w-[350px] max-w-[330px] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/y3.png"
                                    alt="Big savings"
                                    className="lg:w-[405.2px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="max-w-md mx-auto md:mx-0">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-semibold mb-2 text-black">Big savings</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
