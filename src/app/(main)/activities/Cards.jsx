import React from 'react'
import Image from 'next/image'

const Cards = ({ text, tittle, img }) => {
    return (
        <div className=' size-[200px] shadow-lg shadow-blue-200 rounded-lg cursor-pointer flex flex-col gap-4 justify-center items-center p-4 hover:translate-y-1'>
            <Image src={img} width={100} height={100} alt={tittle} />
            <p>{tittle}</p>
        </div>
    )
}
export default Cards
