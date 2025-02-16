import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Linkedin from "../Assets/linkedin-logo1.jpg";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Google from "../Assets/GoogleG.jpg";

const Footer = () => {
  return (
    <div style={{ marginTop: "233px" }}>
      <div
        style={{
          backgroundColor: "lightgrey",
          height: "10vh",
          display: "flex",
        }}
      >
        <div
          style={{
            gap: "25px",
            marginLeft: "20px",
            marginTop: "30px",
            display: "flex",
            textDecoration: "none",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            About
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/advertising"
          >
            Advertising
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/business"
          >
            Business
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/how-search-works"
          >
            How Search works
          </Link>
        </div>

        <div
          style={{
            gap: "25px",
            marginLeft: "885px",
            marginTop: "30px",
            display: "flex",
            fontWeight: "bold",
            justifyContent: "end",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/privacy"
          >
            Privacy
          </Link>
          <Link style={{ textDecoration: "none", color: "black" }} to="/terms">
            Terms
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/settings"
          >
            Settings
          </Link>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "100px",
              gap: "10px",
              marginTop: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
