import Image from 'next/image'
import React from 'react'
import valdesquiClases from '@/../public/valdesquiClases.jpg'
import Link from 'next/link'

const CarouselPage3 = () => {
    return (
        <div className="w-full relative">
            <Link href='https://valdesqui.es/' target='_blank' className="">
                <Image
                    src={valdesquiClases}
                    alt="Consejo de Esquí"
                    width={2560}
                    height={1436}
                    className='lg:absolute lg:-top-28 max-sm:absolute max-sm:top-10'
                />
            </Link>
        </div>
    )
}

export default CarouselPage3
