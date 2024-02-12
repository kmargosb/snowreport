import SingOutBtn from '@/components/SingOutBtn'
import React from 'react'

const Profile = () => {
  return (
    <div className=' h-screen bg-slate-100 -z-10'>
      <div className='w-80 py-16 h-full left-0 bg-slate-50 shadow-xl flex flex-col justify-between'>
        <div className='flex flex-col gap-5'>
          <button>Cuenta</button>
          <button>Me gusta</button>
          <button>History</button>
        </div>
        <div>
          <SingOutBtn />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Profile