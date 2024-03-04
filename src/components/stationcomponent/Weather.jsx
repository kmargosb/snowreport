'use client'

import { useState, useEffect } from 'react'
import Loading from '../loading/Loading'
import MediumWidget from '../widgetsWeather/MediumWidget';

const Weather = ({ stationDB }) => {
  const [position, setPosition] = useState(null)
  const [dataForecast, setDataForecast] = useState(null)
  const [dataWeather, setDataWeather] = useState(null)

  useEffect(() => {
    if (!stationDB) return;

    const fetchData = async () => {
      try {
        const address = stationDB?.direccion
        const googleMapsApiKey = "AIzaSyAzKp5StTGvc7_kydK2MoE_kXhHj2GTDWc"
        const urlGoogleGeo = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsApiKey}`
        
        // Fetch para las position
        const response = await fetch(urlGoogleGeo);
        const data = await response.json();
        setPosition(data.results[0].geometry.location);

      } catch (error) {
        console.error('Error al obtener datos de posición:', error);
      }
    };

    fetchData();
  }, [stationDB]);

  useEffect(() => {
    if (!position) return;

    const apiKey = "aefa98ee63403acca6298ea6a8e43e35"
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lng}&appid=${apiKey}&lang=sp`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.lat}&lon=${position.lng}&appid=${apiKey}`;

    const fetchData = async () => {
      try {
        // Fetch para el Weather
        const response = await fetch(urlWeather);
        const data = await response.json();
        setDataWeather(data);

        // Fetch para el Forecast
        const response2 = await fetch(urlForecast);
        const data2 = await response2.json();
        setDataForecast(data2);

      } catch (error) {
        console.error('Error al obtener datos climáticos:', error);
      }
    };

    fetchData();
  }, [position]);

  if (!dataWeather && !dataForecast) {
    return (
      <Loading />
    )
  }

  return (
    <div className='mt-[90px]'>
      <MediumWidget
        hourlyForecast={dataForecast}
        city={dataWeather.name}
        country={dataWeather.sys.country}
        description={dataWeather.weather[0].description}
        icon={dataWeather.weather[0].icon}
        tempMax={dataWeather.main.temp_max}
        tempMin={dataWeather.main.temp_min}
        temp={dataWeather.main.temp}
        humidity={dataWeather.main.humidity}
        feelsLike={dataWeather.main.feels_like} />
    </div>
  )
}

export default Weather





