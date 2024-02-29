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

const SelectCountry = () => {

  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleCountrySelection = (country) => {
    if (selectedCountry === country) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
    }
  };

  return (
    
    <div className={`pt-[110px] flex flex-col gap-10 items-center min-h-screen ${selectedCountry === null ? 'justify-center' : ''}`}>

      <div className={`flex lg:gap-10 md:gap-3  ${selectedCountry === null ? 'max-sm:flex max-sm:flex-col max-sm:gap-6 md:flex-wrap md:px-20 justify-center' : ''}`}>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('ESPAÑA')}>
          <Image src={spainFlag} width={200} height={100} />
          <span className="flag-name">España</span>
        </button>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('PORTUGAL')}>
          <Image src={portugalFlag} width={200} height={100} />
          <span className="flag-name">Portugal</span>
        </button>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('ANDORRA')}>
          <Image src={andorraFlag} width={200} height={100} />
          <span className="flag-name">Andorra</span>
        </button>
        <button
          className={`transform hover:translate-y-1 transition duration-300 flag-container ${selectedCountry !== null ? 'max-sm:px-2' : 'md:p-3'}`} 
          onClick={() => handleCountrySelection('FRANCIA')}>
          <Image src={franceFlag} width={200} height={100} />
          <span className="flag-name">Francia</span>
        </button>
      </div>

      <p className={`text-text-secondary3 font-semibold text-2xl`}>{selectedCountry === null ? 'SELECCIONA EL PAÍS' : selectedCountry}</p>

      {selectedCountry === 'ESPAÑA' && <SpainStations />}
      {selectedCountry === 'PORTUGAL' && <PortugalStations />}
      {selectedCountry === 'ANDORRA' && <AndorraStations />}
      {selectedCountry === 'FRANCIA' && <FranciaStations />}
    </div>
  );
};

export default SelectCountry;
