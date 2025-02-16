import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
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

const Application3 = () => {
  const [submit, setSubmitted] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setSubmitted("Your Google Application has been submitted");
    setTimeout(() => navigate("/Congratulations4"), 5000);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      <div
        style={{
          marginTop: "75px",
          alignItems: "center",
          display: "block",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            flexDirection: "column",
          }}
        >
          <img
            style={{ height: "200px", borderRadius: "6px" }}
            src={Google}
          ></img>

          <Button
            size="medium"
            variant="contained"
            type="submit"
            onClick={handleClick}
            style={{
              justifyContent: "center",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "#0a66c2",
              width: "400px",
              height: "55px",
              fontWeight: "bold",
            }}
          >
            Submit Application
          </Button>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "600px",
            marginTop: "55px",
          }}
        >
          <h1
            style={{
              color: "black",
              fontSize: "18px",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            {submit}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Application3;
