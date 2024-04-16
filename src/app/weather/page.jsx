'use client'

import { useEffect, useState, useContext } from 'react'
import { SnowReportContext } from '../context/SnowReport'
import Loading from '@/components/loading/Loading'
import MediumWidget from '@/components/widgetsWeather/MediumWidget'
import WeatherMap from '@/components/widgetsWeather/WeatherMap'

const Weather = () => {
  const { coordinates, dataWeather, dataForecast } = useContext(SnowReportContext)

  return (
    <div className='mt-[90px] lg: w-full flex flex-col justify-center items-center'>
      {!dataWeather && !dataForecast ? <Loading /> : (

        <div>
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
            feelsLike={dataWeather.main.feels_like}
          />
          <WeatherMap />
        </div>
      )
      }
    </div>
  )
}

export default Weather;