'use client'

import { useEffect, useState, useContext } from 'react'
import { SnowReportContext } from '../context/SnowReport'
import Loading from '@/components/loading/Loading'
// import FullWidget from '@/components/widgetsWeather/FullWidget'
import SmallWidget from '@/components/widgetsWeather/SmallWidget'
import MediumWidget from '@/components/widgetsWeather/MediumWidget'

const Weather = () => {
  const { coordinates, dataWeather, dataForecast } = useContext(SnowReportContext)
  
  return (
    <div className='mt-[90px] lg: w-full flex flex-col justify-center items-center'>
      {!dataWeather && !dataForecast ? <Loading /> : (
        
        <div>
          <SmallWidget
            city={dataWeather.name}
            country={dataWeather.sys.country}
            description={dataWeather.weather[0].description}
            icon={dataWeather.weather[0].icon}
            tempMax={dataWeather.main.temp_max}
            tempMin={dataWeather.main.temp_min}
            temp={dataWeather.main.temp}
          />
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
    </div>
  )
}

export default Weather;