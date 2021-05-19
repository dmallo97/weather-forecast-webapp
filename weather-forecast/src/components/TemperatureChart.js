import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ forecast, selectedDayIndex }) => {
  const [labels, setLabels] = useState([
    '0 hrs',
    '3 hrs',
    '6 hrs',
    '9 hrs',
    '12 hrs',
    '15 hrs',
    '18 hrs',
    '21 hrs',
  ]);

  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const newTempData = [];
    const newLabels = [];
    forecast[selectedDayIndex].map((reading) => {
      newTempData.push(reading.temperature);
      newLabels.push(reading.timestamp);
      return reading; // hace falta?
    });
    setData(newTempData);
    setLabels(newLabels);
  }, [selectedDayIndex, forecast]);

  return (
    <Line
      height={85}
      data={{
        labels,
        datasets: [
          {
            pointStyle: 'circle',
            pointRadius: 0.05,
            pointHoverRadius: 6,
            hitRadius: 3,
            fill: true,
            tension: 0.3,
            backgroundColor: '#EEF4FE',
            borderColor: '#5596F6',
            borderWidth: 3,
            data,
          },
        ],
      }}
      key={Math.random()}
      options={{
        scales: {
          ticks: {
            display: false,
            maxTicksLimit: 0,
          },
          title: {
            display: false,
          },
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  );
};

TemperatureChart.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
      })
    )
  ).isRequired,
  selectedDayIndex: PropTypes.number.isRequired,
};

export default TemperatureChart;
