import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Features = () => {
    return (
        <section className="md:py-[5rem] py-10 max-w-screen overflow-hidden bg-white min-h-screen flex  items-center justify-center">
            <div className="container mx-auto px-4 md:px-0 max-w-6xl justify-center ">
                <div className="text-center md:mb-10 mb-5">
                    <h2 className="text-[30px] lg:text-[45px] font-f_1 text-black font-bold mb-4">Features we provide</h2>
                    <p className="text-gray-500 lg:text-[24px] md:text-[20px] font-f_3 text-[18px] text-center px-2 pb-8">Explore the unexplored, Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                </div>
                <div className="space-y-8 md:-mr-14 md:ml-[70px] md:mt-14 ">
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:mb-[90px] mb-7">
                        <div className="order-1 md:order-2 lg:w-1/2">
                            <div className="mx-auto lg:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/y1.png"
                                    alt="Impressive experience"
                                    className="lg:w-[415.2px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2 ">
                            <div className="lg:max-w-md max-w-[320px] text-center md:text-left mx-auto md:mx-0">
                                <h3 className="lg:text-[40px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black">Impressive experience</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:pb-[80px] pb-7 pt-4">
                        <div className="order-1 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/y2.png"
                                    alt="Premium sport destination"
                                    className="lg:w-[415px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:w-1/2 lg:max-w-[350px] max-w-[340px]">
                            <div className="lg:max-w-lg max-w-[350px] text-center md:text-left md:mx-0">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black leading-tight">Safaris</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px]  leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/y3.png"
                                    alt="Big savings"
                                    className="lg:w-[415.2px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="lg:max-w-md max-w-[300px] text-center md:text-left mx-auto md:mx-0 ">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black">Hotels & Resorts</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">Indulge in the finest luxury accommodations around the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-10 flex justify-center">
                    <button className="px-6 py-2 bg-black text-white rounded-full flex items-center">
                        See all <IoIosArrowForward className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Features;
