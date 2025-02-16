import Google from "../Assets/GoogleWork.jpg";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import GoogleG from "../Assets/GoogleG.jpg";
import json from "../Assets/json.jpg";
import MicIcon from "@mui/icons-material/Mic";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import Footer from "./Footer";

import "../App.scss";
const Home = () => {
  const [site, setSite] = useState("");
  const [display, setDisplay] = useState("");
  const navigate = useNavigate();
  const handleSite = (e: ChangeEvent<HTMLInputElement>) => {
    setSite(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (site === "www.linkedin.com") {
      navigate("/loginl");
    } else if (site === "www.kotak.com") {
      navigate("/login");
    } else if (site === "www.json.com") {
      navigate("/homedata");
    } else if (site === "www.tesla.com") {
      navigate("/form");
    } else {
      setDisplay("Site does not exist");
    }
  };

  return (
    <div className="app">
      <div
        style={{ justifyContent: "end", display: "flex", marginRight: "50px" }}
      >
        <div
          style={{
            gap: "10px",
            marginRight: "20px",
            marginTop: "15px",
            display: "flex",
          }}
        >
          <p style={{ cursor: "pointer" }}>Gmail</p>
          <p style={{ cursor: "pointer" }}>Images</p>
        </div>{" "}
        <div style={{ marginRight: "20px", marginTop: "5px", height: "20px" }}>
          <AppsIcon style={{ height: "80px", cursor: "pointer" }}></AppsIcon>
        </div>
      </div>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "3px" }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ display: "block" }}>
            <img
              style={{ height: "190px", marginLeft: "240px" }}
              src={Google}
              alt="Google Logo"
            ></img>
            <TextField
              style={{
                height: "90px",
                width: "800px",
                borderRadius: "20px",
                marginBottom: "-20px",
                marginTop: "10px",
                display: "flex",
              }}
              type="text"
              required
              variant="outlined"
              value={site}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSite(e.currentTarget.value)
              }
            >
              <MicIcon />
              <CenterFocusWeakIcon />
            </TextField>
            <div style={{ display: "flex", marginLeft: "200px", gap: "30px" }}>
              <Button
                size="medium"
                variant="outlined"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  width: "200px",
                  height: "45px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "20px",
                  color: "balck",
                  backgroundColor: "lightgrey",
                }}
                data-testid="Search-btn"
              >
                Google Search
              </Button>
              <Button
                size="medium"
                variant="outlined"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  width: "200px",
                  height: "45px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  marginTop: "20px",
                  color: "balck",
                  backgroundColor: "lightgrey",
                }}
                data-testid="Lucky-btn"
              >
                Feeling Lucky
              </Button>
            </div>
            <div style={{ marginLeft: "100px", display: "flex" }}>
              <p> Google offered in: </p>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/हिन्दी"
              >
                हिन्दी{" "}
              </Link>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/বাংলা"
              >
                বাংলা
              </Link>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/తెలుగు"
              >
                తెలుగు
              </Link>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/मराठी"
              >
                मराठी
              </Link>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/தமிழ்"
              >
                தமிழ்
              </Link>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/ગુજરાતી"
              >
                ગુજરાતી
              </Link>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/ಕನ್ನಡ"
              >
                ಕನ್ನಡ
              </Link>
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/മലയാളം"
              >
                മലയാളം
              </Link>{" "}
              <Link
                style={{ marginTop: "17px", marginLeft: "10px" }}
                to="/ਪੰਜਾਬੀ"
              >
                ਪੰਜਾਬੀ
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
