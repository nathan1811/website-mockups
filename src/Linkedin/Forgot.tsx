import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material";

import Footer from "./Footer";

const Forgot = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      confirmPassword === "Nathan123456" &&
      password === "Nathan123456" &&
      confirmPassword === password
    ) {
      setValidPassword("Password Changed Successfully");
      navigate("/loginl");
    } else if (password !== confirmPassword) {
      setValidPassword("Passwords do not match");
    } else if (password.length < 12 && confirmPassword.length < 12) {
      setValidPassword("Password length must be atleast 12 digits");
    } else if (password === confirmPassword && confirmPassword.length >= 12) {
      navigate("/loginl");
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
          <div style={{ border: "2px solid black", padding: "20px" }}>
            <h1 style={{ marginRight: "150px" }}>Forgot password</h1>
            <div style={{ marginBottom: "10px", display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}></div>
              {""}
              <label
                style={{
                  marginRight: "330px",
                  fontSize: "18px",
                  padding: "5px",
                }}
              >
                Password
              </label>
            </div>
            <input
              style={{
                height: "55px",
                width: "400px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
              required
              value={password}
              type="password"
              onChange={handlePassword}
            ></input>

            <div style={{ marginBottom: "10px", display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}></div>
              {""}
              <label
                style={{
                  marginRight: "265px",
                  fontSize: "18px",
                  padding: "5px",
                }}
              >
                Confirm Password
              </label>
            </div>
            <input
              required
              style={{
                height: "55px",
                width: "400px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
              value={confirmPassword}
              type="password"
              onChange={handleConfirmPassword}
            ></input>

            <div style={{ display: "flex" }}>
              <Button
                size="medium"
                variant="contained"
                type="submit"
                style={{
                  justifyContent: "center",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  borderRadius: "20px",
                  backgroundColor: "#0a66c2",
                  width: "400px",
                  height: "55px",
                  fontWeight: "bold",
                }}
              >
                Confirm
              </Button>
            </div>
            <h1 style={{ color: "red", fontSize: "18px" }}>{validPassword}</h1>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Forgot;
