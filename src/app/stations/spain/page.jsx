'use client'

import React, { useContext } from 'react'
import StationsTable from '../StationsTable'
import { SnowReportContext } from '@/app/context/SnowReport'
import Loading from '@/components/loading/Loading'

const SpainStations = () => {

  const {mySqlData} = useContext(SnowReportContext)

  const DB = mySqlData?.filter(data => data.pais === 'España')

  if(!mySqlData){
    return(
      <Loading/>
    )
  }

  return (
    <StationsTable data={DB} country='spain'/>
  )
}

export default SpainStations