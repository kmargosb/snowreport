'use client'

import React, { useState } from 'react'
import PortugalStations from './portugal/page'
import SpainStations from './spain/page'
import AndorraStations from './andorra/page'
import FranciaStations from './france/page'
import Image from 'next/image'
import spainFlag from '@/../public/spainFlag.png'
import franceFlag from '@/../public/franceFlag.png'
import portugalFlag from '@/../public/portugalFlag.png'
import andorraFlag from '@/../public/andorraFlag.png'
import './style.css'

const Stations2 = () => {

  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleCountrySelection = (country) => {
    // Si la misma bandera ya está seleccionada, deselecciónela (establecer el estado como null)
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      // Si se selecciona una nueva bandera, establecer el estado como el país correspondiente
      setSelectedCountry(country);
    }
  };

  return (
    
    <div className={`py-[110px] flex flex-col items-center min-h-screen ${selectedCountry === null ? 'justify-center' : ''}`}>
      <div className={`flex lg:gap-10 md:gap-3  ${selectedCountry === null ? 'max-sm:flex max-sm:flex-col max-sm:gap-6 md:flex-wrap md:px-20 justify-center' : ''}`}>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('spain')}>
          <Image src={spainFlag} width={200} height={100} />
          <span className="flag-name">España</span>
        </button>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('portugal')}>
          <Image src={portugalFlag} width={200} height={100} />
          <span className="flag-name">Portugal</span>
        </button>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('andorra')}>
          <Image src={andorraFlag} width={200} height={100} />
          <span className="flag-name">Andorra</span>
        </button>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('francia')}>
          <Image src={franceFlag} width={200} height={100} />
          <span className="flag-name">Francia</span>
        </button>
      </div>
      {selectedCountry === 'spain' && <SpainStations />}
      {selectedCountry === 'portugal' && <PortugalStations />}
      {selectedCountry === 'andorra' && <AndorraStations />}
      {selectedCountry === 'francia' && <FranciaStations />}
    </div>
  );
};

export default Stations2;
