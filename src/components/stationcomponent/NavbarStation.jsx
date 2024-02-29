'use client'

import { SnowReportContext } from '@/app/context/SnowReport'
import { useContext } from 'react'

const NavbarStation = () => {

    const { setMenuSelected } = useContext(SnowReportContext)

    const handleMenuSelection = (menu) => {
        setMenuSelected(menu);
    };

    return (
        <div className='bg-primary w-full flex justify-center '>
            <nav className='lg:w-[1280px] md:w-full md:px-10 max-sm:gap-10 py-2 rounded-md text-white flex justify-between cursor-pointer'>
                <p onClick={() => handleMenuSelection('Estacion')} className='hover:text-primary2'>Estacion</p>
                <p onClick={() => handleMenuSelection('Webcams')} className='hover:text-primary2'>Webcams</p>
                <p onClick={() => handleMenuSelection('Tiempo')} className='hover:text-primary2'>Tiempo</p>
                <p onClick={() => handleMenuSelection('Planos')} className='hover:text-primary2'>Planos</p>
            </nav>
        </div>
    )
}

export default NavbarStation