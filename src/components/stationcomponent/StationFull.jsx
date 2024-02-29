import React from 'react'
import NavbarStation from './NavbarStation'
import MenuSelector from './MenuSelector'
import Station from './Station'

const StationFull = ({stationDB}) => {
  return (
    <div className='w-full mt-[100px] flex flex-col items-center'>
      <NavbarStation />
      <MenuSelector stationDB={stationDB} />
    </div>
  )
}

export default StationFull