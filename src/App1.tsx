import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./MuiComponents/About";
import Contact from "./MuiComponents/Contact";
import Password from "./MuiComponents/Password";
import ForgotPassword from "./MuiComponents/ForgotPassword";
import NewWebsite from "./MuiComponents/NewWebsite";
import Email from "./MuiComponents/Email";
import Pin from "./MuiComponents/Pin";

import SignUp from "./MuiComponents/SignUp";
import UpdatedWebsite from "./MuiComponents/UpdatedWebsite";

import "./App.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./MuiComponents/en.json";
import hiJSON from "./MuiComponents/hi.json";
import frJSON from "./MuiComponents/fr.json";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import kotak from "./MuiComponents/Kotak.png";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Test from "./MuiComponents/Test1";

function App1() {
  return (
    <div>
      <Router>
        <div style={{ backgroundColor: "rgb(245,245,245)", height: "300vh" }}>
          <Routes>
            <Route path="/" element={<Password />}></Route>
            <Route path="/forgot" element={<ForgotPassword />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Password />}></Route>
            <Route path="/new" element={<NewWebsite />}></Route>
            <Route path="/email" element={<Email />}></Route>
            <Route path="/pin" element={<Pin />}></Route>
            <Route path="/update" element={<UpdatedWebsite />}></Route>
            <Route path="/sign" element={<SignUp />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App1;
