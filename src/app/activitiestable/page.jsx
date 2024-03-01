'use client'

import React, { useContext } from 'react'
import StationsTable from '../stations/StationsTable'
import { SnowReportContext } from '../context/SnowReport'

const page = () => {

    const {mySqlData} = useContext(SnowReportContext)

    const snowparksFilter = mySqlData?.filter( item => item.snowpark !== "No")
    console.log(snowparksFilter)

  return (
    // <StationsTable/>
    <div></div>
  )
}

export default page