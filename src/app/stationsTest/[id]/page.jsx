import React from 'react'
import { STATION_DB } from '@/app/api/data/data' 

const Station = () => {
  return (
    <div className='mt-[90px]'>
        <h1>
            Estacion
            <p>country, region</p>
            <p>Estado: Abierta/Cerrada</p>
        </h1>
        <div>
        <p>espesor min</p>
        <p>espesor max</p>
        <p>calidad de la nieve</p>
        <p>calidad de la nieve</p>
        <p>Peligro aludez:avalancha</p>
        </div>
    </div>
  )
}

export default Station