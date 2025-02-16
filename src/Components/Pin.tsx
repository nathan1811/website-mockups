import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Pin = () => {
  const navigate = useNavigate();
  const [Pin, setPin] = useState("");
  const [confirmPin, setconfirmPin] = useState("");
  const [validPin, setValidPin] = useState("");

  const handlePinChange = (e: FormEvent<HTMLInputElement>) => {
    setPin(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPin === "Nathan123456" && confirmPin === Pin) {
      setValidPin("Password Successively Changed!");

      navigate("/forgot");
    } else if (confirmPin.length < 2) {
      setValidPin("Please enter a vaild Pin id.");
    }
  };

  return (
    <div
      className="try"
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
          border: "5px solid",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <h1>Pin Verifivation</h1>
          <label style={{ marginRight: "95px" }}>Enter 8 digit-pin</label>
          <input
            className="number"
            type="pin"
            value={Pin}
            onChange={handlePinChange}
          ></input>
        </div>

        <button
          onClick={() => Pin === "11111111" && navigate("/forgot")}
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5px",
            cursor: "pointer",
            borderRadius: "5px",
            alignItems: "center",
          }}
        >
          Confirm Pin
        </button>
        <button
          onClick={() => navigate("/email")}
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5px",
            cursor: "pointer",
            borderRadius: "5px",
            alignItems: "center",
          }}
        >
          Back
        </button>

        <h1 style={{ color: "red", fontSize: "18px" }}>{validPin}</h1>
      </form>
    </div>
  );
};

export default Pin;
