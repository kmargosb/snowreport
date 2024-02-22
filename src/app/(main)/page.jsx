import React from 'react'
import CarouselHome from './carouselHome/CarouselHome';

import Activities from './activities/Activities';
import BestStations from './BestStations';
import CarouselSplideJs from './carouselSplideJs/CarouselSplideJs';



export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10'>
        <CarouselHome />
        {/* <CarouselSplideJs/> */}
        <Activities />
        <BestStations />
      </div>
    </>
  );
}
