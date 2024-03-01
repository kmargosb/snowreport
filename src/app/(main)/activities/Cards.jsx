import React from 'react'
import Image from 'next/image'

const Cards = ({ tittle, img }) => {
    return (
        <div className=' min-w-[300px] min-h-[300px] cursor-pointer flex flex-col gap-4 justify-center items-center'>
            <Image src={img} width={300} height={300} alt={tittle} className='h-[300px] object-cover contrast-50 hover:contrast-100' priority />
            <p className='absolute text-white text-lg font-semibold underline'>{tittle}</p>
        </div>
    )
}
export default Cards
