import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import Test from "./Test1.tsx";
const SignUp = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [validateCancel, setValidateCancel] = useState("");

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    console.log(
      "password,confirmPassowrd",
      password,
      confirmPassword,
      confirmPassword === password
    );
    e.preventDefault();
    if (
      password === "Nathan123456" &&
      confirmPassword === "Nathan123456" &&
      confirmPassword === password
    ) {
      setValidPassword("Nathan has Logged in!");
    } else {
      setValidPassword("Passwords do not match");
    }
  };

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setValidPassword("");
    setValidateCancel("Fill User Details");
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
            border: "5px ",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "white",
          }}
        >
          <h1>{t("Sign Up")!}</h1>
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "100px", fontSize: "18px" }}>
                {t("First Name")}:
              </label>
            </div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              size="small"
              className="First"
              type="text"
              variant="standard"
              value={firstName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.currentTarget.value)
              }
            ></TextField>
          </div>
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "100px", fontSize: "18px" }}>
                {t("Last Name")}:
              </label>
            </div>

            <TextField
              required
              id="outlined-required"
              label="Required"
              size="small"
              className="Last"
              type="text"
              variant="standard"
              value={lastName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastName(e.currentTarget.value)
              }
            ></TextField>
          </div>
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "135px", fontSize: "18px" }}>
                {t("Email")}:
              </label>
            </div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              size="small"
              className="Email"
              type="email"
              variant="standard"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
            ></TextField>
          </div>
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ marginRight: "104px", fontSize: "18px" }}>
                {t("Password")}:
              </label>
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
              onChange={handlePassword}
            ></TextField>
          </div>
          <div style={{ marginBottom: "10px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ marginRight: "32px", fontSize: "18px" }}>
                {t("Confirm Password")}:
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
              onClick={() =>
                password === "Nathan123456" &&
                confirmPassword === "Nathan123456" &&
                password === confirmPassword &&
                firstName !== "" &&
                lastName !== "" &&
                navigate("/new")
              }
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
              {t("Sign Up")}
            </Button>
            <Button
              size="medium"
              variant="contained"
              onClick={handleCancel}
              type="reset"
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
              {t("Reset")}
            </Button>
            <Button
              size="medium"
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
            >
              {t("Login")}
            </Button>
          </div>
          <h1 style={{ color: "red", fontSize: "18px" }}>{validPassword}</h1>
          <h1 style={{ color: "red", fontSize: "18px" }}>{validateCancel}</h1>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
