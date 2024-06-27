"use client";

import { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  { src: '/hero-image.jpeg', alt: 'Background 1', title: 'The Carlton', description: 'Experience the Royal Era with our selection of Palaces!' },
  { src: '/luxury-hotel-3.webp', alt: 'Background 2', title: 'Aman Le melezin', description: 'Let us Take you on your next vacation with your loved ones!' },
  { src: '/luxury-hotel-2.webp', alt: 'Background 3', title: 'Umaid Bhawan Palace', description: 'Experience the Royal Era with our selection of Palaces!' },
  { src: '/luxury-hotel-4.jpg', alt: 'Background 4', title: 'The Adare Manor', description: 'The Rich History held within the Castles of Ireland awaits you!' },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const imageTransitions = useTransition(index, {
    keys: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  const textTransitions = useTransition(index, {
    keys: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderDots = () => {
    return (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, i) => (
          <span
            key={i}
            className={`block w-3 h-3 rounded-full border-2 border-white ${index === i ? 'bg-white' : ''} cursor-pointer`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative h-[650px] w-full overflow-hidden">
      {imageTransitions((style, i) => (
        <animated.div key={i} className="absolute w-full h-full" style={style}>
          <div className="relative h-full">
            <img src={images[i].src} alt={images[i].alt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center md:pl-[120px] text-white">
              <div className=" max-w-lg md:max-w-2xl p-4 md:p-8">
                {textTransitions((textStyle, tIndex) => (
                  tIndex === i && (
                    <animated.div style={textStyle}>
                      <h2 className="text-3xl md:text-5xl font-f_1 font-semibold">
                        {images[tIndex].title}
                      </h2>
                      <p className="mt-2 text-md md:text-lg font-f_2">
                        {images[tIndex].description}
                      </p>
                    </animated.div>
                  )
                ))}
              </div>
            </div>
          </div>
        </animated.div>
      ))}
      {renderDots()}
    </div>
  );
};

export default Hero;
