import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import people from "../Assets/people.jpg";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Kotak from "../Assets/KotakWork.jpg";
import Goldman from "../Assets/GoldmanWork.jpg";
import Amazon from "../Assets/Amazon.jpg";
import Google from "../Assets/GoogleWork.jpg";

import Footer from "./Footer";

const Jobs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              label="Language"
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
                background: "white",
              }}
            >
              <MenuItem style={{ color: "black", fontSize: "16px" }}>
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#0a66c2",
                  }}
                  to="/jobs"
                >
                  Jobs
                </Link>
              </MenuItem>
              <MenuItem style={{ color: "black", fontSize: "16px" }}>
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#0a66c2",
                  }}
                  to="/people"
                >
                  People
                </Link>
              </MenuItem>
              <MenuItem style={{ color: "black", fontSize: "16px" }}>
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#0a66c2",
                  }}
                  to="/learning"
                >
                  Learning
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div
        style={{
          marginTop: "75px",
          alignItems: "center",
          display: "block",
          justifyContent: "center",
        }}
      >
        <div
          onClick={() => navigate("/application1")}
          style={{ display: "flex", alignItems: "center" }}
        >
          {" "}
          <img
            style={{ height: "200px", borderRadius: "6px", cursor: "pointer" }}
            src={Goldman}
          ></img>
          <h2 style={{ cursor: "pointer" }}>React - Front-End-Developer</h2>
        </div>

        <div
          onClick={() => navigate("/application2")}
          style={{ display: "flex", alignItems: "center" }}
        >
          {" "}
          <img
            style={{
              height: "200px",
              borderRadius: "6px",
              marginRight: "55px",
              cursor: "pointer",
            }}
            src={Kotak}
          ></img>
          <h2 style={{ cursor: "pointer" }}>Software Engineer II</h2>
        </div>

        <div
          onClick={() => navigate("/application3")}
          style={{ display: "flex", alignItems: "center" }}
        >
          {" "}
          <img
            style={{
              height: "200px",
              borderRadius: "6px",
              marginRight: "55px",
              cursor: "pointer",
            }}
            src={Amazon}
          ></img>
          <h2 style={{ cursor: "pointer" }}>CEO</h2>
        </div>

        <div
          onClick={() => navigate("/application4")}
          style={{ display: "flex", alignItems: "center" }}
        >
          {" "}
          <img
            style={{
              height: "200px",
              borderRadius: "6px",
              marginRight: "55px",
              cursor: "pointer",
            }}
            src={Google}
          ></img>
          <h2 style={{ cursor: "pointer" }}>UI/UX Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
