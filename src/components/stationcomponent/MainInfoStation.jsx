import Link from 'next/link'
import React from 'react'

const MainInfoStation = ({ stationDB }) => {
    return (
        <div className='flex max-md:flex-col'>
            <div className='bg-primary2 md:min-w-1/2 text-white md:h-[300px] flex flex-col p-10 items-end gap-4 shadow-lg max-sm:w-full'>
                <p className='text-7xl font-semibold text-primary'>{stationDB?.estacion}</p>
                <p className='text-white text-3xl'>{stationDB?.region}</p>
                <Link href={stationDB?.web_oficial} target='_blank' className='text-text-secondary3 font-semibold hover:text-secondary2'>
                    Web Oficial
                </Link>
            </div>
            <div className="overflow-hidden shadow-lg flex max-md:justify-center max-md:text-center ">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        <p className={`${stationDB?.estado === 'Abierta'
                            ? "bg-secondary"
                            : stationDB?.estado === 'Cerrada'
                                ? "bg-secondary2"
                                : "bg-yellow-300"} text-white rounded-md text-center py-1 text-2xl px-8`}>
                            {stationDB?.estado}
                        </p>
                    </div>
                    <div className="font-bold text-xl mt-4 mb-2">Calidad de la nieve: </div>
                    <p className="text-gray-700 text-base">
                        [{stationDB?.calidad}]
                    </p>
                    <div className="font-bold text-xl mt-4 mb-2">Espesor:</div>
                    <p className="text-gray-700 text-base">
                        Mínimo: [{stationDB?.espesor_minimo}] cm
                    </p>
                    <p className="text-gray-700 text-base">
                        Máximo: [{stationDB?.espesor_maximo}] cm
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainInfoStation