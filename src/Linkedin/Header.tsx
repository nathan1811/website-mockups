import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Linkedin from "../Assets/linkedin-logo1.jpg";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Header = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", marginTop: "15px", marginLeft: "20px" }}>
          <Link
            to="/useragreement"
            style={{
              color: "black",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            User Agreement
          </Link>
          <Link
            to="/privacy"
            style={{
              color: "black",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Privacy Policy
          </Link>
          <Link
            to="/professional-community-policies"
            style={{
              color: "black",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            User Agreement
          </Link>
          <Link
            to="/cookie"
            style={{
              color: "black",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Cookie Policy
          </Link>
          <Link
            to="/copyright"
            style={{
              color: "black",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Copyright Policy
          </Link>
          <Link
            to="/california"
            style={{
              color: "black",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            California Privacy Disclosure
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
