import React from 'react'
import CarouselHome from './carouselHome/CarouselHome';
import SeasonStartEnd from './SeasonStartEnd';
import Activities from './activities/Activities';



export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center  gap-10'>
        <div className='w-full bg-blue-100 flex justify-center'>
          <CarouselHome />
        </div>
        <Activities />
        <SeasonStartEnd />
      </div>
    </>
  );
}
