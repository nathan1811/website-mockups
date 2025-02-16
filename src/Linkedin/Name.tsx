import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";
const Name = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.currentTarget.value);
  };
  const handleLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      setName("Logged in!");
    } else {
      setName("Enter valid details");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "auto",
          padding: "40px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            border: "5px",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              border: "2px solid black",
              padding: "20px",
              justifyContent: "center",
            }}
          >
            <h1 style={{ marginRight: "0px" }}>
              Make the most of your professional life
            </h1>
            <div
              style={{
                marginBottom: "10px",
                display: "flex",
                marginLeft: "50px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}></div>
              {""}
              <label
                style={{
                  marginRight: "330px",
                  fontSize: "18px",
                  padding: "5px",
                }}
              >
                First Name
              </label>
            </div>
            <input
              style={{
                height: "55px",
                width: "400px",
                borderRadius: "8px",
                marginBottom: "10px",
                marginLeft: "50px",
              }}
              type="name"
              required
              onChange={handleFirstName}
            ></input>

            <div style={{ marginBottom: "10px", display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}></div>
              {""}
              <label
                style={{
                  marginRight: "330px",
                  fontSize: "18px",
                  padding: "5px",
                  marginLeft: "50px",
                }}
              >
                Last Name
              </label>
            </div>
            <input
              style={{
                height: "55px",
                width: "400px",
                borderRadius: "8px",
                marginBottom: "10px",
                marginLeft: "50px",
              }}
              type="name"
              required
              onChange={handleLastName}
            ></input>

            <div style={{ display: "flex" }}>
              <Button
                size="medium"
                variant="contained"
                onClick={() => navigate("/website")}
                type="submit"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "5px",
                  cursor: "pointer",
                  borderRadius: "20px",
                  alignItems: "center",
                  background: "#0a66c2",
                  width: "400px",
                  height: "55px",
                  marginLeft: "50px",
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Name;
