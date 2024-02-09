import React from 'react'
import snowboarding1 from '@/../public/snowboarding1.jpg'
import Image from 'next/image'

const SeasonStartEnd = () => {
  return (
    <div className='w-full max-h-[400px] relative overflow-hidden'>
        <Image src={snowboarding1} alt='snowboarding' className='w-full'  priority/>
    </div>
  )
}

export default SeasonStartEnd