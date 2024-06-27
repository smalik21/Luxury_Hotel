"use client"
import { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  useEffect(() => {
    // Ensure Carousel is initialized after component mounts on the client
    import('react-responsive-carousel').then((module) => {
      const { Carousel } = module;
      if (Carousel) {
        // Initialize Carousel here if needed
      }
    });
  }, []);

  const renderIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorClass = isSelected ? "bg-blue-500" : "bg-gray-300";
    return (
      <li
        key={index}
        className={`inline-block w-3 h-3 rounded-full ${indicatorClass} mx-1 cursor-pointer`}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <div className="relative h-screen w-full">
      <Carousel
        showThumbs={false}
        autoPlay
        interval={3000}
        infiniteLoop
        showStatus={false}
        showArrows={false}
        renderIndicator={renderIndicator}
        emulateTouch
        className="h-full"
      >
        <div className="h-full">
          <img src="/hero-image.jpeg" alt="Background 1" className="h-full w-full object-cover" />
        </div>
        <div className="h-full">
          <img src="/luxury-hotel-3.webp" alt="Background 2" className="h-full w-full object-cover" />
        </div>
        <div className="h-full">
          <img src="/luxury-hotel-2.webp" alt="Background 3" className="h-full w-full object-cover" />
        </div>
        <div className="h-full">
          <img src="/luxury-hotel-4.jpg" alt="Background 4" className="h-full w-full object-cover" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
