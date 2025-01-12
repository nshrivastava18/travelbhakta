import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "Finance",
      "IT",
      "Sales",
      "Human Resources",
      "Marketing",
      "Administration",
      "Customer Support",
      "Accounting",
    ],
    datasets: [
      {
        label: "Attendance Rate (%)",
        data: [92, 85, 80, 95, 88, 78, 84, 90],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    responsive: true,
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
      <h4>Attendance by Department</h4>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
