'use client'

import { SnowReportContext } from '../context/SnowReport.jsx'
import React, { useContext } from 'react'
import { STATION_DB } from '@/app/api/data/data.jsx'
import Link from 'next/link.js'

const Cards = () => {

  const { imgData } = useContext(SnowReportContext)

  const stationsByCountry = {};

  STATION_DB.forEach(station => {
    const { country, region, ...details } = station;
    if (!stationsByCountry[country]) {
      stationsByCountry[country] = {};
    }
    if (!stationsByCountry[country][region]) {
      stationsByCountry[country][region] = [];
    }
    stationsByCountry[country][region].push(details);
  });
  console.log(stationsByCountry)

  return (
    <>
      <div className='flex flex-col items-center justify-center mt-[90px] py-10'>
        {Object.entries(stationsByCountry).map(([country, regions]) => (
          <div key={country}>
            <p className='bg-blue-300 lg:w-[1280px] md:w-[650px] max-sm:w-screen font-semibold text-2xl py-2 pl-5'>{country}</p>
            {Object.entries(regions).map(([region, stations]) => (
              <div key={`${country}-${region}`} className='w-full'>
                <p className='bg-blue-100 lg:w-[1280px] md:w-[650px] max-sm:w-screen font-semibold py-1 pl-5'>{region}</p>
                <ul className='w-full'>
                  {stations.map((station, index) => (
                    <Link href={`stations/${station.id}`} key={index} className='h-[60px] flex items-center justify-between border-y pl-5 w-full'>
                      <p className='w-1/4'>{station.station}</p>
                      <p className='w-1/6'>{station.price} €</p>
                      <p className='w-1/6'>{station.minimum_thickness}/{station.maximum_thickness} cm</p>
                      <p className='w-1/6'>{station.kilometers} km</p>
                      <p className='w-1/12'>{station.state}</p>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default Cards