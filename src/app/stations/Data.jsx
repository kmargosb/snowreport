import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

const Data = () => {
    return (
        <div className='z-10 flex justify-between relative top-10 px-4'>
            <p>Nombre</p>
            <p>Estado</p>
            <p>Pistas</p>
            <p>Nieve</p>
            <p>Clima</p>
            <button><FaRegHeart className='size-6'/></button>
        </div>
    )
}

export default Data