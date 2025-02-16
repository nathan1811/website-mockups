import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import Test from "./Test1";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword === "Nathan123456" && confirmPassword === password) {
      setValidPassword("Password Successively Changed!");

      navigate("/login");
    } else if (password !== confirmPassword) {
      setValidPassword("Passwords do not match");
    } else if (confirmPassword.length < 12 && password.length < 12) {
      setValidPassword(
        "Password length must be greater than or equal to 12 digits"
      );
    } else if (confirmPassword.length >= 12 && password === confirmPassword) {
      navigate("/login");
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
          <h1>{t("Password Reset")}</h1>

          <div style={{ marginBottom: "10px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "95px" }}>
                {t("Password")}:
              </label>{" "}
            </div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              size="small"
              className="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={handlePasswordChange}
            ></TextField>
          </div>
          <div style={{ marginBottom: "10px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "35px", fontSize: "18px" }}>
                {t("Confirm Password")}
              </label>
            </div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              size="small"
              className="ConfirmPassword"
              type="password"
              variant="standard"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            ></TextField>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              size="medium"
              variant="contained"
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
              {t("Reset Password")}
            </Button>
          </div>

          <h1 style={{ color: "red", fontSize: "18px" }}>{validPassword}</h1>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
