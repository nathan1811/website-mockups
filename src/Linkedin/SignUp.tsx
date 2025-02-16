import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Footer from "./Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === "Nathan123456" && email === "nathan@gmail.com") {
      setValidPassword("Logged In");
    } else {
      setValidPassword("Change Email & Password");
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
            padding: "40px",
            boxSizing: "border-box",
            backgroundColor: "white",
          }}
        >
          <h1>Make the most of your professional life</h1>
          <div style={{ border: "2px solid black", padding: "20px" }}>
            <div style={{ marginBottom: "20px", display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}></div>
              {""}
              <label
                style={{
                  marginRight: "330px",
                  fontSize: "18px",
                  padding: "5px",
                }}
              >
                Email
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
              data-testid="email-id"
            ></input>

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
              data-testid="password-id"
            ></input>

            <div
              style={{
                fontSize: "14px",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <div style={{ display: "block" }}>
                <div>
                  By clicking Continue to join or sign in, you agree to
                  Linkedin's{" "}
                </div>
                <div>
                  <Link
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#0a66c2",
                    }}
                    to="/agreement"
                  >
                    User Agreement,{" "}
                  </Link>
                  <Link
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#0a66c2",
                    }}
                    to="/privacy"
                  >
                    Privacy Policy,{" "}
                  </Link>
                  <Link
                    style={{
                      textAlign: "center",
                      fontSize: "14px",
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "#0a66c2",
                    }}
                    to="/Cookie"
                  >
                    Cookie Policy
                  </Link>
                  .
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                size="medium"
                variant="contained"
                onClick={() =>
                  password === "Nathan123456" &&
                  email === "nathan@gmail.com" &&
                  navigate("/Name")
                }
                type="submit"
                style={{
                  height: "55px",
                  width: "400px",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "5px",
                  cursor: "pointer",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "#0a66c2",
                }}
                data-testid="agree-btn"
              >
                Agree & Join
              </Button>
              <p
                style={{
                  fontSize: "18px",
                  textAlign: "center",
                  marginLeft: "0px",
                }}
              >
                Already on LinkedIn?{" "}
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#0a66c2",
                  }}
                  data-testid="signin-btn"
                  to="/loginl"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          <h1 style={{ fontSize: "18px" }} data-testid="password-valid">
            {validPassword}
          </h1>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default SignUp;
