import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import Man from "../Assets/linkedin-man1.jpg";
import Google from "../Assets/Google.jpg";
import train from "../Assets/train3.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Test from "./Test";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === "Nathan123456" && email === "nathan@gmail.com") {
      setValidPassword("Logged In");
    } else {
      setValidPassword("Incorrect Password");
    }
  };

  return (
    <div>
      <Test></Test>
      <div
        style={{ display: "flex", justifyContent: "center", height: "450vh" }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            border: "5px",
            flexDirection: "column",
            padding: "20px",
            boxSizing: "border-box",
            backgroundColor: "white",
          }}
        >
          <h1
            style={{
              color: "#b24020",
              fontWeight: "200",
              fontSize: "48px",
              fontFamily: "calibri",
              marginLeft: "100px",
            }}
          >
            Welcome to your professional community
          </h1>
          <Link to="/login">
            <img
              style={{ height: "55px", width: "450px", marginLeft: "100px" }}
              src={Google}
              alt="Continue with Google"
            ></img>
          </Link>
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              marginLeft: "100px",
            }}
          >
            By clicking Continue to join or sign in, you agree to Linkedin's{" "}
            <Link
              style={{
                textAlign: "center",
                fontSize: "14px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#0a66c2",
              }}
              to="/agreement"
            >
              User Agreement,{" "}
            </Link>
            <Link
              style={{
                textAlign: "center",
                fontSize: "14px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#0a66c2",
              }}
              to="/privacy"
            >
              Privacy Policy,{" "}
            </Link>
            <Link
              style={{
                textAlign: "center",
                fontSize: "14px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#0a66c2",
              }}
              to="/Cookie"
            >
              Cookie Policy
            </Link>
            .
          </p>
          <p style={{ marginLeft: "100px" }}>
            -------------------------------------- or
            --------------------------------------{" "}
          </p>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {""}
              <label
                style={{
                  fontSize: "18px",
                  marginLeft: "100px",
                  marginBottom: "10px",
                }}
              >
                Email
              </label>
            </div>

            <input
              style={{
                height: "65px",
                width: "450px",
                marginLeft: "100px",
                borderRadius: "8px",
                padding: "1px 2px",
                fontSize: "18px",
              }}
              value={email}
              type="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
              data-testid="email-id"
            ></input>
          </div>
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {""}
              <label
                style={{
                  fontSize: "18px",
                  marginLeft: "100px",
                  marginBottom: "10px",
                }}
              >
                Password
              </label>
            </div>

            <input
              style={{
                height: "65px",
                width: "450px",
                marginLeft: "100px",
                borderRadius: "8px",
                padding: "1px 2px",
                fontSize: "18px",
              }}
              value={password}
              type="password"
              onChange={handlePassword}
              data-testid="password-id"
            ></input>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              style={{
                textAlign: "left",
                fontSize: "18px",
                textDecoration: "none",
                fontWeight: "bold",
                color: "#0a66c2",
                cursor: "pointer",
                marginLeft: "100px",
                marginBottom: "10px",
              }}
              to="/emaill"
            >
              Forgot Password?
            </Link>

            <Button
              size="medium"
              variant="contained"
              onClick={() =>
                password === "Nathan123456" &&
                email === "nathan@gmail.com" &&
                navigate("/jobs")
              }
              type="submit"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5px",
                cursor: "pointer",
                borderRadius: "30px",
                alignItems: "center",
                marginLeft: "100px",
                height: "58px",
                fontWeight: "bold",
                width: "450px",
                background: "#0a66c2",
              }}
              data-testid="signin-btn"
            >
              Sign in
            </Button>

            <p
              style={{
                fontSize: "18px",
                textAlign: "center",
                marginLeft: "0px",
              }}
            >
              New to LinkedIn?{" "}
              <Link
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "#0a66c2",
                }}
                to="/signup"
              >
                Join now
              </Link>
            </p>

            <div
              style={{
                display: "block",
                marginRight: "-2000px",
                marginTop: "100px",
                backgroundColor: "#D4D4D4",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "block", marginLeft: "100px" }}>
                    {" "}
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      Explore{" "}
                    </h1>
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      collaborative articles
                    </h1>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      alignItems: "center",
                      display: "block",
                      justifyContent: "center",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "0px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Marketing
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "250px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Public Administration
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Healthcare
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Engineering
                      </Button>
                    </div>
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        IT Services
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "230px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Sustainability
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "280px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Business Administration
                      </Button>
                    </div>
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "250px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Telecommunications
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "220px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        HR Management
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "blue",
                          borderColor: "blue",
                          background: "white",
                        }}
                      >
                        Show all
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "block" }}>
                <p
                  style={{
                    fontFamily: "calibri",
                    fontSize: "22px",
                    marginLeft: "100px",
                  }}
                >
                  We're unlocking community knowledge in a new way. Experts add
                  insights directly into each article, started with the help of
                  AI.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "block",
                marginRight: "-2000px",
                marginTop: "100px",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "block", marginLeft: "100px" }}>
                    {" "}
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      Find the right job or{" "}
                    </h1>
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      internship for you
                    </h1>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      alignItems: "center",
                      display: "block",
                      justifyContent: "center",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "0px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Engineering
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "250px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Business Development
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Finance
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "280px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Adminitrative Assistant
                      </Button>
                    </div>
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "260px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Retail Associate
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "260px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Customer Service
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "280px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Operations
                      </Button>
                    </div>
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "250px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Information Techonology
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Marketing
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "220px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Human Resource
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "blue",
                          borderColor: "blue",
                          background: "white",
                        }}
                      >
                        Show all
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "block",
                marginRight: "-2000px",
                marginTop: "100px",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#EBE1CF",
                  }}
                >
                  <div style={{ display: "block", marginLeft: "100px" }}>
                    {" "}
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        color: "#b24020",
                        fontWeight: "400",
                      }}
                    >
                      Post your job for
                    </h1>
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        color: "#b24020",
                        fontWeight: "400",
                      }}
                    >
                      millions of people to see
                    </h1>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      alignItems: "center",
                      display: "block",
                      justifyContent: "center",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        onClick={() => navigate("/jobs")}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "150px",
                          color: "blue",
                          borderColor: "blue",
                          backgroundColor: "#EBE1CF",
                        }}
                      >
                        Post a job
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "block",
                marginRight: "-2000px",
                marginTop: "100px",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "block", marginLeft: "100px" }}>
                    {" "}
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      Discover the best
                    </h1>
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      software tools
                    </h1>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      alignItems: "center",
                      display: "block",
                      justifyContent: "center",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "0px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "250px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        E-Commerce Platform
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "250px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        CRM Software
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "390px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Human Resources Management System
                      </Button>
                    </div>
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "230px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Recruting Software
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "310px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Sales Intelligence Software
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "380px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Project Management Software
                      </Button>
                    </div>
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "250px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Help Desk Software
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "290px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Social Networking Software
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "280px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Destop Publishing Sofware
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "blue",
                          borderColor: "blue",
                          background: "white",
                        }}
                      >
                        Show all
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "block" }}>
                <p
                  style={{
                    fontFamily: "calibri",
                    fontSize: "22px",
                    marginLeft: "100px",
                  }}
                >
                  Connect with buyers who have first-hand experience to dind the
                  best products for you.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "block",
                marginRight: "-2000px",
                marginTop: "100px",
                backgroundColor: "#D4D4D4",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ display: "block", marginLeft: "100px" }}>
                    {" "}
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      Keep your mind{" "}
                    </h1>
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      sharp with games
                    </h1>
                  </div>
                  <div
                    style={{
                      marginTop: "10px",
                      alignItems: "center",
                      display: "block",
                      justifyContent: "center",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "100px" }}>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "0px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Pinpoint
                      </Button>
                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Queens
                      </Button>

                      <Button
                        size="medium"
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "5px",
                          cursor: "pointer",
                          borderRadius: "30px",
                          alignItems: "center",
                          marginLeft: "10px",
                          height: "58px",
                          fontWeight: "bold",
                          width: "180px",
                          color: "black",
                          borderColor: "black",
                          background: "white",
                        }}
                      >
                        Crosslimb
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "block" }}>
                <p
                  style={{
                    fontFamily: "calibri",
                    fontSize: "22px",
                    marginLeft: "100px",
                  }}
                >
                  Take a break and reconnect with your newtwork through quick
                  daily games.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "block",
                marginRight: "-2000px",
                marginTop: "100px",
                backgroundColor: "#EBE1CF",
                height: "750px",
                width: "850px",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  alignItems: "center",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      display: "block",
                      marginLeft: "100px",
                      marginRight: "200px",
                      marginTop: "150px",
                    }}
                  >
                    {" "}
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                        color: "#b24020",
                        width: "600px",
                      }}
                    >
                      Who is Linkedin for?
                    </h1>
                    <h1
                      style={{
                        fontFamily: "calibri",
                        fontSize: "48px",
                        fontWeight: "200",
                      }}
                    >
                      Anyone looking to navigate their professional life.
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        marginBottom: "200px",
                        gap: "10px",
                        flexDirection: "column",
                      }}
                    >
                      <div>
                        <Button
                          style={{
                            color: "black",
                            width: "300px",
                            backgroundColor: "#D6CCC0",
                            height: "50px",
                          }}
                        >
                          Find a coworker or classmate <ArrowForwardIosIcon />
                        </Button>
                      </div>
                      <div>
                        {" "}
                        <Button
                          style={{
                            color: "black",
                            width: "300px",
                            backgroundColor: "#D6CCC0",
                            height: "50px",
                          }}
                        >
                          Find a new job <ArrowForwardIosIcon />
                        </Button>
                      </div>
                      <div>
                        {" "}
                        <Button
                          style={{
                            color: "black",
                            width: "300px",
                            backgroundColor: "#D6CCC0",
                            height: "50px",
                          }}
                        >
                          Find a course or training <ArrowForwardIosIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginLeft: "200px" }}>
                    <img
                      style={{
                        width: "640px",
                        height: "auto",
                        borderRadius: "50%",
                      }}
                      src={train}
                    ></img>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      alignItems: "center",
                      display: "block",
                      justifyContent: "center",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", marginLeft: "100px" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 data-testid="password-valid">{validPassword}</h1>
        </form>
        <img
          style={{
            justifyContent: "end",
            alignContent: "end",
            marginLeft: "220px",
            marginTop: "80px",
            height: "600px",
            width: "auto",
          }}
          src={Man}
        ></img>

        {/* // , backgroundColor:"#EBE1CF",height:"700px", width:"850px" */}
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Login;
