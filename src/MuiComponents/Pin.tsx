import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import Test from "./Test1.tsx";

const Pin = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [Pin, setPin] = useState("");
  const [confirmPin, setconfirmPin] = useState("");
  const [validPin, setValidPin] = useState("");

  const handlePinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPin(e.currentTarget.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPin === "Nathan123456" && confirmPin === Pin) {
      setValidPin("Password Successively Changed!");

      navigate("/forgot");
    } else if (confirmPin.length < 2) {
      setValidPin("Please enter a vaild Pin id.");
    }
  };

  return (
    <div>
      <Test></Test>
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
            border: "5px",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "white",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <h1>{t("Pin Verification")}</h1>
            <label
              style={{
                marginRight: "90px",
                fontSize: "18px",
                marginTop: "10px",
              }}
            >
              {t("Enter 8 digit-pin")}
            </label>
            <TextField
              required
              id="outlined-required"
              label="Required"
              size="small"
              className="number"
              type="pin"
              variant="standard"
              value={Pin}
              onChange={handlePinChange}
            ></TextField>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => Pin === "11111111" && navigate("/forgot")}
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                alignItems: "center",
                backgroundColor: "#103566",
              }}
            >
              {t("Confirm Pin")}
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate("/email")}
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                alignItems: "center",
                backgroundColor: "#103566",
              }}
            >
              {t("Back")}
            </Button>
          </div>
          <h1 style={{ color: "red", fontSize: "18px" }}>{validPin}</h1>
        </form>
      </div>
    </div>
  );
};

export default Pin;
