import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React, { useState, ChangeEvent } from "react";
import Footer from "./Footer";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
                                  Material UI
           
Material UI is an open-source React component library that implements Google's Material Design.
It's comprehensive and can be used in production out of the box.
       
                                  Introduction
Material UI is an open-source React component library that implements Google's Material Design.
It includes a comprehensive collection of prebuilt components that are ready for use in production
right out of the box, and features a suite of customization options that make it easy to implement
your own custom design system on top of our components.
           
 
                              Advantages of Material UI
 
           
Ship faster: Over 2,500 open-source contributors have poured countless hours into these components.
Focus on your core business logic instead of reinventing the wheel—we've got your UI covered.
           
Beautiful by default: We're meticulous about our implementation of Material Design, ensuring that
every Material UI component meets the highest standards of form and function, but diverge from the
official spec where necessary to provide multiple great options.
           
Customizability: The library includes an extensive set of intuitive customizability features. The templates
in our store demonstrate how far you can go with customization.
           
Cross-team collaboration: Material UI's intuitive developer experience reduces the barrier to entry for
back-end developers and less technical designers, empowering teams to collaborate more effectively. The design
kits streamline your workflow and boost consistency between designers and developers.
           
Trusted by thousands of organizations: Material UI has the largest UI community in the React ecosystem. It's
almost as old as React itself—its history stretches back to 2014—and we're in this for the long haul. You can count
on the community's support for years to come (for example Stack Overflow).`;

const data2: DataItem2[] = [
  { name: "Playground" },
  { name: "Contact" },
  { name: "Test" },
];

function Website() {
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
    <div
      style={{
        height: "100%",
        transform: `scale(${zoom})`,
        transformOrigin: "top left",
      }}
    >
      <div
        style={{
          fontSize: "30px",
          color: "black",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        Material UI - Overview
      </div>

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
              variant="standard"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.currentTarget.value)
              }
            ></TextField>
            <p>
              <pre>
                <code>{getHightlightedText(text, inputValue)}</code>
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
      <Footer></Footer>
    </div>
  );
}

export default Website;
