'use client'

import React, { useState, useEffect } from 'react';
import snowboarding1 from '../../../../public/snowboarding1.jpg'
import snowboarding2 from '../../../../public/nsowboarding2.jpg'
// import Pagina1 from './Pagina1';
import Image from 'next/image';


const Carousel = () => {

  const images = [
    snowboarding1,
    snowboarding2,
    snowboarding1,
    snowboarding2,
    snowboarding2,
  ];

  // const components = [
  //   <Pagina1/>,
  //   <Pagina1/>,
  //   <Pagina1/>,
  //   <Pagina1/>,
  //   <Pagina1/>
  // ]

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className='flex overflow-hidden relative w-full h-[400px] max-w-[1280px]'>
      <button
        onClick={prevSlide}
        className='left-5 size-10 absolute top-2/4 translate-y-2/4 border border-white rounded-full cursor-pointer text-2xl z-[1] opacity-25 hover:opacity-50 focus:outline-none transition-all'
      >
        &lt;
      </button>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className='transition-transform duration-500 flex-grow-0 flex-shrink-0 w-full'
        >
          <div>
          <Image src={images[index]} alt={`snowboarding-${index}`} width={1280} height={800} />
          {/* {components[index]} */}
          </div>
        </div>
      ))}
      <button
        onClick={nextSlide}
        className='right-5 size-10 absolute top-2/4 translate-y-2/4 border border-white rounded-full cursor-pointer text-2xl z-[1] opacity-25 hover:opacity-50 focus:outline-none transition-all'
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
