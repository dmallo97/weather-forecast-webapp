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
    labels: ['January', 'February', 'March',
           'April', 'May'],
    datasets: [
        {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
        }
    ]
}

const TemperatureChart = () => (
    <Line
        data={dataSample}
        options={{
            title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
            },
            legend:{
                display:false,
                position:'right'
            }
        }}
    />
);

export default TemperatureChart;