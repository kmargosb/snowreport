'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "../../../../package/components/ui/button"

import ReactPlayer from 'react-player'
import videoCarousel1 from '@/../public/videoPagina1.mp4'
import '@/app/globals.css'


const CarouselPage1 = () => {

    const [isClient, setIsClient] = useState(false)
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setIsClient(true)
        setTimeout(() => {
            setShowContent(true)
        }, 1000)
    }, [])

    return (
        <>{isClient ?
            <div className='lg:max-w-[1280px] max-sm:w-full'>
                <ReactPlayer
                    width='100%'
                    height='100%'
                    url={videoCarousel1}
                    controls={false}
                    playing={true}
                    muted
                    loop
                />
                {showContent &&
                    <div className='md:flex md:flex-col md:items-start md:gap-6 md:absolute md:px-0 md:top-60 md:left-24 md:bg-transparent 
                                    md:py-0 gap-2 flex justify-between px-20 py-2 items-center bg-blue-200 max-sm:px-5'>
                        <div className='text-white font-semibold'>
                            <p className=' md:text-7xl font-outline-2 text-5xl max-sm:text-3xl'>Lib Tech</p>
                            <p>Experimental Dream Boards</p>
                        </div>
                        <Link href='https://www.lib-tech.com' className='bg-black text-white py-2 px-4 rounded-md min-w-[80px] max-sm:py-1 max-sm:px-2'>
                            Shop now
                        </Link>
                    </div>}
            </div>
            :
            <div className='w-[1280px] h-[500px]'>
            </div>}
        </>
    )
}

export default CarouselPage1