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


  return (
    <SnowReportContext.Provider value={{ imgData }}>
      {children}
    </SnowReportContext.Provider>
  )
}

export default SnowReportContextProvider