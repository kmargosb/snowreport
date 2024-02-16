'use client'

import React, { createContext, useState, useEffect } from 'react'

export const SnowReportContext = createContext(null);

const SnowReportContextProvider = ({ children }) => {

  //Imagen random unsplash api
  const [imgData, setImgData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos/?client_id=sii7XnmGd82ogp6BeCW1Hbg1udclv7HrqLaziLeSZzI');
        const data = await response.json();
        setImgData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  // Data snowreport api
  const [stationsData, setStationsData] = useState(null)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/stations/');
        const data = await response.json();
        console.log(data)
        setStationsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);


  return (
    <SnowReportContext.Provider value={{ imgData, stationsData }}>
      {children}
    </SnowReportContext.Provider>
  )
}

export default SnowReportContextProvider