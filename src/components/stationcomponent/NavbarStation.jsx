'use client'

import { SnowReportContext } from '@/app/context/SnowReport'
import { useContext } from 'react'

const NavbarStation = () => {

    const { setMenuSelected } = useContext(SnowReportContext)

    const handleMenuSelection = (menu) => {
        setMenuSelected(menu);
    };

    return (
        <div className='bg-primary lg:px-52 max-sm:px-2 flex justify-center'>
            <nav className='w-full md:px-10 max-sm:gap-10 py-2 text-white flex justify-between cursor-pointer'>
                <p onClick={() => handleMenuSelection('Estacion')} className='hover:text-primary2'>La estacion</p>
                <p onClick={() => handleMenuSelection('Webcams')} className='hover:text-primary2'>Webcams</p>
                <p onClick={() => handleMenuSelection('Tiempo')} className='hover:text-primary2'>Tiempo en la estacion</p>
                <p onClick={() => handleMenuSelection('Planos')} className='hover:text-primary2'>Planos de pista</p>
            </nav>
        </div>
    )
}

export default NavbarStation