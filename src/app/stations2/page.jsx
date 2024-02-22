'use client'

import React, { useState } from 'react'
import PortugalStations from './portugal/page'
import EspanaStations from './espana/page'
import AndorraStations from './andorra/page'
import FranciaStations from './francia/page'
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
      <div className={`flex lg:gap-10 md:gap-3  ${selectedCountry === null ? 'max-sm:flex max-sm:flex-col max-sm:gap-6' : ''}`}>
        <button
          className="transform hover:translate-y-1 transition duration-300 flag-container"
          onClick={() => handleCountrySelection('espana')}>
          <Image src={spainFlag} width={200} height={100} />
          <span className="flag-name">España</span>
        </button>
        <button
          className="transform hover:translate-y-1 transition duration-300 flag-container"
          onClick={() => handleCountrySelection('portugal')}>
          <Image src={portugalFlag} width={200} height={100} />
          <span className="flag-name">Portugal</span>
        </button>
        <button
          className="transform hover:translate-y-1 transition duration-300 flag-container"
          onClick={() => handleCountrySelection('andorra')}>
          <Image src={andorraFlag} width={200} height={100} />
          <span className="flag-name">Andorra</span>
        </button>
        <button
          className="transform hover:translate-y-1 transition duration-300 flag-container"
          onClick={() => handleCountrySelection('francia')}>
          <Image src={franceFlag} width={200} height={100} />
          <span className="flag-name">Francia</span>
        </button>
      </div>
      {selectedCountry === 'espana' && <EspanaStations />}
      {selectedCountry === 'portugal' && <PortugalStations />}
      {selectedCountry === 'andorra' && <AndorraStations />}
      {selectedCountry === 'francia' && <FranciaStations />}
    </div>
  );
};

export default Stations2;
