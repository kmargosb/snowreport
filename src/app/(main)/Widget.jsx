'use client'

import { useContext } from "react"
import { SnowReportContext } from "../context/SnowReport"
import MediumWidget from "@/components/widgetsWeather/MediumWidget"
import Loading from "@/components/loading/Loading"

const Widget = () => {
    
    const { dataWeather, dataForecast } = useContext(SnowReportContext)

    if (!dataForecast && !dataWeather) {
        return (
            <Loading />
        )
    }
    return (
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
    )
}

export default Widget