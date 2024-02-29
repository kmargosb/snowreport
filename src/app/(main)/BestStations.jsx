import React from 'react'
import mejoresEstaciones from '@/../public/mejoresEstaciones.jpg'
import Image from 'next/image'

const BestStations = () => {
  return (
    // <div className='w-full max-h-[400px] overflow-hidden my-10 md:px-20'>
    //   <Image src={mejoresEstaciones} alt='snowboarding' className='lg:relative bottom-[105px] contrast-75' />
    //   <div className='flex flex-col justify-center items-center gap-2 relative md:bottom-[800px] max-sm:bottom-[250px]'>
    //     <Image src={logoPage} alt="Logo" width={100} height={100} className='max-sm:size-[80px]' />
    //     <p className='font-bold text-2xl'>SNOWREPORT</p>
    //     <p className='font-semibold text-lg md:w-[500px] max-sm:w-[300px] text-center'>Descubre las mejores estaciones con el mayor recorrido y disfruta la mejor nieve.</p>
    //     <button className='bg-black py-2 px-4 rounded-md mt-10 text-white hover:bg-slate-800'>Ver más</button>
    //   </div>
    // </div>
    <div className='w-full' >
      <Image src={mejoresEstaciones} alt='best_stations' className='w-full md:h-[400px] object-cover contrast-75' />
      <div>
      {/* <Image src={logoPage} width={100} height={100} alt="Logo_SNOW" className='' /> */}
      </div>
    </div>
   
  )
}

export default BestStations