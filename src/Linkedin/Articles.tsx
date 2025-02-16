import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Footer from "./Footer";
import Test from "./Test";

const data0 = `Learn more about Collaborative Articles.`;
const data1 = `We're unlocking community knowledge in an all new way. It stars with an article on a professional topic or skill, written with the help of AI -- but it's not complete without insights and advice
from poeple with real-life experiences. We invited experts to contribute. Learn more`;
const data2 = `How to become a Front End Developer.`;
const data3 = `Learn React!!`;
const data4 = `How to create a professional Likedin Account.`;
const data5 = `Click here`;
const data6 = `How to join a fintech company.`;
const data7 = `Start small...`;
const data8 = `Here's how you can secure stakeholder suppor for your business initiatives.`;
const data9 = `Learn negotiation stratigies to secure stakeholder support for your business initiatives and drive projects success in the entrepreneurial world.`;

const Articles = () => {
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
  return (
    <div>
      <Test></Test>
      <div style={{ padding: "40px", color: "black", fontSize: 18 }}>
        <div>
          <TextField
            type="text"
            variant="outlined"
            label="search"
            value={inputValue}
            style={{ marginLeft: "40px" }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.currentTarget.value)
            }
          ></TextField>
        </div>
      </div>
      <div style={{ marginLeft: "80px", fontFamily: "Segoe UI" }}>
        <h1 style={{ fontFamily: "Segoe UI" }}>
          {" "}
          <p>
            <pre>
              <code style={{ fontFamily: "Segoe UI", fontSize: "32px" }}>
                {getHightlightedText0(text0, inputValue)}
              </code>
            </pre>
          </p>
        </h1>
        <p style={{ fontFamily: "Segoe UI" }}>
          <pre>
            <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
              {getHightlightedText1(text1, inputValue)}
            </code>
          </pre>
        </p>

        <div style={{ marginTop: "55px", cursor: "pointer" }}>
          <h3 style={{ fontFamily: "Segoe UI" }}>
            <p>
              <pre>
                <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                  {getHightlightedText2(text2, inputValue)}
                </code>
              </pre>
            </p>
          </h3>
          <p style={{ fontFamily: "Segoe UI" }}>
            <pre>
              <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                {getHightlightedText3(text3, inputValue)}
              </code>
            </pre>
          </p>
        </div>

        <div style={{ marginTop: "55px", cursor: "pointer" }}>
          <h3 style={{ fontFamily: "Segoe UI" }}>
            <p>
              <pre>
                <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                  {getHightlightedText4(text4, inputValue)}
                </code>
              </pre>
            </p>
          </h3>
          <p style={{ fontFamily: "Segoe UI" }}>
            <pre>
              <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                {getHightlightedText5(text5, inputValue)}
              </code>
            </pre>
          </p>
        </div>

        <div style={{ marginTop: "55px", cursor: "pointer" }}>
          <h3 style={{ fontFamily: "Segoe UI" }}>
            <p>
              <pre>
                <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                  {getHightlightedText6(text6, inputValue)}
                </code>
              </pre>
            </p>
          </h3>
          <p style={{ fontFamily: "Segoe UI" }}>
            <pre>
              <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                {getHightlightedText7(text7, inputValue)}
              </code>
            </pre>
          </p>
        </div>

        <div style={{ marginTop: "55px", cursor: "pointer" }}>
          <h3 style={{ fontFamily: "Segoe UI" }}>
            <p>
              <pre>
                <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                  {getHightlightedText8(text8, inputValue)}
                </code>
              </pre>
            </p>
          </h3>
          <p style={{ fontFamily: "Segoe UI" }}>
            <pre>
              <code style={{ fontFamily: "Segoe UI", fontSize: "18px" }}>
                {getHightlightedText9(text9, inputValue)}
              </code>
            </pre>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Articles;
