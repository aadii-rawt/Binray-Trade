import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    LineElement, 
    PointElement, 
    LinearScale, 
    Title, 
    Tooltip, 
    Legend, 
    CategoryScale, 
    TimeScale 
} from 'chart.js';

// Registering the required components, including the time scale
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, TimeScale);

const generateManipulatedData = () => {
    const data = [];
    let lastValue = 100;

    for (let i = 0; i < 100; i++) {
        const change = Math.random() > 0.5 ? Math.random() * 10 : Math.random() * -10;
        lastValue += change;

        if (i === 50) lastValue += 50;
        if (i === 70) lastValue -= 80;

        data.push({
            x: i,
            y: lastValue
        });
    }

    return data;
};

const FakeChart = () => {
    const manipulatedData = generateManipulatedData();

    const chartData = {
        labels: manipulatedData.map((dataPoint) => dataPoint.x),
        datasets: [
            {
                label: 'Manipulated Price',
                data: manipulatedData.map((dataPoint) => dataPoint.y),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: false,
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Manipulated Chart Example',
            },
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                beginAtZero: true,
            }
        },
    };

    return (
        <div>
            <h2>Manipulated Chart Example</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default FakeChart;
