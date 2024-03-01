'use client'

import React, { createContext, useState, useEffect } from 'react'

export const SnowReportContext = createContext(null);

const SnowReportContextProvider = ({ children }) => {

  const [menuSelected, setMenuSelected] = useState('Estacion')

  // Victor's DataBase mySql
  
  const [mySqlData, setMySqlData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/data');
        const data = await response.json();
        setMySqlData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  // filter by country and id

  const DB_SPAIN = mySqlData?.filter(data => data.pais === 'España')
  const DB_PORTUGAL = mySqlData?.filter(data => data.pais === 'Portugal')
  const DB_FRANCE = mySqlData?.filter(data => data.pais === 'Pirineo francés')
  const DB_ANDORRA = mySqlData?.filter(data => data.pais === 'Andorra')


  // Geolocalization

  const [coordinates, setCoordinates] = useState(null);


  useEffect(() => {
    const obtenerCoordenadas = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitud = position.coords.latitude;
          const longitud = position.coords.longitude;
          const altitud = position.coords.altitude;
          setCoordinates({ latitud, longitud, altitud });
        }, (error) => {
          console.error('Error al obtener la ubicación:', error);
        });
      } else {
        console.error('La geolocalización no está disponible en este navegador.');
      }
    };
    obtenerCoordenadas()
  }, [])

  return (
    <SnowReportContext.Provider
      value={{
        menuSelected,
        setMenuSelected,
        mySqlData,
        DB_SPAIN,
        DB_PORTUGAL,
        DB_FRANCE,
        DB_ANDORRA,
        coordinates
      }}>
      {children}
    </SnowReportContext.Provider>
  )
}

export default SnowReportContextProvider