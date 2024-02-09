import React from 'react'
import Cards from './Cards'
import snowIcon from '../../../../public/snowIcon.png'
import raquetasIcon from '@/../public/raquetasIcon.png'
import skiMountain from '@/../public/skiMountain.png'
import trineo from '@/../public/trineo.png'

const Activities = () => {
    const info = [
        {
            img: snowIcon,
            tittle: 'SNOWPARKS'
        },
        {
            img: skiMountain,
            tittle: 'ESQUI DE MONTANA'
        },
        {
            img: raquetasIcon,
            tittle: 'RAQUETAS'
        },
        {
            img: trineo,
            tittle: 'PISTAS DE TRINEO'
        }
    ]
    return (
        <div className='w-full flex flex-wrap justify-center gap-6 md:gap-20 py-10'>
            {info.map((data, i) => {
                return <Cards key={i} tittle={data.tittle} img={data.img} />
            })}
        </div>
    )
}

export default Activities
