import React from 'react'
import Cards from './Cards'
import Link from 'next/link'

const Stations = () => {

  return (
    <Link href={`http://localhost:3000/stations/`} className='flex flex-col items-center justify-center'>
      <p className='bg-blue-300 w-full flex justify-center font-semibold text-2xl py-2'>España</p>
      <Cards/>
    </Link>
  )
}

export default Stations