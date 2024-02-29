'use client'

import { SnowReportContext } from "@/app/context/SnowReport"
import { useContext } from "react"
import Station from "./Station"
import Webcams from "./Webcams"
import Weather from "./Weather"
import Maps from "./Maps"

const MenuSelector = ({stationDB}) => {

    const { menuSelected } = useContext(SnowReportContext)

    return (
        <div>
            {menuSelected === 'Estacion' && <Station stationDB={stationDB}/>}
            {menuSelected === 'Webcams' && <Webcams stationDB={stationDB}/>}
            {menuSelected === 'Tiempo' && <Weather stationDB={stationDB}/>}
            {menuSelected === 'Planos' && <Maps stationDB={stationDB}/>}
        </div>
    )
}

export default MenuSelector