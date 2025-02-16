import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Password from "./Password";
import ForgotPassword from "./ForgotPassword";
import NewWebsite from "./NewWebsite";
import Email from "./Email";
import Pin from "./Pin";

import SignUp from "./SignUp";
import UpdatedWebsite from "./UpdatedWebsite";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./en.json";
import hiJSON from "./hi.json";
import frJSON from "./fr.json";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import kotak from "./Kotak.png";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import "../App.scss";

function Test1() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "20%  1fr" }}>
        <div>
          <img
            style={{
              height: "75px",
              justifyContent: "center",
              display: "flex",
              width: "100%",
            }}
            src={kotak}
            alt="kotak logo"
          ></img>
        </div>
        <div className="kotak-header">
          <div className="kotak-right-header">
            <ul
              style={{
                display: "flex",
                gap: "24px",
              }}
            >
              <Link
                to="/login"
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Home
              </Link>

              <Link
                to="/about"
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                style={{
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          padding: "10px",
          height: "55px",
        }}
      >
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
            ></Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
export default Test1;
