'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "../../../../package/components/ui/button"

import ReactPlayer from 'react-player'
import videoCarousel1 from '@/../public/videoPagina1.mp4'
import '@/app/globals.css'


const CarouselPage1 = () => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <>{isClient ?
            <div className='max-w-[1280px] relative'>
                <ReactPlayer
                    width='100%'
                    height='20%'
                    url={videoCarousel1}
                    controls={false}
                    playing={true}
                    muted
                    loop
                />
                <div className='flex flex-col items-start gap-6 absolute top-60 left-24'>
                    <div className='text-white font-semibold'>
                        <p className=' text-7xl font-outline-2'>Lib Tech</p>
                        <p>Experimental Dream Boards</p>
                    </div>
                    <Link href='https://www.lib-tech.com' className='bg-black text-white py-2 px-4 rounded-md'>
                        Go shop now
                    </Link>
                </div>
            </div>
            :
            <div className='w-[1280px] h-[500px] relative'>
                
            </div>}
        </>
    )
}

export default CarouselPage1