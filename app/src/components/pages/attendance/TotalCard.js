import React from "react";

const TotalCard = ({ title, value }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "#f9f9f9"
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default TotalCard;
