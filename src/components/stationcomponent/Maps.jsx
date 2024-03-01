'use client'

import React, { useState } from 'react';

const Maps = ({ stationDB }) => {
  const [zoom, setZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    setZoomPosition({ x: xPercent, y: yPercent });
  };

  return (
    <div className='lg:w-[1280px] md:px-20 mt-10'>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-4">
      <h2 className="text-xl font-bold mb-2 text-center">Mapa de la Pista</h2>
      <div
        className="relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
      >
        <img
          src={stationDB?.planos}
          alt="Mapa de la Pista"
          className="w-full rounded-lg"
        />
        {zoom && (
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `url(${stationDB?.planos})`,
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundSize: '300%',
              
            }}
          />
        )}
      </div>
    </div>
    </div>
  );
}

export default Maps;
