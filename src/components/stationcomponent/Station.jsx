import { useState, useEffect } from 'react';
import Image from 'next/image';
import snowboarding1 from '@/../public/snowboarding1.jpg';
import PieHalfDonutChart from './PieHalfDonutChart';
import TechnicalSheet from './TechnicalSheet';
import HowToGetThere from './HowToGetThere';
import Loading from '../loading/Loading';
import MainInfoStation from './MainInfoStation';

const Station = ({ stationDB }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!stationDB) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col py-20 relative'>
      <MainInfoStation stationDB={stationDB} />
      <div className='flex justify-center md:m-20 max-md:mt-20 max-md:justify-center'>
        <HowToGetThere stationDB={stationDB} />
      </div>
      <div className='h-[300px] relative mt-20 overflow-hidden'>
        <div className="fixed top-0 left-0 w-full h-full z-[-10]">
          <Image src={snowboarding1} alt='snow' layout='fill' objectFit='cover' />
        </div>
        <div className="flex w-full justify-around my-10 relative">
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
      <div className='flex items-center gap-10 justify-center max-md:flex-col'>
        <PieHalfDonutChart stationDB={stationDB} />
        <div className='flex max-md:flex-col gap-6 max-md:mb-10'>
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
          <div className='flex flex-col items-center gap-2'>
            <p className='text-text-secondary3 text-3xl font-semibold'>Negras</p>
            <p className='text-primary2'>{stationDB?.negras_totales}</p>
          </div>
        </div>
      </div>
      <TechnicalSheet stationDB={stationDB} />
      <div className='absolute w-full h-[1100px] bottom-[1530px] bg-white z-[-1] max-md:h-[87rem] max-md:bottom-[122rem] max-sm:bottom-[2250px] max-sm:h-[1700px]'></div>
      <div className='absolute w-full h-[1420px] top-[1230px] bg-white z-[-1] max-md:top-[86rem] max-md:h-[116rem] max-sm:top-[1440px] max-sm:h-[2330px]'></div>
    </div>
  )
}

export default Station