// components/TechnicalSheet.js

import React from 'react';

const TechnicalSheet = ({stationDB}) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-4">
      <h2 className="text-xl font-bold mb-4">Ficha Técnica</h2>
      <div className="grid grid-cols-2 gap-4">
        <p><strong>País:</strong> {stationDB?.pais}</p>
        <p><strong>Región:</strong> {stationDB?.region}</p>
        <p><strong>Estación:</strong> {stationDB?.estacion}</p>
        <p><strong>Estado:</strong> {stationDB?.estado}</p>
        <p><strong>Dirección:</strong> {stationDB?.direccion}</p>
        <p><strong>Fecha de Apertura:</strong> {stationDB?.apertura}</p>
        <p><strong>Fecha de Cierre:</strong> {stationDB?.cierre}</p>
        <p><strong>Remontes:</strong> {stationDB?.remontes}</p>
        <p><strong>Telesillas:</strong> {stationDB?.telesillas}</p>
        <p><strong>Telecabinas:</strong> {stationDB?.telecabinas}</p>
        <p><strong>Telesquís:</strong> {stationDB?.telesquis}</p>
        <p><strong>Alfombras Mágicas:</strong> {stationDB?.alfombras}</p>
        <p><strong>Cañones de Nieve:</strong> {stationDB?.canones_nieve}</p>
        <p><strong>Pistas Verdes:</strong> {stationDB?.verdes}</p>
        <p><strong>Pistas Azules:</strong> {stationDB?.azules}</p>
        <p><strong>Pistas Rojas:</strong> {stationDB?.rojas}</p>
        <p><strong>Pistas Negras:</strong> {stationDB?.negras}</p>
        <p><strong>Snowpark:</strong> {stationDB?.snowpark}</p>
        <p><strong>Área de Competición:</strong> {stationDB?.area_competicion}</p>
        <p><strong>Calidad de Nieve:</strong> {stationDB?.calidad}</p>
        <p><strong>Espesor Mínimo:</strong> {stationDB?.espesor_minimo} cm</p>
        <p><strong>Espesor Máximo:</strong> {stationDB?.espesor_maximo} cm</p>
        <p><strong>Riesgo de Aludes:</strong> {stationDB?.peligro_aludes}</p>
        
      </div>
    </div>
  );
}

export default TechnicalSheet;
