import React, { useContext } from 'react'
import StationsTable from '../StationsTable'
import { STATION_DB } from '@/app/api/data/data'
import { SnowReportContext } from '@/app/context/SnowReport'

const AndorraStations = () => {

  const { mySqlData } = useContext(SnowReportContext)

  const DB = mySqlData?.filter(data => data.pais === "Andorra")

  return (
    <StationsTable data={DB} country='andorra' />
  )
}

export default AndorraStations
