import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-[500px] w-auto z-0">
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/top-hotel.jpeg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white pointer-events-auto">
                <h1 className="md:text-[70px] text-[40px] font-bold mb-8 mt-[130px]">Destinations</h1>
                <p className="text-lg md:text-[19px] text-[14px]">explore new destinations..</p>
                <p>Home › explore</p>
            </div>
        </section>
    );
};

export default Hero;
