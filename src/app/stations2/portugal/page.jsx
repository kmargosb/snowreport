import React from 'react'
import StationsTable from '../StationsTable'
import { STATION_DB } from '@/app/api/data/data' 

const PortugalStations = () => {

  const DB = STATION_DB.filter(item => item.country === "Portugal")
  return (
    <StationsTable data={DB}/>
  )
}

export default PortugalStations