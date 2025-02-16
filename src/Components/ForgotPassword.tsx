import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import "./form.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmPassword === "Nathan123456" && confirmPassword === password) {
      setValidPassword("Password Successively Changed!");

      navigate("/password");
    } else if (password !== confirmPassword) {
      setValidPassword("Passwords do not match");
    } else if (confirmPassword.length < 12 && password.length < 12) {
      setValidPassword(
        "Password length must be greater than or equal to 12 digits"
      );
    } else if (confirmPassword.length >= 12 && password === confirmPassword) {
      navigate("/password");
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
          <h1>Password Reset</h1>
          <label style={{ marginRight: "95px" }}>Password:</label>
          <input
            className="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ marginRight: "35px" }}>Confirm Password:</label>
          <input
            className="ConfirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          ></input>
        </div>
        <button
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
          Reset Password
        </button>

        <h1 style={{ color: "red", fontSize: "18px" }}>{validPassword}</h1>
      </form>
    </div>
  );
};

export default ForgotPassword;
