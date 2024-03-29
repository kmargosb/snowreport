import React from 'react'
import CarouselHome from './carouselHome/CarouselHome';
import Activities from './activities/Activities';
import BestStations from './BestStations';
import Widget from './Widget';

export default function Home() {

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-10 bg-white'>
        <CarouselHome />
        <Widget/>
        <Activities />
        <BestStations />
      </div>
    </>
  );
}
