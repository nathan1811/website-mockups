import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material";
import Footer from "../Linkedin/Footer";
import iPhonevid from "../Assets/Iphone vid.mp4";

import "../App.scss";

const Apple = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "450vh" }}
      >
        <form
          style={{
            display: "flex",
            border: "5px",
            flexDirection: "column",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "white",
          }}
        >
          <h1
            style={{
              color: "#b24020",
              fontWeight: "200",
              fontSize: "48px",
              fontFamily: "calibri",
              marginLeft: "100px",
            }}
          >
            {" "}
            Fesitve season Sale
          </h1>
          <video id="iPhonevid" width="640" height="360" controls>
            <source src="iPhonevid" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button
            size="medium"
            variant="contained"
            onClick={() => navigate("/shop")}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5px",
              cursor: "pointer",
              borderRadius: "30px",
              alignItems: "center",
              marginLeft: "180px",
              height: "38px",
              fontWeight: "bold",
              width: "75px",
              background: "#0a66c2",
            }}
          >
            Shop
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Apple;
