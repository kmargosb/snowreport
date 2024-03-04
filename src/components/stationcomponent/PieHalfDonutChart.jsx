'use client'

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const PieHalfDonutChart = ({stationDB}) => {

  const green = Number(stationDB?.verdes_totales);
  const blue = Number(stationDB?.azules_totales);
  const red = Number(stationDB?.rojas_totales);
  const black = Number(stationDB?.negras_totales);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('pie-half-donut-chart'));

    const option = {
      title: {
        text: 'Pistas',
        left: 'center',
        top: '15%',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        bottom: 50,
        data: ['V', 'A', 'R', 'N'],
      },
      series: [
        {
          name: 'Pistas',
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: green, name: 'V' },
            { value: blue, name: 'A' },
            { value: red, name: 'R' },
            { value: black, name: 'N' },
          ],
          color: ['#3ec9a7', '#1D4EDF', '#7D3738', '#616668']
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose(); // Limpiar al desmontar el componente
    };
  }, [stationDB]);

  return <div id="pie-half-donut-chart" style={{ width: '300px', height: '400px' }} />;
};

export default PieHalfDonutChart;
