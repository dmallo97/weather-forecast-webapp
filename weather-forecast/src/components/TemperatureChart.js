import React from 'react';
import { Line } from 'react-chartjs-2';

const data = [
    {
        'label': '0 hrs',
        'value': 70
    },
    {
        'label': '6 hrs',
        'value': 72
    },
    {
        'label': '12 hrs',
        'value': 80
    },
    {
        'label': '18 hrs',
        'value': 73
    },
];

const dataSample = {
    labels: ['January', 'February', 'March', 'April', 'May'],
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
            data: [65, 59, 80, 81, 56],
        }
    ]
}

const TemperatureChart = () => (
    <Line
        height={85}
        // redraw={true}
        data={dataSample}
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

export default TemperatureChart;