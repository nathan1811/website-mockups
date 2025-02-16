import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.scss";
import { Password } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Test from "./Test";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Form: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const interractionTime = useRef<ReturnType<typeof setTimeout> | null>(null);
  const popupTime = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useTranslation();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();

  const resetInteractionTime = () => {
    if (interractionTime.current) clearTimeout(interractionTime.current);
    if (popupTime.current) clearTimeout(popupTime.current);
    interractionTime.current = setTimeout(() => {
      setOpen(true);
      popupTime.current = setTimeout(() => {
        handleLog();
      }, 30000);
    }, 30000);
  };

  const handleUserInteraction = () => {
    resetInteractionTime();
    if (open) {
      setOpen(false);
      if (popupTime.current) clearTimeout(popupTime.current);
    }
  };

  useEffect(() => {
    resetInteractionTime();

    return () => {
      if (interractionTime.current) clearTimeout(interractionTime.current);
      if (popupTime.current) clearTimeout(popupTime.current);
    };
  });

  const handleLog = () => {
    setOpen(false);
    navigate("/home");
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, t("Max length of name 20 characters"))
        .min(2, t("Name must be greater than 2 digits"))
        .required(t("Name is required")),
      email: Yup.string()
        .email(t("Invalid email id"))
        .required(t("Email id is required")),
      phone: Yup.string()

        .matches(/^\+91\d{10}$/, t("Phone number has to start with a +91"))

        .required(t("Phone number is required")),
      password: Yup.string()
        .min(8, t("Password must be atleast 8 characters"))
        .matches(/[A-Z]/, t("Password must have atleast one uppecase letter"))
        .matches(/[a-z]/, t("Password must have atleast one lowercase letter"))
        .matches(/[0-9]/, t("Password must have atleast one number"))
        .matches(
          /[!@#$%&*?]/,
          t("Password must have atleast one special character")
        )
        .required(t("Password is required")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], t("Passwords do not match"))
        .required(t("Confirm Password is required")),
    }),
    onSubmit: (values) => {
      setOpen(false);
      if (interractionTime.current) clearTimeout(interractionTime.current);
      if (popupTime.current) clearTimeout(popupTime.current);
      if (values.password === values.confirmPassword) {
        navigate("/newpage");
      } else {
        alert("Passwords do not match");
      }
      console.log(values);
    },
  });

  return (
    <div>
      <Test></Test>
      <div onKeyDown={handleUserInteraction}>
        <React.Fragment>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Session Timeout"}{" "}
              <Button
                onClick={handleClose}
                style={{ marginLeft: "330px", marginBottom: "40px" }}
              >
                <CloseIcon />
              </Button>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Session Timeout: Click Continue Login to stay in this page.
                Automatic logout in 1 minute
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" autoFocus onClick={handleLog}>
                Logout and Go Home
              </Button>
              <Button variant="contained" onClick={handleClose} autoFocus>
                Continue Login
              </Button>
            </DialogActions>
          </Dialog>
          <div>
            <div className="formHeader">
              <div className="formDiv">
                <form onSubmit={formik.handleSubmit}>
                  <div className="block">
                    <div className="name">
                      <label className="label" htmlFor="name">
                        {t("Name")}:
                      </label>
                    </div>
                    <input
                      className="input"
                      id="name"
                      name="name"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="block">
                    <div className="email">
                      <label className="label" htmlFor="email">
                        {t("Email")}:
                      </label>
                    </div>
                    <input
                      className="input"
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>

                  <div className="block">
                    <div className="phone">
                      <label className="label" htmlFor="phone">
                        {t("Phone Number")}:
                      </label>
                    </div>
                    <input
                      className="input"
                      id="phone"
                      name="phone"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div>{formik.errors.phone}</div>
                    ) : null}
                  </div>

                  <div className="block">
                    <div className="password">
                      <label className="label" htmlFor="password">
                        {t("Password")}:
                      </label>
                    </div>
                    <input
                      className="input"
                      id="password"
                      name="password"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </div>

                  <div className="block">
                    <div className="confirmPassword">
                      <label className="label" htmlFor="confirmPassword">
                        {t("Confirm Password")}:
                      </label>
                    </div>
                    <input
                      className="input"
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword ? (
                      <div>{formik.errors.confirmPassword}</div>
                    ) : null}
                  </div>

                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "blue",
                      marginTop: "30px",
                      marginLeft: "45px",
                      marginBottom: "10px",
                    }}
                    className="submit-button"
                    type="submit"
                  >
                    {t("Submit")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Form;
