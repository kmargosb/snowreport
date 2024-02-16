import { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { SnowReportContext } from '../context/SnowReport'

const Data = () => {

    const { stationsData } = useContext(SnowReportContext)

    return (
        <div className='z-10 flex justify-between relative top-10 px-4'>
            <p>nombre</p>
            <p>Estado</p>
            <p>Pistas</p>
            <p>Nieve</p>
            <p>Clima</p>
            <button><FaRegHeart className='size-6' /></button>
        </div>
    )
}

export default Data