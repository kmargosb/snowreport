import React from 'react'
import StationsTable from '../StationsTable'
import { STATION_DB } from '@/app/api/data/data'

const AndorraStations = () => {
  
  const DB = STATION_DB.filter(data => data.country === "Andorra")
  
  return (
      <StationsTable data={DB}/>
    )
  }

export default AndorraStations
