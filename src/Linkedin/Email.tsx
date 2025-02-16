import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Footer from "./Footer";

const Email = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "nathan@gmail.com") {
      navigate("/pin");
    } else if (email.length < 2) {
      setValidEmail("Please enter a valid email id.");
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
            <h1 style={{ marginRight: "150px" }}>Forgot Password</h1>
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
                Enter email
              </label>
            </div>
            <input
              style={{
                height: "55px",
                width: "400px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
              value={email}
              type="email"
              required
              onChange={handleEmail}
            ></input>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  borderRadius: "20px",
                }}
              >
                <div style={{ display: "block" }}>
                  <div> .</div>
                </div>
              </div>

              <div
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  borderRadius: "20px",
                }}
              >
                <div style={{ display: "block" }}>
                  <div>
                    We'll send a verification code to this email or phone number
                    if{" "}
                  </div>
                  <div>it matches an existing Linedin account.</div>
                </div>
              </div>

              <Button
                size="medium"
                variant="contained"
                onClick={() =>
                  email === "nathan@gmail.com" && navigate("/pinl")
                }
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
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                Confirm email
              </Button>

              <Button
                size="medium"
                variant="contained"
                onClick={() => navigate("/email")}
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
                Back
              </Button>
            </div>
            <h1 style={{ color: "red", fontSize: "18px" }}>{validEmail}</h1>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Email;
