import Image from 'next/image'
import Link from 'next/link'
import hotel_forfait2 from '@/../public/hotel_forfait2.png'

const CarouselPage2 = () => {
    return (
        <div className='relative w-full md:h-[25vh] max-sm:h-full'>
            <Link href='https://www.esqui.com/es_ES/ofertas-hotel-mas-forfait-esqui' target='_blank'>
                <Image src={hotel_forfait2} alt='hotel' className='max-sm:absolute top-14 w-full' />
            </Link>

        </div>
    )
}

export default CarouselPage2