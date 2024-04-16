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
        <Widget />
        <div className='flex flex-col my-10'>
          <div className='text-text-secondary3 text-4xl font-semibold'>Te gusta la adrenalina o prefieres pasear en familia?</div>
          <p className='text-primary font-semibold text-xl'>Descubre las distintas actividades</p>
        </div>
        <Activities />
        <BestStations />
      </div>
    </>
  );
}
