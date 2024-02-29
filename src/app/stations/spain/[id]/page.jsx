'use client'
import { SnowReportContext } from '@/app/context/SnowReport'
import StationFull from '@/components/stationcomponent/StationFull'
import React, { useContext } from 'react'

const Station = (params) => {

  const {DB_SPAIN} = useContext(SnowReportContext)
  
  const stationDB = DB_SPAIN?.filter(data => data.estacion_id == params.params.id)[0]

  return (
      <StationFull stationDB={stationDB} />
  )
}

export default Station