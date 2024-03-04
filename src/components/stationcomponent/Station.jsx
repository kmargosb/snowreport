
import Image from 'next/image'
import snowboarding1 from '@/../public/snowboarding1.jpg'
import PieHalfDonutChart from './PieHalfDonutChart'
import TechnicalSheet from './TechnicalSheet'
import HowToGetThere from './HowToGetThere'
import Loading from '../loading/Loading'

const Station = ({ stationDB }) => {

  if(!stationDB){
    return(
      <Loading/>
    )
  }

  return (
    <div className='flex flex-col py-20'>
      <div className='flex lg:justify-around items-center lg:w-full md:justify-center gap-14 sm:justify-center max-sm:flex-col max-sm:gap-4'>
        <div className='flex flex-col'>
          <p className='text-6xl font-semibold text-text-secondary3'>{stationDB?.estacion}</p>
          <p className='text-text-secondary3 text-xl'>{stationDB?.region}</p>
        </div>
        <div className='flex flex-col items-center'>
          <p
            className={`${stationDB?.estado === 'Abierta' ? "bg-secondary" : stationDB?.estado === 'Cerrada' ? "bg-secondary2" : "bg-yellow-200"}
            text-white rounded-md text-center py-1 text-2xl px-8`}>
            {stationDB?.estado}
          </p>
          <p
            className='text-text-secondary3'>
            {stationDB?.calidad} - <span>{stationDB?.espesor_minimo}/{stationDB?.espesor_maximo}cm</span>
          </p>
        </div>
      </div>
      <div className='w-full flex justify-center mt-5'>
        <HowToGetThere stationDB={stationDB} />
      </div>

      <div className='w-[1280px] h-[300px] relative mt-20'>
        <Image src={snowboarding1} alt='snow' fill={true} className='object-cover object-bottom' />
        <div className="flex w-[1280px] justify-around my-10 absolute top-8">
          <div className="size-40 flex flex-col justify-center items-center shadow-md bg-white bg-opacity-80 rounded-lg hover:scale-110 transition-transform">
            <p className="text-2xl text-primary">Remontes</p>
            <p>{stationDB?.remontes_abiertos}/<span>{stationDB?.remontes_totales}</span></p>
          </div>
          <div className="size-40 flex flex-col justify-center items-center shadow-md bg-white bg-opacity-80 rounded-lg hover:scale-110 transition-transform">
            <p className="text-2xl text-primary">Pistas</p>
            <p>{stationDB?.pistas_abiertas}/<span>{stationDB?.pistas_totales}</span></p>
          </div>
          <div className="size-40 flex flex-col justify-center items-center shadow-md bg-white bg-opacity-80 rounded-lg hover:scale-110 transition-transform">
            <p className="text-2xl text-primary">Kilometros</p>
            <p>{stationDB?.kilometros_abiertos}/<span>{stationDB?.kilometros_totales}</span></p>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-10 justify-center'>
        <PieHalfDonutChart stationDB={stationDB} />
        <div className='flex flex-col items-center gap-2'>
          <p className='text-secondary text-3xl font-semibold'>Verdes</p>
          <p className='text-primary2'>{stationDB?.verdes_totales}</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-primary text-3xl font-semibold'>Azules</p>
          <p className='text-primary2'>{stationDB?.azules_totales}</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-secondary2 text-3xl font-semibold'>Rojas</p>
          <p className='text-primary2'>{stationDB?.rojas_totales}</p>
        </div>
        <div className='flex flex-col items-center gap-2 pr-14'>
          <p className='text-text-secondary3 text-3xl font-semibold'>Negras</p>
          <p className='text-primary2'>{stationDB?.negras_totales}</p>
        </div>
      </div>
      <TechnicalSheet stationDB={stationDB} />
    </div>
  )
}

export default Station