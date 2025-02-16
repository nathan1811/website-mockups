import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import json from "../Assets/json.jpg";
import Home from "../Tesla/Home";
import FetchingData1 from "./FetchingData";
import FetchingData2 from "./FetchingData2";

import "../App.scss";

const Test = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/home">
          <img
            style={{ marginTop: "20px", marginLeft: "20px", cursor: "pointer" }}
            src={json}
            alt="json"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Test;
