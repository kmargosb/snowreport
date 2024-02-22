import React from 'react'
import StationsTable from '../StationsTable'
import { STATION_DB } from '@/app/api/data/data'

const FranceStations = () => {

  const DB = STATION_DB.filter(data => data.country === "Francia")

  return (
    <StationsTable data={DB}/>
  )
}

export default FranceStations