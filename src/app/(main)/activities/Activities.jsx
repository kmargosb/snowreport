import React from 'react'
import Cards from './Cards'
import snowParks from '@/../public/snowParks.jpg'
import raquetasNieve from '@/../public/raquetasNieve.jpg'
import skiMountain from '@/../public/esquiMontana.jpg'
import trineoNieve from '@/../public/trineoNieve.jpg'
import Link from 'next/link'

const Activities = () => {
    const info = [
        {
            img: snowParks,
            tittle: 'SNOWPARKS'
        },
        {
            img: skiMountain,
            tittle: 'ESQUI DE MONTANA'
        },
        {
            img: raquetasNieve,
            tittle: 'RAQUETAS'
        },
        {
            img: trineoNieve,
            tittle: 'PISTAS DE TRINEO'
        }
    ]
    return (
        <div className='w-full flex flex-wrap justify-center gap-6 md:gap-10'>
            {info.map((data, i) => {
                return (
                    <Link href="/activitiestable">
                        <Cards key={i} tittle={data.tittle} img={data.img} />
                    </Link>
                )
            })}
        </div>
    )
}

export default Activities
