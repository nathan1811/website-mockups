import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import Test from "./Test1.tsx";

const Email = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [confirmEmail, setconfirmEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmEmail === "Nathan123456" && confirmEmail === email) {
      setValidEmail("Password Successively Changed!");

      navigate("/forgot");
    } else if (confirmEmail.length < 2) {
      setValidEmail("Please enter a vaild email id.");
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
          <h1>{t("Enter Email id")}</h1>
          <div style={{ marginBottom: "10px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "95px", fontSize: "18px" }}>
                {t("Email id")}:
              </label>
            </div>

            <TextField
              required
              id="outlined-required"
              label="Required"
              size="small"
              className="email"
              type="email"
              variant="standard"
              value={email}
              onChange={handleEmailChange}
              data-testid="email-id"
            ></TextField>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => email === "nathan@gmail.com" && navigate("/pin")}
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
              data-testid="confirm-btn"
            >
              {t("Confirm Email")}
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => navigate("/login")}
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
              data-testid="back-btn"
            >
              {t("Back")}
            </Button>
          </div>
          <h1
            style={{ color: "red", fontSize: "18px" }}
            data-testid="email-valid"
          >
            {validEmail}
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Email;
