import React from "react";
import { Divider } from "@mui/material";

const StudentPortal = () => {
  const containerStyle = {
    border: "1px solid #ccc", // Đặt border
    borderRadius: "10px", // Đặt border radius
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đặt đổ bóng
    padding: "20px", // Đặt khoảng cách bên trong border
    backgroundColor: "#53A6D8",
  };

  const contentStyle = {
    color: "red",
    marginBottom: "10px",
    fontSize: "24px",
    paddingLeft: "10px",
    marginTop: "10px",
  };

  const content = {
    paddingLeft: "10px",
  };

  const acontent = {
    margin: "5px 0",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          border: "1px solid #5BA8A0",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#3f51b5" }}>
          TEXT
        </h2>
        <p style={contentStyle}>text 1</p>
        <a href="https://.vn/" style={content}>
         
        </a>
        <Divider style={acontent} />
        <p style={contentStyle}>text 2</p>
        <a href="https://.com" style={content}>
          https://instructure.com
        </a>
        <Divider style={acontent} />
        <p style={contentStyle}>Elearning</p>
        <a href="https://elearning.dntu.edu.vn" style={content}>
          https://edu.vn
        </a>
        <Divider style={acontent} />
        <p style={contentStyle}>Facebook</p>
        <a href="https://www.facebook.com/dntuedu" style={content}>
          https://www.facebook.com/
        </a>
      </div>
    </div>
  );
};

export default StudentPortal;
