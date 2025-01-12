import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const GaugeChart = ({ value, label }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
        cutout: '50%',
        rotation: -90,
        circumference: 180,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${label}: ${context.raw}%`;
          },
        },
      },
    },
    rotation: -90,
    circumference: 180,
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
      <h4>{label}</h4>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default GaugeChart;
