import Image from 'next/image'
import React from 'react'
import unete from '@/../public/unete.png'
import Link from 'next/link'

const CarouselPage5 = () => {
    return (
        <div className='relative w-full md:h-[25vh] max-sm:h-full'>
            <Link href='/register'>
                <Image src={unete} alt='join_us' className='max-sm:absolute top-14 w-full' />
            </Link>

        </div>
    )
}

export default CarouselPage5