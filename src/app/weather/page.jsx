'use client'
import React, { useEffect, useState, useContext } from 'react'
import { SnowReportContext } from '../context/SnowReport'
import Image from 'next/image'

const Weather = () => {

  const { coordinates } = useContext(SnowReportContext)

  const [temp, setTemp] = useState(null)
  const [description, setDescription] = useState(null)
  
  const longitude = coordinates?.longitud;
  const latitude = coordinates?.latitud;
  const altitude = coordinates?.altitud;
  const layer = 'mapa'
  const apiKey = 'aefa98ee63403acca6298ea6a8e43e35';
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setTemp(data.main.temp);
        setDescription(data.weather[0].description);
      } catch (error) {
        console.error('Error al obtener datos climáticos:', error);
      }
    };
    getData();
  }, []);

  return (
    <div className='mt-[90px]'>
      <Image src={`https://tile.openweathermap.org/map/${layer}/${altitude}/${longitude}/${latitude}.png?appid=${apiKey}`} width={500} height={400} alt='map'/>
    </div>
  )
}

export default Weather 
