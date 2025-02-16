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

const Congratulations2 = () => {
  const [submit, setSubmitted] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setSubmitted("Your Goldman Sachs Application has been submitted");
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
            src={Kotak}
          ></img>
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
            }}
          >
            Congratulations your Application has been Approved!!
          </h1>
          <p style={{ marginLeft: "45px" }}>
            Ashok Vaswani our CEO will connect with you shortly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Congratulations2;
