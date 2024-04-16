'use client'

import { SnowReportContext } from "@/app/context/SnowReport";
import Image from "next/image";
import { useContext } from "react";


const HowToGetThere = ({ stationDB }) => {


    const { coordinates } = useContext(SnowReportContext);
    const destination = stationDB?.direccion;
    const latitude = coordinates?.latitud;
    const longitude = coordinates?.longitud

    console.log(stationDB)



    const handleMapLinkClick = () => {
        if (coordinates) {
            const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${destination}`;
            window.open(url, '_blank');
        }
    };

    return (
        <button className="rounded-full gap-5 flex items-center max-md:flex-col" onClick={handleMapLinkClick}>
            <p className="top-[140px] lg:text-6xl md:text-5xl max-sm:text-2xl font-bold text-secondary2 w-full">Haz click aqui para abrir el mapa</p>
            <Image src={`https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22-1046x616.jpg`} width={500} height={500} alt='mapa' className='size-80 rounded-full' />
        </button>
    )
}

export default HowToGetThere