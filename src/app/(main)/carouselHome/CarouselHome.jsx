'use client'

import React, { useState, useEffect } from 'react';
import CarouselPage1 from './CarouselPage1';
import CarouselPage5 from './CarouselPage5';
import CarouselPage3 from './CarouselPage3';
import CarouselPage4 from './CarouselPage4';
import { LuChevronRightCircle, LuChevronLeftCircle } from "react-icons/lu";

const Carousel = () => {

  const components = [
    <CarouselPage1 />,
    'Aqui falta una',
    <CarouselPage3/>,
    <CarouselPage4/>,
    <CarouselPage5 />
  ]

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 5);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 5) % 5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='flex overflow-hidden relative lg:max-w-[1280px] mt-[90px] w-full lg:h-[600px]'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <button
        onClick={prevSlide}
        className='max-sm:top-20 left-5 size-10 absolute top-2/4 translate-y-2/4 cursor-pointer text-2xl z-[1] opacity-25 hover:opacity-50 focus:outline-none transition-all'>
       <LuChevronLeftCircle />
      </button>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className='transition-transform duration-500 flex-grow-0 flex-shrink-0 w-full'>
          <div>
            {components[index]}
          </div>
        </div>
      ))}
      <button
        onClick={nextSlide}
        className='max-sm:top-20 right-1 size-10 absolute top-2/4 translate-y-2/4 cursor-pointer text-2xl z-[1] opacity-25 hover:opacity-50 focus:outline-none transition-all'>
        <LuChevronRightCircle/>
      </button>
    </div>
  );
};

export default Carousel;
