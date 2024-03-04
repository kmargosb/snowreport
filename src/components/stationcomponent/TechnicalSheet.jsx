'use client'
import { SnowReportContext } from '@/app/context/SnowReport';
import { useContext } from 'react';


const TechnicalSheet = ({ stationDB }) => {

  const { setMenuSelected } = useContext(SnowReportContext)

  const handleMenuSelection = (menu) => {
    setMenuSelected(menu);
  };

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">Ficha Técnica</h2>
      <div className="grid grid-cols-2 gap-4">
        <p><strong>País:</strong> {stationDB?.pais}</p>
        <p><strong>Región:</strong> {stationDB?.region}</p>
        <p><strong>Estación:</strong> {stationDB?.estacion}</p>
        <p><strong>Estado:</strong> {stationDB?.estado}</p>
        <p><strong>Precio:</strong> {stationDB?.precio} euros</p>
        <p><strong>Dirección:</strong> {stationDB?.direccion}</p>
        <p><strong>Fecha de Apertura:</strong> {stationDB?.apertura}</p>
        <p><strong>Fecha de Cierre:</strong> {stationDB?.cierre}</p>
        <p><strong>Remontes Abiertos/Total:</strong> {stationDB?.remontes_abiertos}/{stationDB?.remontes_totales}</p>
        <p><strong>Telesillas:</strong> {stationDB?.telesillas}</p>
        <p><strong>Telecabinas:</strong> {stationDB?.telecabinas}</p>
        <p><strong>Telesquís:</strong> {stationDB?.telesquis}</p>
        <p><strong>Alfombras Mágicas:</strong> {stationDB?.alfombras}</p>
        <p><strong>Cañones de Nieve:</strong> {stationDB?.canones_nieve}</p>
        <p><strong>Pistas Verdes Totales:</strong> {stationDB?.verdes_totales}</p>
        <p><strong>Pistas Azules Totales:</strong> {stationDB?.azules_totales}</p>
        <p><strong>Pistas Rojas Totales:</strong> {stationDB?.rojas_totales}</p>
        <p><strong>Pistas Negras Totales:</strong> {stationDB?.negras_totales}</p>
        <p><strong>Snowpark:</strong> {stationDB?.snowpark}</p>
        <p><strong>Área de Competición:</strong> {stationDB?.area_competicion}</p>
        <p><strong>Calidad de Nieve:</strong> {stationDB?.calidad}</p>
        <p><strong>Riesgo de Aludes:</strong> {stationDB?.peligro_aludes}</p>
        <p><strong>Espesor Mínimo:</strong> {stationDB?.espesor_minimo} cm</p>
        <p><strong>Espesor Máximo:</strong> {stationDB?.espesor_maximo} cm</p>
        <p><strong>Kilómetros Abiertos/Total:</strong> {stationDB?.kilometros_abiertos}/{stationDB?.kilometros_totales}</p>
        <p><strong>Pistas Abiertas/Total:</strong> {stationDB?.pistas_abiertas}/{stationDB?.pistas_totales}</p>
        <p><strong>Esquí de Montaña:</strong> {stationDB?.esqui_montana}</p>
        <p><strong>Raquetas:</strong> {stationDB?.raquetas}</p>
        <p><strong>Zona de Trineos:</strong> {stationDB?.zona_trineos}</p>
        <p onClick={() => handleMenuSelection('Planos')} className='cursor-pointer '><strong>Planos:</strong> <span className='text-primary'>Ver planos</span></p>
      </div>
    </div>
  );
}

export default TechnicalSheet;
