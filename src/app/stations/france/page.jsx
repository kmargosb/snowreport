import React, { useContext } from 'react'
import StationsTable from '../StationsTable'
import { STATION_DB } from '@/app/api/data/data'
import { SnowReportContext } from '@/app/context/SnowReport'

const FranceStations = () => {

  const { mySqlData } = useContext(SnowReportContext)

  const DB = mySqlData?.filter(data => data.pais === "Pirineo francés")

  return (
    <StationsTable data={DB} country='france' />
  )
}

export default FranceStations