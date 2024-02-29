import React, { useContext } from 'react'
import StationsTable from '../StationsTable'
import { SnowReportContext } from '@/app/context/SnowReport'

const SpainStations = () => {

  const {mySqlData} = useContext(SnowReportContext)

  const DB = mySqlData?.filter(data => data.pais === 'España')

  return (
    <StationsTable data={DB} country='spain'/>
  )
}

export default SpainStations