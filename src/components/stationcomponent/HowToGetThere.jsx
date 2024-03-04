'use client'

import { SnowReportContext } from "@/app/context/SnowReport";
import { useContext } from "react";

const HowToGetThere = ({ stationDB }) => {

    
    const { coordinates } = useContext(SnowReportContext);
    const destination = stationDB?.direccion;
    const latitude = coordinates?.latitud;
    const longitude = coordinates?.longitud

   

    const handleMapLinkClick = () => {
        if (coordinates) {
            const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${destination}`;
            window.open(url, '_blank');
        }
    };

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-xl w-36" 
        onClick={handleMapLinkClick}>
            Como llegar?
        </button>
    )
}

export default HowToGetThere