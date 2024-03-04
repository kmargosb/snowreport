import Image from 'next/image'
import React from 'react'
import joinUs from '@/../public/joinUs.jpg'
import Link from 'next/link'

const CarouselPage5 = () => {
    return (
        <div className='max-w-[1280px] h-1/5'>
            <Image src={joinUs} alt='join_us' className='w-full' />
            <div className='md:flex md:flex-col md:items-end md:gap-6 md:absolute right-10 md:px-0 md:bottom-10 md:bg-transparent 
                                    md:py-0 gap-2 flex justify-between px-10 py-2 items-center bg-secondary max-sm:px-5'>
                <div className='text-gray-900 text-xl font-semibold max-sm:text-base'>
                    <p>Unete a la comunidad de nieve mas grande de Europa</p>
                </div>
                <Link href='/register' className='bg-black hover:bg-primary2 hover:text-text-secondary3 text-white py-2 px-4 rounded-md min-w-[80px] max-sm:py-1 max-sm:px-2 '>
                    Registro
                </Link>
            </div>
        </div>
    )
}

export default CarouselPage5