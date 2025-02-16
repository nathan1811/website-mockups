import React, { useEffect, useState } from "react";
import Test from "../Data/Test";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../App.scss";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Test></Test>
      <div className="header">
        <h1 className="titlename">Welcome to the Json data Fetching app</h1>
        <div className="space">
          <Button
            className="button"
            size="medium"
            variant="contained"
            onClick={() => navigate("/fetching1")}
            style={{
              justifyContent: "center",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              backgroundColor: "#7EC0DB",
              borderRadius: "100px",
              height: "100px",
              width: "300px",
              fontWeight: "bold",
              fontSize: "32px",
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Home;
