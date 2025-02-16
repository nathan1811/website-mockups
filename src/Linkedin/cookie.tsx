import React from "react";
import Cookie from "../Assets/cookie.jpg";
import Footer from "./Footer";

import "./cookie.css";
const cookie = () => {
  return (
    <div>
      <h1 style={{ padding: "20px" }}>Cookie Policy</h1>
      <img
        style={{ height: "200px", padding: "20px" }}
        className="spin"
        src={Cookie}
        alt="cookie"
      ></img>{" "}
      <Footer></Footer>
    </div>
  );
};

export default cookie;
