import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import games1 from "../Assets/games1.jpg";
import games2 from "../Assets/games2.jpg";
import games3 from "../Assets/games3.jpg";
import Test from "./Test";

const Games = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Test></Test>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          height: "auto",
          padding: "0px",
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            border: "5px",
            padding: "20px",
            alignItems: "center",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <div style={{ border: "2px solid black", padding: "20px" }}>
            <h1 style={{ marginRight: "0px" }}>
              Connect over fun, daily games
            </h1>
            <p>Prep your mind for the workday and compare results.</p>
            <div style={{ marginBottom: "10px", display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center" }}></div>
              {""}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <div style={{ padding: "10px" }}>
                <div
                  onClick={() => navigate("/login")}
                  style={{
                    border: "2px solid black",
                    padding: "20px",
                    marginBottom: "20px",
                    height: "95px",
                    width: "400px",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    Guess the category.
                    <img
                      style={{
                        height: "75px",
                        alignContent: "end",
                        marginLeft: "180px",
                      }}
                      src={games1}
                      alt="game1"
                    ></img>
                  </p>
                </div>
                <div
                  onClick={() => navigate("/login")}
                  style={{
                    border: "2px solid black",
                    padding: "20px",
                    marginBottom: "20px",
                    height: "95px",
                    width: "400px",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    Crown each region.{" "}
                    <img
                      style={{
                        height: "75px",
                        alignContent: "end",
                        marginLeft: "180px",
                      }}
                      src={games2}
                      alt="game2"
                    ></img>
                  </p>
                </div>
                <div
                  onClick={() => navigate("/login")}
                  style={{
                    border: "2px solid black",
                    padding: "20px",
                    marginBottom: "20px",
                    height: "95px",
                    width: "400px",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    Unlock a travia ladder.{" "}
                    <img
                      style={{
                        height: "75px",
                        alignContent: "end",
                        marginLeft: "160px",
                      }}
                      src={games3}
                      alt="game3"
                    ></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Games;
