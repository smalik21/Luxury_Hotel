import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Features = () => {
    return (
        <section className="md:py-[5rem] py-10 max-w-screen overflow-hidden bg-white min-h-screen flex  items-center justify-center">
            <div className="container mx-auto px-4 md:px-0 max-w-6xl justify-center ">
                
                <div className="space-y-8 md:-mr-14 md:ml-[70px] md:mt-14 ">
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:mb-[70px] mb-7">
                        <div className="order-1 md:order-2 lg:w-1/2">
                            <div className="mx-auto lg:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/home/f3.webp"
                                    alt="Impressive experience"
                                    className="lg:w-[500px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2 ">
                            <div className="lg:max-w-md max-w-[320px] text-center md:text-left mx-auto md:mx-0">
                                <h3 className="lg:text-[40px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black">Introducing Ourselves!</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">Welcome to The Luxury hotel concierge! We are a team of dedicated travel experts who are passionate about providing our clients with the ultimate travel experiences.</p>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">At our agency, we understand that luxury travel is more than just staying at a fancy hotel or flying first class. It's about immersing oneself in the culture of a destination, exploring hidden gems, and creating unforgettable memories. That's why we take the time to get to know each of our clients, their interests, and their travel preferences. With this knowledge, we are able to create custom itineraries that cater to each individual's unique travel style.</p>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2 md:pb-[70px] pb-7 pt-4">
                        <div className="order-1 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/home/f2.webp"
                                    alt="Premium sport destination"
                                    className="lg:w-[500px] lg:h-auto w-[300px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:w-1/2 lg:max-w-[350px] max-w-[340px]">
                            <div className="lg:max-w-lg max-w-[350px] text-center md:text-left md:mx-0">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black leading-tight">Personalized trips</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px]  leading-tight">Travel is different for everyone. We want to make sure that you are getting the most from your trip by crafting the dream vacation that is perfect for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:space-x-2">
                        <div className="order-1 md:order-2 md:w-1/2">
                            <div className="mx-auto md:mx-0 rounded-md overflow-hidden">
                                <Image
                                    src="/home/f1.webp"
                                    alt="Big savings"
                                    className="lg:w-[500px] lg:h-auto w-[300.2px] auto"
                                    width={405.2}
                                    height={233}
                                />
                            </div>
                        </div>
                        <div className="order-2 md:order-1 md:w-1/2">
                            <div className="lg:max-w-md max-w-[300px] text-center md:text-left mx-auto md:mx-0 ">
                                <h3 className="lg:text-[36px] mt-6 lg:mt-0 text-[26px] font-f_2 font-semibold mb-2 text-black">Incredible detail and service</h3>
                                <p className="text-gray-600 lg:text-[18px] text-[15px] max-w-[370px] leading-tight">We've got your back. In the event something does come up. Our team is here to help make sure your trip is not interrupted.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="text-center mt-10 flex justify-center">
                    <button className="px-6 py-2 bg-black text-white rounded-full flex items-center">
                        See all <IoIosArrowForward className="ml-2" />
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default Features;
