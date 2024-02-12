import Image from 'next/image'
import React from 'react'
import estacion1 from '@/../public/estacion1.png'
import estacion2 from '@/../public/estacion2.png'
import estacion3 from '@/../public/estacion3.png'

const Stations = () => {

  return (
    <div className='flex flex-col items-center justify-center w-screen'>
      <div className='relative mb-2 border-b cursor-pointer'>
        <Image src={estacion2} alt='snow' className='w-[1280px] h-[60px]  ' />
        <div className='gradientTransparent'></div>
      </div>
      <div className='relative mb-2 border-b cursor-pointer'>
        <Image src={estacion1} alt='snow' className='w-[1280px] h-[60px]  ' />
        <div className='gradientTransparent'></div>
      </div>
      <div className='relative mb-2 border-b cursor-pointer'>
        <Image src={estacion3} alt='snow' className='w-[1280px] h-[60px]  ' />
        <div className='gradientTransparent'></div>
      </div>
    </div>
  )
}

export default Stations