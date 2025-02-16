import React, { useEffect, useState } from "react";
import json from "../Assets/json.jpg";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Test from "./Test";

const FetchingData2 = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => response.json())
      .then((data) => setValue(data))
      .catch((error) => console.error("Error:", error));
  });
  console.log(value);

  return (
    <div>
      <Test></Test>
      <h1 style={{ display: "flex", marginLeft: "20px", marginBottom: "10px" }}>
        Check Console
      </h1>
      <div>
        {value
          ?.filter((item: any) => item?.id < 6)
          .map((item: any, index) => (
            <div className="card-border">
              <Card
                style={{
                  backgroundColor: index % 2 === 0 ? "lightblue" : "lightgreen",
                  padding: "20px",
                }}
              >
                <h4>ID</h4>
                {item.id}
                <div>
                  <h4>Name</h4>
                  {item.name}
                </div>
                <div>
                  <h4>Email</h4>
                  {item.email}
                </div>
                <div>
                  <h4>Body</h4>
                  {item.body}
                </div>
              </Card>
            </div>
          ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <Button
          size="medium"
          variant="outlined"
          onClick={() => navigate("/fetching1")}
          style={{
            justifyContent: "center",
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "100px",
            height: "50px",
            fontWeight: "bold",
          }}
        >
          1
        </Button>
        <Button
          size="medium"
          variant="outlined"
          onClick={() => navigate("/fetching2")}
          style={{
            justifyContent: "center",
            display: "flex",
            cursor: "pointer",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "100px",
            height: "50px",
            fontWeight: "bold",
          }}
        >
          2
        </Button>
      </div>
    </div>
  );
};

export default FetchingData2;
