'use client'

import { SnowReportContext } from '../context/SnowReport.jsx'
import React, { useContext } from 'react'
import Image from 'next/image'
import Data from './Data.jsx'

const Cards = () => {

  const { imgData } = useContext(SnowReportContext)
  console.log(imgData)

  return (
    <>
      {imgData?.map((info, i) => {
        return (
          <div key={i} className='lg:px-40 md:px-20 sm:px-10'>
            <div className='relative mb-2 border-b'>
              <Data/>
              <Image src={info.urls.regular} alt={info} width={1280} height={60} className='w-screen h-[60px] object-cover'/>
              <div className='gradientTransparent'></div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Cards