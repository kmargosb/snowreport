'use client'

import { useEffect, useState, useContext } from 'react'
import { SnowReportContext } from '../context/SnowReport'
import Loading from '@/components/loading/Loading'

const Weather = () => {
  const { coordinates } = useContext(SnowReportContext)
  const [dataWeather, setDataWeather] = useState(null)
  const [DataForecast, setDataForecast] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!coordinates) return;
        const { longitud: longitude, latitud: latitude } = coordinates;
        const apiKey = 'aefa98ee63403acca6298ea6a8e43e35';
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        const urlZipCode = `https:api.openweathermap.org/data/2.5/forecast?zip=66760,us&appid=${apiKey}`
        
        const response = await fetch(urlWeather);
        const data = await response.json();
        setDataWeather(data);
        console.log(data)

        const response2 = await fetch(urlForecast);
        const data2 = await response2.json();
        setDataForecast(data);
        console.log(data2)
      } catch (error) {
        console.error('Error al obtener datos climáticos:', error);
      }
    };

    fetchData();
  }, [coordinates]);

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day}/${month}/${year}`;
  let icon1;

  if(dataWeather){
    icon1 = `http://openweathermap.org/img/w/${dataWeather.weather[0].icon}.png`
  }


  return (
    <div className='mt-[90px] lg: w-full flex flex-col justify-center items-center'>
      {!dataWeather ? <Loading /> : (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">{dataWeather.name}</h3>
                <p className="card-date">{date}</p>
                <h1 className="card-temp">{(dataWeather.main.temp - 273.15).toFixed(1)}ºC</h1>
                <p className="card-desc"><img src={icon1} alt="icon" />{dataWeather.weather[0].description}</p>
                <img src="https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className="" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">Temperatura máxima: {(dataWeather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                  <h5 className="card-text">Temperatura mínima: {(dataWeather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                  <h5 className="card-text">sensación térmica: {(dataWeather.main.feels_like - 273.15).toFixed(1)}ºC</h5>
                  <h5 className="card-text">Humedad: {dataWeather.main.humidity}%</h5>
                  <h5 className="card-text">Velocidad del viento: {dataWeather.wind.speed}m/s</h5>
                </div>
                <hr />

                {/* <div className="row mt-4">
                  <div className="col">
                    <p>algo en h</p>
                    <p className="description"><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
                    <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                  <div className="col">
                    <p>{forecastDate6}h</p>
                    <p className="description"><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description}</p>
                    <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                  <div className="col">
                    <p>{forecastDate9}h</p>
                    <p className="description"><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description}</p>
                    <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )
      }

    </div>
  )
}

export default Weather;