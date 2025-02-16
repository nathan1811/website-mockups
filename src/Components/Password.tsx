import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Password = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [validateCancel, setValidateCancel] = useState("");

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "Nathan123456") {
      setValidPassword("Nathan has Logged in!");
      setValidateCancel("");
    } else {
      setValidPassword("Incorrect Password Entered");
      setValidateCancel("");
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
        <div style={{ marginBottom: "20px" }}>
          <h1>Login</h1>
          <label style={{ marginRight: "30px" }}>First Name:</label>
          <input
            className="First"
            type="text"
            value={firstName}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setFirstName(e.currentTarget.value)
            }
          ></input>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "30px" }}>Last Name:</label>
          <input
            className="Last"
            type="text"
            value={lastName}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setLastName(e.currentTarget.value)
            }
          ></input>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "65px" }}>Email:</label>
          <input
            className="Email"
            type="email"
            value={email}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
            }
          ></input>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "35px" }}>Password:</label>
          <input
            className="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>
        </div>

        <button
          onClick={() => password === "Nathan123456" && navigate("/new")}
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
          Save
        </button>
        <button
          onClick={handleCancel}
          type="reset"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5px",
            cursor: "pointer",
            borderRadius: "5px",
            alignItems: "center",
          }}
        >
          Reset
        </button>
        <button
          onClick={() => navigate("/email")}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5px",
            cursor: "pointer",
            borderRadius: "5px",
            alignItems: "center",
          }}
        >
          Forgot Password
        </button>
        <h1 style={{ color: "red", fontSize: "18px" }}>{validPassword}</h1>
        <h1 style={{ color: "red", fontSize: "18px" }}>{validateCancel}</h1>
      </form>
    </div>
  );
};

export default Password;
