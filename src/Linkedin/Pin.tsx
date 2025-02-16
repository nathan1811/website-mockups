import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Footer from "./Footer";

const Pin = () => {
  const [pin, setPin] = useState("");
  const [validPin, setValidPin] = useState("");
  const navigate = useNavigate();

  const handlePin = (e: ChangeEvent<HTMLInputElement>) => {
    setPin(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pin === "11111111") {
      setValidPin("Pin Successifully entered");
      navigate("/forgot");
    } else {
      setValidPin("Incorrect verification pin entered");
    }
  };
  return (
    <div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
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
            padding: "20px",
            alignItems: "center",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <div style={{ border: "2px solid black", padding: "20px" }}>
            <h1 style={{ marginRight: "150px" }}>Pin verification</h1>
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
                Enter pin
              </label>
            </div>
            <input
              style={{
                height: "55px",
                width: "400px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
              value={pin}
              type="pin"
              required
              onChange={handlePin}
              data-testid="pin-id"
            ></input>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                size="medium"
                variant="contained"
                onClick={() => pin === "11111111" && navigate("/forgotl")}
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
                data-testid="confirm-btn"
              >
                Confirm Pin
              </Button>

              <Button
                size="medium"
                variant="contained"
                onClick={() => navigate("/emaill")}
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
                }}
                data-testid="back-btn"
              >
                Back
              </Button>
            </div>
            <h1
              style={{ color: "red", fontSize: "18px" }}
              data-testid="pin-valid"
            >
              {validPin}
            </h1>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Pin;
