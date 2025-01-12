import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024", "Nov 2024"],
    datasets: [
      {
        label: "Absences",
        data: [7, 14, 2, 17, 79],
        fill: false,
        borderColor: "#FF6384",
        tension: 0.1,
      },
    ],
  };

  const options = {
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
      <h4>Absences by Month</h4>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
