import React from "react";
import { Grid, Typography } from "@mui/material";
//import Background from "../assets/img/spkt1.npg";
import { Link } from "react-router-dom";
import Background1 from "../assets/img/bannerspkt.jpg"

const Banner = () => {
  return (
    <div
      elevation={3}
      style={{
       // backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#fff",
        
      }}
    >
      <div
        elevation={3}
        style={{
          maxWidth: "1260px",
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingRight: "20px",
          paddingLeft: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Grid
        
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>

            <div style={{ marginRight: "10px" }}>
              <Link to="/dashboard">
                <img
                  src={Background1}
                  alt="Logo"
                  className="header-logo"
                  style={{ height: "auto",
                            width: "100%" }}
                />
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* <Typography
                variant="subtitle1"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  fontWeight: "bold",
                  lineHeight: "24px",
                }}
              >
                University of Technology and Education Ho Chi Minh city
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  color: "#333",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Faculty For High Quality Training.
              </Typography> */}
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography
            
              variant="h4"
              
              style={{
                color: "#4056A2",
                fontSize: "22px",
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                letterSpacing: "1px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                paddingBottom: "25px",
              }}
            >
              Information Technology Department Project Management System
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Banner;
