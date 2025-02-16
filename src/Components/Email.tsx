import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Email = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [confirmEmail, setconfirmEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirmEmail === "Nathan123456" && confirmEmail === email) {
      setValidEmail("Password Successively Changed!");

      navigate("/forgot");
    } else if (confirmEmail.length < 2) {
      setValidEmail("Please enter a vaild email id.");
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
          <h1>Enter Email id</h1>
          <label style={{ marginRight: "95px" }}>Email id:</label>
          <input
            className="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </div>

        <button
          onClick={() => email === "nathan@gmail.com" && navigate("/pin")}
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
          Confirm Email
        </button>
        <button
          onClick={() => navigate("/password")}
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

        <h1 style={{ color: "red", fontSize: "18px" }}>{validEmail}</h1>
      </form>
    </div>
  );
};

export default Email;
