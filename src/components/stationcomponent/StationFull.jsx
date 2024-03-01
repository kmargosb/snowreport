import React from 'react'
import NavbarStation from './NavbarStation'
import MenuSelector from './MenuSelector'
import Station from './Station'
import Loading from '../loading/Loading'

const StationFull = ({stationDB}) => {

  if(!stationDB){
    return(
      <div className='mt-[100px] w-screen justify-center text-center'>
        <Loading/>
      </div>
    )
  }
  return (
    <div className='w-full mt-[100px] flex flex-col items-center'>
      <NavbarStation />
      <MenuSelector stationDB={stationDB} />
    </div>
  )
}

export default StationFull