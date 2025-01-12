import React from "react";
import TotalCard from "./TotalCard";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import GaugeChart from "./charts/GaugeChart";

const Dashboard = () => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", padding: "20px" }}>
            {/* Metrics */}
            <TotalCard title="Total Employees" value="28" />
            <TotalCard title="Employee Days Present" value="1028" />
            <TotalCard title="Employee Days Absent" value="296" />
            <TotalCard title="Unscheduled Days Leave" value="108" />

            {/* Charts */}
            <div style={{ gridColumn: "span 2" }}>
                <BarChart />
            </div>
            <div style={{ gridColumn: "span 2" }}>
                <LineChart />
            </div>
            <PieChart />
            <PieChart />
            <GaugeChart value={16.99} label="Absenteeism Rate" />
            <GaugeChart value={83.01} label="Attendance Rate" />
        </div>
    );
};

export default Dashboard;
