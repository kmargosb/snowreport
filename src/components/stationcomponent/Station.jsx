
import Image from 'next/image'
import snowboarding1 from '@/../public/snowboarding1.jpg'
import PieHalfDonutChart from './PieHalfDonutChart'
import TechnicalSheet from './TechnicalSheet'
import HowToArrive from './HowToArrive'

const Station = ({ stationDB }) => {

  return (
    <div className='flex flex-col w-full py-20'>
      <div className='flex w-full justify-around items-center'>
        <div className='flex flex-col'>
          <p className='text-6xl font-semibold text-text-secondary3'>{stationDB?.estacion}</p>
          <p className='text-text-secondary3 text-xl'>{stationDB?.region}</p>
        </div>
        <div className='flex flex-col items-center'>
          <p
            className={`${stationDB?.estado === 'Abierta' ? "bg-secondary" : stationDB?.estado === 'Cerrada' ? "bg-secondary2" : "bg-yellow-200"}
            text-white rounded-md text-center py-1 text-2xl lg:w-[250px]`}>
            {stationDB?.estado}
          </p>
          <p
            className='text-text-secondary3'>
            {stationDB?.calidad} - <span>{stationDB?.espesor_minimo}/{stationDB?.espesor_maximo}cm</span>
          </p>
        </div>
      </div>

      <HowToArrive stationDB={stationDB}/>

      <div className='w-[1280px] h-[300px] relative mt-20'>
        <Image src={snowboarding1} alt='snow' fill={true} className='object-cover object-bottom' />
        <div className="flex w-[1280px] justify-around my-10 absolute top-8">
          <div className="size-40 flex flex-col justify-center items-center shadow-md bg-white bg-opacity-80 rounded-lg hover:scale-110 transition-transform">
            <p className="text-2xl text-primary">Remontes</p>
            <p>{stationDB?.remontes}/<span>20</span></p>
          </div>
          <div className="size-40 flex flex-col justify-center items-center shadow-md bg-white bg-opacity-80 rounded-lg hover:scale-110 transition-transform">
            <p className="text-2xl text-primary">Pistas</p>
            <p>{stationDB?.pistas}/<span>20</span></p>
          </div>
          <div className="size-40 flex flex-col justify-center items-center shadow-md bg-white bg-opacity-80 rounded-lg hover:scale-110 transition-transform">
            <p className="text-2xl text-primary">Kilometros</p>
            <p>{stationDB?.kilometros}/<span>20</span></p>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-10 justify-center'>
        <PieHalfDonutChart stationDB={stationDB} />
        <div className='flex flex-col items-center gap-2'>
          <p className='text-secondary text-3xl font-semibold'>Verdes</p>
          <p className='text-primary2'>{stationDB?.verdes}/<span className='text-text-secondary3'>20</span></p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-primary text-3xl font-semibold'>Azules</p>
          <p className='text-primary2'>{stationDB?.azules}/<span className='text-text-secondary3'>20</span></p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-secondary2 text-3xl font-semibold'>Rojas</p>
          <p className='text-primary2'>{stationDB?.rojas}/<span className='text-text-secondary3'>20</span></p>
        </div>
        <div className='flex flex-col items-center gap-2 pr-14'>
          <p className='text-text-secondary3 text-3xl font-semibold'>Negras</p>
          <p className='text-primary2'>{stationDB?.negras}/<span className='text-text-secondary3'>20</span></p>
        </div>
      </div>
      <TechnicalSheet stationDB={stationDB} />
    </div>
  )
}

export default Station