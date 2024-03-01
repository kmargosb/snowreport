'use client'

import React, { useContext } from 'react'
import StationsTable from '../StationsTable'
import { SnowReportContext } from '@/app/context/SnowReport'
import Loading from '@/components/loading/Loading'

const AndorraStations = () => {

  const { mySqlData } = useContext(SnowReportContext)

  const DB = mySqlData?.filter(data => data.pais === "Andorra")

  if(!mySqlData){
    return(
      <Loading/>
    )
  }

  return (
    <StationsTable data={DB} country='andorra' />
  )
}

export default AndorraStations
