import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Test from "./Test1.tsx";

const Password = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [validateCancel, setValidateCancel] = useState("");

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
    setValidPassword("");
    setValidateCancel("Fill User Details");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "Nathan123456" && email === "nathan@gmail.com") {
      setValidPassword("Nathan has Logged in!");
    } else {
      setValidPassword("Incorrect Password Entered");
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
          <h1>{t("login")}</h1>
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "65px", fontSize: "18px" }}>
                {t("email")}:
              </label>
            </div>

            <input
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
              data-testid="email-id"
            ></input>
          </div>
          <div style={{ marginBottom: "20px", display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <label style={{ marginRight: "35px", fontSize: "18px" }}>
                {t("password")}
              </label>
            </div>

            <input
              value={password}
              onChange={handlePassword}
              data-testid="password-id"
            ></input>
          </div>
          <div style={{ display: "flex" }}>
            <Button
              size="medium"
              variant="contained"
              onClick={() =>
                password === "Nathan123456" &&
                email === "nathan@gmail.com" &&
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
              data-testid="login-btn"
            >
              {t("login")}
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
              data-testid="reset-btn"
            >
              {t("reset")}
            </Button>
            <Button
              size="medium"
              variant="contained"
              onClick={() => navigate("/email")}
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
              {t("forgot_password")}
            </Button>
            <Button
              size="medium"
              variant="contained"
              onClick={() => navigate("/sign")}
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
              {t("sign_up")}
            </Button>
          </div>
          <h1
            style={{ color: "red", fontSize: "18px" }}
            data-testid="password-valid"
          >
            {validPassword}
          </h1>
          <h1 style={{ color: "red", fontSize: "18px" }}>{validateCancel}</h1>
        </form>
      </div>
    </div>
  );
};

export default Password;
