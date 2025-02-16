import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Tesla from "../Assets/Tesla.jpg";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const Test = () => {
  return (
    <div>
      <div style={{ backgroundColor: "red", height: "100px" }}>
        <img style={{ height: "100px" }} src={Tesla}></img>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "10px",
            height: "55px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Test;
