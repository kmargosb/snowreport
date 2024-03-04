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

  // Weather Data

  const [dataWeather, setDataWeather] = useState(null)
  const [dataForecast, setDataForecast] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!coordinates) return;
        const { longitud: longitude, latitud: latitude } = coordinates;
        const apiKey = 'aefa98ee63403acca6298ea6a8e43e35';
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=sp`;
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        //Fetch para el Weather
        const response = await fetch(urlWeather);
        const data = await response.json();
        setDataWeather(data);
        // console.log('weather', data)

        //Fetch para el Forecast
        const response2 = await fetch(urlForecast);
        const data2 = await response2.json();
        setDataForecast(data2);
        // console.log('forecast', data2)
        
      } catch (error) {
        console.error('Error al obtener datos climáticos:', error);
      }
    };

    fetchData();
  }, [coordinates]);
  

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
        coordinates,
        dataForecast,
        dataWeather
      }}>
      {children}
    </SnowReportContext.Provider>
  )
}

export default SnowReportContextProvider