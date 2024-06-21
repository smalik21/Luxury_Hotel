import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-screen z-0">
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src="/explore-hero-bg.jpeg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white pointer-events-auto">
                <h1 className="text-[80px] font-bold mb-4 mt-16">Explore</h1>
                <p className="text-lg mb-1 text-[19px]">explore new destinations..</p>
                <p>Home › explore</p>
            </div>
        </section>
    );
};

export default Hero;
