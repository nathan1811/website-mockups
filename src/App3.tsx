import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import json from "./Assets/json.jpg";
import Home from "./Tesla/Home";
import FetchingData1 from "./Data/FetchingData";
import FetchingData2 from "./Data/FetchingData2";

export const App3 = () => {
  return (
    <div>
      <Router>
        <div style={{ height: "100px", backgroundColor: "skyblue" }}>
          <Link to="/home">
            <img
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                cursor: "pointer",
              }}
              src={json}
              alt="json"
            ></img>
          </Link>
        </div>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/fetching1" element={<FetchingData1 />}></Route>
          <Route path="/fetching2" element={<FetchingData2 />}></Route>s
        </Routes>
      </Router>
    </div>
  );
};
export default App3;
