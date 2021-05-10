import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ forecast, selectedDayIndex}) => {

    const [data, setData] = useState({
        labels: ['0 hrs', '3 hrs', '6 hrs', '9 hrs', '12 hrs', '15 hrs', '18 hrs', '21 hrs'],
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
                data: [-1, -1, -1, -1, -1, -1, -1, -1],
            }
        ]
    });

    useEffect(() => {
        let dataCopy = data;
        dataCopy.datasets[0].data = forecast[selectedDayIndex];
        setData(dataCopy);
    }, [selectedDayIndex, forecast, data]);

    return (
        <Line
            height={85}
            data={data}
            key={Math.random()}
            options={{
                scales: {
                    ticks:{
                        display: false,
                        maxTicksLimit: 0
                    },
                    title:{
                        display: false
                    },
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }}
        />
    );
};

export default TemperatureChart;