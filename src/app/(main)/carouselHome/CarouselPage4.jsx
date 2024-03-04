import Image from 'next/image'
import React from 'react'
import howToSnowboard from '@/../public/como-hacer-snowboard.jpg'
import Link from 'next/link'

const CarouselPage3 = () => {
    return (
        <div className="relative w-full md:h-[25vh] max-sm:h-full">
            <Link href='https://www.esquiades.com/blog/como-aprender-snowboard-pasito-a-pasito/' target='_blank'>
                <Image
                    src={howToSnowboard}
                    alt="Consejo_de_snowboard"
                    width={2560}
                    height={1436}
                    className='absolute top-10'
                />
            </Link>
        </div>
    )
}

export default CarouselPage3
