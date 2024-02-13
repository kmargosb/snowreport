import React from 'react'
import mejoresEstaciones from '@/../public/mejoresEstaciones.jpg'
import logoPage from '@/../public/logoPage.png'
import Link from 'next/link'
import Image from 'next/image'

const BestStations = () => {
  return (
    <div className='w-[1440px] max-h-[400px] overflow-hidden my-10'>
      <Image src={mejoresEstaciones} alt='snowboarding' className='lg:relative bottom-[105px] contrast-75' />
      <div className='flex flex-col justify-center items-center gap-2 relative bottom-[910px]'>
        <Image src={logoPage} alt="Logo" width={100} height={100} className='max-sm:size-[80px]' />
        <p className='font-bold text-2xl'>SNOWREPORT</p>
        <p className='font-semibold text-lg md:w-[500px] max-sm:w-[300px] text-center'>Descubre las mejores estaciones con el mayor recorrido y disfruta la mejor nieve.</p>
        <button className='bg-black py-2 px-4 rounded-md mt-10 text-white hover:bg-slate-800'>Ver más</button>
      </div>
    </div>

  )
}

export default BestStations