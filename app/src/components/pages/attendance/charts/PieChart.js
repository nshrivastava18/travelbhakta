import React from "react";
import { Pie } from "react-chartjs-2";
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

const PieChart = () => {
    const data = {
        labels: ["Sick Leave", "Casual Leave", "Paternity Leave"],
        datasets: [
            {
                data: [36.79, 35.85, 9.6],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <h4>Leave Type Distribution</h4>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
