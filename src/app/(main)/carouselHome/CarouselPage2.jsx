import Image from 'next/image'
import React from 'react'
import joinUs from '@/../public/joinUs.jpg'
import Link from 'next/link'

const CarouselPage2 = () => {
    return (
        <div className='max-w-[1280px] h-1/5'>
            <Image src={joinUs} alt='join_us' className='w-full' />
            <div className='md:flex md:flex-col md:items-start md:gap-6 absolute md:px-0 md:top-60 md:left-24 md:bg-transparent 
                                    md:py-0 gap-2 flex justify-between px-20 py-2 items-center '>
                <div className='text-white font-semibold'>
                    <p className=' md:text-7xl font-outline-2 text-5xl'>Lib Tech</p>
                    <p>Experimental Dream Boards</p>
                </div>
                <Link href='https://www.lib-tech.com' className='bg-black text-white py-2 px-4 rounded-md min-w-[80px]'>
                    Shop now
                </Link>
            </div>
        </div>
    )
}

export default CarouselPage2