import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Google from "../Assets/Google.jpg";
import GoogleG from "../Assets/GoogleG.jpg";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "nathan@gmail.com") {
      setValidEmail("Enter Password now");
    } else {
      setValidEmail("Incorrect Email id");
    }
  };

  return (
    <div style={{ backgroundColor: "lightgrey", height: "200vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            border: "5px",
            flexDirection: "column",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "lightgrey",
          }}
        >
          <div>
            <Card
              style={{
                backgroundColor: "white",
                height: "550px",
                width: "1200px",
                marginTop: "120px",
                borderRadius: "20px",
                display: "flex",
              }}
            >
              <div>
                <img
                  style={{
                    height: "65px",
                    marginTop: "45px",
                    marginLeft: "45px",
                    display: "block",
                  }}
                  src={GoogleG}
                  alt="Google Logo"
                ></img>
                <div style={{ marginLeft: "45px" }}>
                  <h1 style={{ fontWeight: "600", fontSize: "45px" }}>
                    Sign in
                  </h1>
                  <p style={{ fontSize: "20px" }}>Use your Google Account</p>
                </div>
              </div>
              <div
                style={{
                  marginLeft: "400px",
                  marginTop: "75px",
                  display: "block",
                }}
              >
                <TextField
                  style={{
                    height: "90px",
                    width: "450px",
                    borderRadius: "8px",
                    marginBottom: "-20px",
                    marginTop: "70px",
                  }}
                  type="email"
                  required
                  variant="outlined"
                  label="Email or phone"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.currentTarget.value)
                  }
                ></TextField>
                <Button
                  size="medium"
                  variant="text"
                  onClick={() => navigate("/fotgot")}
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                    borderRadius: "20px",
                    backgroundColor: "white",
                    width: "120px",
                    height: "30px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    marginLeft: "-5px",
                    color: "blue",
                    fontSize: "13px",
                  }}
                  data-testid="confirm-btn"
                >
                  Forgot email?
                </Button>

                <h1
                  style={{ color: "black", fontSize: "18px" }}
                  data-testid="pin-valid"
                >
                  {validEmail}
                </h1>
                <p>
                  Not your computer? Use a private browsing window to sign in.{" "}
                </p>
                <Link
                  to="/learn"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Learn more about using Guest mode
                </Link>
                <div
                  style={{
                    display: "flex",
                    marginTop: "30px",
                    marginLeft: "150px",
                  }}
                >
                  <Button
                    size="medium"
                    variant="text"
                    onClick={() => navigate("/create")}
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                      borderRadius: "20px",
                      backgroundColor: "white",
                      width: "200px",
                      height: "55px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                      marginTop: "20px",
                      color: "#0a66c2",
                    }}
                    data-testid="confirm-btn"
                  >
                    Create Account
                  </Button>
                  <Button
                    size="medium"
                    variant="contained"
                    onClick={() =>
                      email === "nathan@gmail.com" && navigate("/password")
                    }
                    type="submit"
                    style={{
                      justifyContent: "center",
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                      borderRadius: "20px",
                      backgroundColor: "#0a66c2",
                      width: "100px",
                      height: "45px",
                      fontWeight: "bold",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                    data-testid="confirm-btn"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
