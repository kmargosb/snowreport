'use client'

import React, { useContext } from 'react'
import Loading from '@/components/loading/Loading'
import { SnowReportContext } from '@/app/context/SnowReport'
import ActivitiesTable from '../../(main)/activities/ActivitiesTable'

const page = ({ params }) => {

    const { mySqlData } = useContext(SnowReportContext)


    if (!mySqlData && params) {
        return (
            <div className='mt-[100px] flex w-screen justify-center'><Loading /></div>
        )
    }

    let filteredData = [];
    let activity = '';

    if (params.id === "snowparks") {
        filteredData = mySqlData?.filter(item => item.snowpark !== "No")
        activity = 'Snowparks'
    } else if (params.id === 'mountainskiing') {
        filteredData = mySqlData?.filter(item => item.esqui_montana !== "No")
        activity = 'Esqui de Montaña'
    } else if (params.id === 'snowshoes') {
        filteredData = mySqlData?.filter(item => item.raquetas !== "No")
        activity = 'Raquetas'
    } else {
        filteredData = mySqlData?.filter(item => item.zona_trineos !== "No")
        activity = 'Trineos de Nieve'
    }

    return (

        <div className='mt-[100px] w-screen flex  flex-col items-center'>
            <p className='text-center text-primary font-semibold text-3xl mt-10'>{activity}</p>
            {!filteredData ? <Loading /> : <ActivitiesTable data={filteredData} />}
        </div>
    )
}

export default page