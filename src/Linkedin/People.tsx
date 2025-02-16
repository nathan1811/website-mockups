import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import people from "../Assets/people.jpg";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Test from "./Test";

import { useTranslation } from "react-i18next";

type DataItem = {
  name: string;
  description: string;
  jsxCode: string;
  playGround: string;
  contact: string;
  test: string;
};

type DataItem2 = {
  name: string;
};

type DataItem3 = {
  name: string;
  description: string;
};

const data3 = `            
Nathan D'Souza - CEO of Kotak Mahindra Bank Ltd.
                                 
Tim Cook - CEO of Apple Inc.
 
Sundar Pichai - CEO of Google
 
Mark Cuban - Shark Tank - United States of America
 
Anthony Edward Stark - Iron Man  - Plays the role of Iron Man in the Avengers
 
Peter Parket - Spider Man
 
Donald Trump - Former President of The United States of America
 
Steve Jobs - Cofounder of Apple Inc.
 
Uday Kotak - Founder and Former CEO of Kotak Mahindra Bank Ltd.
           
 
                    `;

const data2: DataItem2[] = [
  { name: "Playground" },
  { name: "Contact" },
  { name: "Test" },
];

const People = () => {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);
  const [selectedItem1, setSelectedItem1] = useState<DataItem2 | null>(null);
  const [enable, setEnable] = useState(false);
  const [zoom, setZoom] = useState(1);

  const navigate = useNavigate();

  //   const { t, i18n } = useTranslation("ns1");
  const [inputValue, setInputValue] = useState("");
  const text = data3;
  const getHightlightedText = (text: any, highlight: any) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((parts: any) =>
      parts.toLowerCase() === highlight.toLowerCase() ? (
        <span style={{ background: "yellow" }}> {parts}</span>
      ) : (
        parts
      )
    );
  };
  console.log(text);

  return (
    <div>
      <Test></Test>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              label="Language"
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
                background: "white",
              }}
            >
              <MenuItem style={{ color: "black", fontSize: "16px" }}>
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#0a66c2",
                  }}
                  to="/jobs"
                >
                  Jobs
                </Link>
              </MenuItem>
              <MenuItem style={{ color: "black", fontSize: "16px" }}>
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#0a66c2",
                  }}
                  to="/people"
                >
                  People
                </Link>
              </MenuItem>
              <MenuItem style={{ color: "black", fontSize: "16px" }}>
                <Link
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#0a66c2",
                  }}
                  to="/learning"
                >
                  Learning
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>

      <div
        style={{
          marginTop: "75px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ height: "200px", borderRadius: "6px" }}
          src={people}
        ></img>
        <div style={{ marginTop: "30px" }}>
          <h2>
            Try searching for your co-worker, classmate, professor, or friend.
          </h2>
        </div>
      </div>

      <div
        style={{
          height: "100%",
          transform: `scale(${zoom})`,
          transformOrigin: "top left",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "450px 1fr 250px",
            height: "100%",
          }}
        >
          <div style={{ padding: "40px", color: "black", fontSize: 18 }}>
            <div>
              <TextField
                type="text"
                variant="outlined"
                label="search"
                value={inputValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.currentTarget.value)
                }
              ></TextField>
              <p>
                <pre>
                  <code style={{ fontFamily: "Segoe UI", fontSize: "24px" }}>
                    {getHightlightedText(text, inputValue)}
                  </code>
                </pre>
              </p>
            </div>
          </div>

          {selectedItem && (
            <div
              style={{
                borderLeft: "1px solid",
                display: "grid",
                gridTemplateRows: "repeat(5, 30px)",
                padding: "40px",
                gap: "5px",
              }}
            >
              {data2.map((item) => (
                <div
                  style={{ cursor: "pointer", fontSize: "18px" }}
                  onClick={() => {
                    setEnable(!enable);
                    setSelectedItem1(item);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default People;
