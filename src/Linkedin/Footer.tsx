import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Linkedin from "../Assets/linkedin-logo1.jpg";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSON from "./en.json";
import hiJSON from "./hi.json";
import frJSON from "./fr.json";

const Footer = () => {
  const [lan, setLan] = useState("en");

  const handleClick = () => {
    setLan("en");
  };

  const handleHindi = () => {
    setLan("hi");
  };

  const handleFrench = () => {
    setLan("fr");
  };

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          ...enJSON,
        },
      },
      hi: {
        translation: {
          ...hiJSON,
        },
      },
      fr: {
        translation: {
          ...frJSON,
        },
      },
    },
    lng: lan,
  });
  return (
    <div>
      <div
        style={{
          backgroundColor: "lightgrey",
          height: "75vh",
          display: "flex",
        }}
      >
        <img
          style={{
            height: "30px",
            width: "120px",
            marginTop: "40px",
            marginLeft: "30px",
          }}
          src={Linkedin}
        ></img>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "100px",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <h4>General</h4>
            <Link
              to="/signup"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
            <Link
              to="/help"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Help Center
            </Link>
            <Link
              to="/about"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              to="/press"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Press
            </Link>
            <Link
              to="/blog"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Careers
            </Link>
            <Link
              to="/developers"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Developers
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "200px",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <h4>Browse LinkedIn</h4>
            <Link
              to="/learning"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Learning
            </Link>
            <Link
              to="/jobs"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Jobs
            </Link>
            <Link
              to="/games"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Games
            </Link>
            <Link
              to="/salary"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Salary
            </Link>
            <Link
              to="/mobile"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Mobile
            </Link>
            <Link
              to="/services"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <Link
              to="/products"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Products
            </Link>
            <Link
              to="/topcompanieshub"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Top Companies Hub
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "200px",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <h4>Business Solutions</h4>
            <Link
              to="/talent"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Talent
            </Link>
            <Link
              to="/marketing"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Marketing
            </Link>
            <Link
              to="/sales"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Sales
            </Link>
            <Link
              to="/learning"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Learning
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "200px",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <h4>Directories</h4>
            <Link
              to="/members"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Members
            </Link>
            <Link
              to="/jobs"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Jobs
            </Link>
            <Link
              to="/companies"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Companies
            </Link>
            <Link
              to="/featured"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Featured
            </Link>
            <Link
              to="/learning"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Learning
            </Link>
            <Link
              to="/posts"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Posts
            </Link>
            <Link
              to="/articles"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Articles
            </Link>
            <Link
              to="/schools"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Schools
            </Link>
            <Link
              to="/news"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              News
            </Link>
            <Link
              to="/newsletters"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              News Letters
            </Link>
            <Link
              to="/services"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Services
            </Link>
            <Link
              to="/products"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Products
            </Link>
            <Link
              to="/advice"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Advice
            </Link>
            <Link
              to="/peoplesearch"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              People Search
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: "80px" }}>
        <div style={{ display: "flex" }}>
          {" "}
          <img
            style={{
              height: "20px",
              width: "auto",
              marginTop: "20px",
              marginLeft: "100px",
            }}
            src={Linkedin}
            alt="linkedin photo"
          ></img>
          <p style={{ marginBottom: "8px", marginLeft: "20px" }}>© 2024</p>
          <div
            style={{ display: "flex", marginTop: "15px", marginLeft: "20px" }}
          >
            <Link
              to="/about"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              About
            </Link>
            <Link
              to="/accessibility"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Accessibility
            </Link>
            <Link
              to="/agreement"
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
              to="/brand-policy"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Brand Policy
            </Link>
            <Link
              to="/guest-control"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Guest Control
            </Link>
            <Link
              to="/community-guidelines"
              style={{
                color: "black",
                fontSize: "18px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Community Guidelines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
