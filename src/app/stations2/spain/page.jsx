import React from 'react'
import StationsTable from '../StationsTable'
import { STATION_DB } from '@/app/api/data/data'

const SpainStations = () => {

  const DB = STATION_DB.filter(data => data.country === 'España')

  return (
    <StationsTable data={DB}/>
  )
}

export default SpainStations