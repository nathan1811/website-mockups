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

import learning1 from "../Assets/learning1.jpg";
import learning2 from "../Assets/learning2.jpg";
import learning3 from "../Assets/learning3.jpg";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Footer from "./Footer";

import i18 from "i18next";
import { initReactI18next } from "react-i18next";
const data0 = `Browse most popular courses`;
const data1 = `VIDEO`;
const data2 = `Understand Redis`;
const data3 = `From: Redis Essential Training`;
const data4 = `VIDEO`;
const data5 = `Solution: Bank account Balance`;
const data6 = `From: Learning Java 11`;
const data7 = `VIDEO`;
const data8 = `Solution: Find the bug in string reversal`;
const data9 = `From: Learning Java 11`;
const data10 = `VIDEO`;
const data11 = `Hands-on data engineering`;
const data12 = `From: Hands-On Introduction: Data Engineering`;
const data13 = `VIDEO`;
const data14 = `Installing Airflow`;
const data15 = `From: Hands-On Introduction: Data Engineering`;
const data16 = `VIDEO`;
const data17 = `Comparing data manipulation`;
const data18 = `From: From pandas to Polars`;

const Learning = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const text0 = data0;
  const getHightlightedText0 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text0);

  const text1 = data1;
  const getHightlightedText1 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text1);

  const text2 = data2;
  const getHightlightedText2 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text2);

  const text3 = data3;
  const getHightlightedText3 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text3);

  const text4 = data4;
  const getHightlightedText4 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text4);

  const text5 = data5;
  const getHightlightedText5 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text5);

  const text6 = data6;
  const getHightlightedText6 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text6);

  const text7 = data7;
  const getHightlightedText7 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text7);

  const text8 = data8;
  const getHightlightedText8 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text8);

  const text9 = data9;
  const getHightlightedText9 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text9);

  const text10 = data10;
  const getHightlightedText10 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text10);

  const text11 = data11;
  const getHightlightedText11 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text11);

  const text12 = data12;
  const getHightlightedText12 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text12);

  const text13 = data13;
  const getHightlightedText13 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text13);

  const text14 = data14;
  const getHightlightedText14 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text14);

  const text15 = data15;
  const getHightlightedText15 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text15);

  const text16 = data16;
  const getHightlightedText16 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text16);

  const text17 = data17;
  const getHightlightedText17 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text17);

  const text18 = data18;
  const getHightlightedText18 = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text18);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
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
      <div style={{ marginTop: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
      </div>
      <div
        style={{
          marginTop: "40px",
          marginLeft: "50px",
          alignItems: "left",
          justifyContent: "left",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "left" }}>
          <h2>Browse most popular courses</h2>
        </div>

        <div style={{ padding: "40px", color: "black", fontSize: 18 }}>
          <div>
            <TextField
              type="text"
              variant="outlined"
              label="search"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.currentTarget.value)
              }
            ></TextField>
          </div>
        </div>

        <div
          style={{
            marginTop: "10px",
            alignItems: "center",
            display: "block",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  height: "200px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "355px",
                }}
                src={learning1}
              ></img>
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <p style={{ cursor: "pointer" }}>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText1(text1, inputValue)}
                    </code>
                  </pre>
                </p>
                <h3>
                  <p>
                    <pre>
                      <code
                        style={{ fontFamily: "Segoe UI", fontSize: "18px" }}
                      >
                        {getHightlightedText2(text2, inputValue)}
                      </code>
                    </pre>
                  </p>
                </h3>
                <p>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText3(text3, inputValue)}
                    </code>
                  </pre>
                </p>
              </div>
            </div>
          </Card>

          <Card
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  height: "200px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "355px",
                }}
                src={learning2}
              ></img>
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <p style={{ cursor: "pointer" }}>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText4(text4, inputValue)}
                    </code>
                  </pre>
                </p>
                <h3>
                  <p>
                    <pre>
                      <code
                        style={{ fontFamily: "Segoe UI", fontSize: "18px" }}
                      >
                        {getHightlightedText5(text5, inputValue)}
                      </code>
                    </pre>
                  </p>
                </h3>
                <p>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText6(text6, inputValue)}
                    </code>
                  </pre>
                </p>
              </div>
            </div>
          </Card>

          <Card
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  height: "200px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "355px",
                }}
                src={learning3}
              ></img>
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <p style={{ cursor: "pointer" }}>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText7(text7, inputValue)}
                    </code>
                  </pre>
                </p>
                <h3>
                  <p>
                    <pre>
                      <code
                        style={{ fontFamily: "Segoe UI", fontSize: "18px" }}
                      >
                        {getHightlightedText8(text8, inputValue)}
                      </code>
                    </pre>
                  </p>
                </h3>
                <p>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText9(text9, inputValue)}
                    </code>
                  </pre>
                </p>
              </div>
            </div>
          </Card>

          <Card
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  height: "200px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "355px",
                }}
                src={learning1}
              ></img>
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <p style={{ cursor: "pointer" }}>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText10(text10, inputValue)}
                    </code>
                  </pre>
                </p>
                <h3>
                  <p>
                    <pre>
                      <code
                        style={{ fontFamily: "Segoe UI", fontSize: "18px" }}
                      >
                        {getHightlightedText11(text11, inputValue)}
                      </code>
                    </pre>
                  </p>
                </h3>
                <p>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText12(text12, inputValue)}
                    </code>
                  </pre>
                </p>
              </div>
            </div>
          </Card>

          <Card
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  height: "200px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "355px",
                }}
                src={learning2}
              ></img>
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <p style={{ cursor: "pointer" }}>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText13(text13, inputValue)}
                    </code>
                  </pre>
                </p>
                <h3>
                  <p>
                    <pre>
                      <code
                        style={{ fontFamily: "Segoe UI", fontSize: "18px" }}
                      >
                        {getHightlightedText14(text14, inputValue)}
                      </code>
                    </pre>
                  </p>
                </h3>
                <p>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText15(text15, inputValue)}
                    </code>
                  </pre>
                </p>
              </div>
            </div>
          </Card>

          <Card
            style={{
              backgroundColor: "lightgrey",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  height: "200px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "355px",
                }}
                src={learning3}
              ></img>
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <p style={{ cursor: "pointer" }}>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText16(text16, inputValue)}
                    </code>
                  </pre>
                </p>
                <h3>
                  <p>
                    <pre>
                      <code
                        style={{ fontFamily: "Segoe UI", fontSize: "18px" }}
                      >
                        {getHightlightedText17(text17, inputValue)}
                      </code>
                    </pre>
                  </p>
                </h3>
                <p>
                  <pre>
                    <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                      {getHightlightedText18(text18, inputValue)}
                    </code>
                  </pre>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Learning;
