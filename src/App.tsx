// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from "./MuiComponents/About";
// import Contact from "./MuiComponents/Contact";
// import Password from "./MuiComponents/Password";
// import ForgotPassword from "./MuiComponents/ForgotPassword";
// import NewWebsite from "./MuiComponents/NewWebsite";
// import Email from "./MuiComponents/Email";
// import Pin from "./MuiComponents/Pin";

// import SignUp from "./MuiComponents/SignUp";
// import UpdatedWebsite from "./MuiComponents/UpdatedWebsite";

// import "./App.css";
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import enJSON from "./MuiComponents/en.json";
// import hiJSON from "./MuiComponents/hi.json";
// import frJSON from "./MuiComponents/fr.json";
// import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import kotak from "./MuiComponents/Kotak.png"

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

// function App() {
//   const [lan, setLan] = useState("en");

//   const handleClick = () => {
//     setLan("en");
//   };

//   const handleHindi = () => {
//     setLan("hi");
//   };

//   const handleFrench = () => {
//     setLan("fr");
//   };

//   i18n.use(initReactI18next).init({
//     resources: {
//       en: {
//         translation: {
//           ...enJSON,
//         },
//       },
//       hi: {
//         translation: {
//           ...hiJSON,
//         },
//       },
//       fr: {
//         translation: {
//           ...frJSON,
//         },
//       },
//     },
//     lng: lan,
//   });

//   return (
//     <Router>
//       <div style={{ backgroundColor: "rgb(245,245,245)", height: "300vh" }}>

//         <div style={{display:"grid",gridTemplateColumns:"20%  1fr" }}>
//           <div>
//           <img style={{height:"75px", justifyContent:"center",display:"flex", width:"100%"}} src={kotak} alt="kotak logo"></img>
//           </div>
//         <div style={{background:"rgba(255,0,0)",height:"75px", display: "flex", justifyContent: "end",alignItems:"center"}}>
//         <div style={{background:"rgba(0,51,102)",height:"55px",padding:"10px", display: "flex", justifyContent: "end",alignItems:"center"}}>
//         <ul
//           style={{

//             display: "flex",
//          gap:"24px"

//           }}

//         >

//       <Link
//             to="/login"
//             style={{
//               color: "white",
//               fontSize: "18px",
//               fontWeight: "bold",
//               textDecoration: "none",
//             }}
//           >
//          Home
//           </Link>

//           <Link
//             to="/about"
//             style={{
//               color: "white",
//               fontSize: "18px",
//               fontWeight: "bold",
//               textDecoration: "none",
//             }}
//           >
//       About Us
//           </Link>

//           <Link
//             to="/contact"
//             style={{
//               color: "white",
//               fontSize: "18px",
//               fontWeight: "bold",
//               textDecoration: "none",
//             }}
//           >
//         Contact Us
//           </Link>
//         </ul>
//         </div>
//         </div>
//         </div>

//         <div style={{ display: "flex", justifyContent: "end",padding:"10px",height:"55px"}}>
//           {/* <Button onClick={handleClick} style={{color:"white",fontSize:"16px"}}>English</Button>
//           <Button  style={{color:"white",fontSize:"16px"}}>Hindi</Button>
//           <Button onClick={handleFrench} style={{color:"white",fontSize:"16px"}}>French</Button>
//            */}

//         <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>

//         <Select

//           value={lan}
//           label="Language"
//           style={{color:"black", fontWeight:"bold", fontSize:"18px", background:"white"}}

//         >
//           <MenuItem value={"en"} onClick={handleClick} style={{color:"black",fontSize:"16px"}}>English</MenuItem>
//           <MenuItem  value={"hi"}onClick={handleHindi} style={{color:"black",fontSize:"16px"}}>Hindi</MenuItem>
//           <MenuItem  value={"fr"} onClick={handleFrench} style={{color:"black",fontSize:"16px"}}>French</MenuItem>
//         </Select>

//       </FormControl>
//     </Box>
//         </div>
//         <Routes>
//           <Route path="/" element={<Password />}></Route>
//           <Route path="/forgot" element={<ForgotPassword />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/login" element={<Password />}></Route>
//           <Route path="/new" element={<NewWebsite />}></Route>
//           <Route path="/email" element={<Email />}></Route>
//           <Route path="/pin" element={<Pin />}></Route>
//           <Route path="/update" element={<UpdatedWebsite />}></Route>
//           <Route path="/sign" element={<SignUp />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//         </Routes>

//       </div>
//     </Router>
//   );
// }
// export default App;

// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
// import PeopleIcon from '@mui/icons-material/People';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./Linkedin/Login"
// import React from 'react'
// import SignUp from "./Linkedin/SignUp"
// import Name from "./Linkedin/Name"
// import Linkedin from "./Assets/linkedin-logo1.jpg"
// import Forgot from './Linkedin/Forgot';
// import Pin from "./Linkedin/Pin"
// import Games from './Linkedin/Games';
// import Articles from './Linkedin/Articles';
// import Learning from './Linkedin/Learning';
// import Email from './Linkedin/Email';
// import People from "./Linkedin/People"
// import Jobs from './Linkedin/Jobs';

// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import {  Home } from '@mui/icons-material';
// import Website from './Linkedin/Website';
// import Application from './Linkedin/Application1';
// import Application1 from './Linkedin/Application1';
// import Application2 from './Linkedin/Application2';
// import Application3 from './Linkedin/Application3';
// import Application4 from './Linkedin/Application4';
// import Congratulations1 from './Linkedin/Congratulations1';
// import Congratulations2 from './Linkedin/Congratulations2';
// import Congratulations3 from './Linkedin/Congratulations3';
// import Congratulations4 from './Linkedin/Congratulations4';
// import Agreement from './Linkedin/Agreement';
// import Cookie from "./Linkedin/cookie"
// import Privacy from './Linkedin/Privacy';

// import Header from './Linkedin/Header';
// import Footer from "./Linkedin/Footer";

// const App = () => {
//   return (

//     <div>
//       <Router>
//         <div style={{ backgroundColor: "rgb(255,255,255)" }}>

//           <div style={{display:"grid",gridTemplateColumns:"20%  1fr" }}>
//           <Link to="/login"><img style={{height:"30px", width:"auto", padding:"40px", display:"flex", marginLeft:"10px"}} src={Linkedin}></img></Link>

//           <ul
//             style={{

//               display: "flex",
//            gap:"24px"

//             }}

//           >

//             <Link
//               to="/articles"
//               style={{
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//                 marginLeft:"300px",

//               }}
//             >
//               <div style={{display:"block"}} ><ArticleOutlinedIcon fontSize="large"></ArticleOutlinedIcon>
//               <div>Articles</div></div>

//             </Link>

//             <Link
//               to="/people"
//               style={{
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//               }}
//             ><PeopleIcon style={{display:"block"}}  fontSize="large"></PeopleIcon>
//           People
//             </Link>

//             <Link
//               to="/learning"
//               style={{
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//               }}
//             ><LocalLibraryOutlinedIcon style={{display:"block"}}  fontSize="large"></LocalLibraryOutlinedIcon>
//         Learning
//             </Link>

//             <Link
//               to="/jobs"
//               style={{
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//               }}
//             ><WorkOutlineIcon style={{display:"block"}}  fontSize="large"></WorkOutlineIcon>
//         Jobs
//             </Link>

//             <Link
//               to="/games"
//               style={{
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//                 marginRight:"330px"

//               }}
//             ><VideogameAssetOutlinedIcon style={{display:"block"}} fontSize="large"></VideogameAssetOutlinedIcon>
//         Games
//             </Link>

//             <Link
//               to="/signup"
//               style={{
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//                 marginTop:"10px"
//               }}
//             >
//         Join now
//             </Link>

//             <Link
//               to="/login"
//               style={{
//                 color: "black",
//                 fontSize: "18px",
//                 fontWeight: "bold",
//                 textDecoration: "none",
//                 marginTop:"10px"
//               }}
//             >
//         Sign in
//             </Link>
//           </ul>
//           </div>

//           <Routes>
//             <Route path="/Login" element={<Login />}></Route>
//             <Route path="/SignUp" element={<SignUp />}></Route>
//             <Route path="/Name" element={<Name />}></Route>
//             <Route path="/forgot" element={<Forgot />}></Route>
//             <Route path="/pin" element={<Pin />}></Route>
//             <Route path="/learning" element={<Learning />}></Route>
//             <Route path="/games" element={<Games />}></Route>
//             <Route path="/email" element={<Email />}></Route>
//             <Route path="/people" element={<People />}></Route>
//             <Route path="/jobs" element={<Jobs />}></Route>
//             <Route path="/articles" element={<Articles />}></Route>
//             <Route path="/home" element={<Home />}></Route>
//             <Route path="/website" element={<Website />}></Route>
//             <Route path="/application" element={<Application />}></Route>
//             <Route path="/application1" element={<Application1 />}></Route>
//             <Route path="/application2" element={<Application2 />}></Route>
//             <Route path="/application3" element={<Application3 />}></Route>
//             <Route path="/application4" element={<Application4 />}></Route>
//             <Route path="/congratulations1" element={<Congratulations1 />}></Route>
//             <Route path="/congratulations2" element={<Congratulations2 />}></Route>
//             <Route path="/congratulations3" element={<Congratulations3 />}></Route>
//             <Route path="/congratulations4" element={<Congratulations4 />}></Route>
//             <Route path="/agreement" element={<Agreement />}></Route>
//             <Route path="/cookie" element={<Cookie />}></Route>
//             <Route path="/privacy" element={<Privacy />}></Route>
//             <Route path="/footer" element={<Footer />}></Route>
//             <Route path="/header" element={<Header />}></Route>

//           </Routes>

//         </div>
//       </Router>
//       </div>
//     );
//   }
//   export default App;

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import React from 'react'
// import json from "./Assets/json.jpg"
// import Home from "./Data/Home"
// import FetchingData1 from './Data/FetchingData'
// import FetchingData2 from './Data/FetchingData2'
// import FetchingData2Copy from './Data/FetchingData2Copy'
// import FetchingData2CopyCopy from './Data/FetchingData2CopyCopy'

// export const App = () => {

//   return (

//     <div>
//       <Router>
//       <div style={{height:"100px", backgroundColor:"skyblue"}}><Link to="/home"><img style={{marginTop:"20px", marginLeft:"20px", cursor:"pointer"}}src={json} alt="json"></img></Link></div>

//       <Routes>
//           <Route path="/home" element={<Home />}></Route>
//           <Route path="/fetching1" element={<FetchingData1 />}></Route>
//           <Route path="/fetching2" element={<FetchingData2 />}></Route>
//           <Route path="/fetching2copy" element={<FetchingData2Copy />}></Route>
//           <Route path="/fetching2copycopy" element={<FetchingData2CopyCopy />}></Route>
//       </Routes>
//       </Router>
//     </div>
//   )
// }
// export default App

import Form from "./Tesla/Form";
import NewPage from "./Tesla/NewPage";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Tesla from "./Assets/Tesla.jpg";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import PeopleIcon from "@mui/icons-material/People";

import LoginL from "./Linkedin/Login";
import SignUpLinedin from "./Linkedin/SignUp";
import Name from "./Linkedin/Name";
import Linkedin from "./Assets/linkedin-logo1.jpg";
import Forgotl from "./Linkedin/Forgot";
import PinLinkedin from "./Linkedin/Pin";
import Games from "./Linkedin/Games";
import Articles from "./Linkedin/Articles";
import Learning from "./Linkedin/Learning";
import EmailLinkedin from "./Linkedin/Email";
import People from "./Linkedin/People";
import Jobs from "./Linkedin/Jobs";
import Website from "./Linkedin/Website";

// import Application from "./Linkedin/Application1";
// import Application1 from "./Linkedin/Application1";
import Application2 from "./Linkedin/Application2";
import Application3 from "./Linkedin/Application3";
import Application4 from "./Linkedin/Application4";
import Congratulations1 from "./Linkedin/Congratulations1";
import Congratulations2 from "./Linkedin/Congratulations2";
import Congratulations3 from "./Linkedin/Congratulations3";
import Congratulations4 from "./Linkedin/Congratulations4";
import Agreement from "./Linkedin/Agreement";
import Cookie from "./Linkedin/cookie";
import Privacy from "./Linkedin/Privacy";

import Header from "./Linkedin/Header";
import Footer from "./Linkedin/Footer";

import HomeData from "./Tesla/Home";
import FetchingData1 from "./Data/FetchingData";
import FetchingData2 from "./Data/FetchingData2";

import About from "./MuiComponents/About";
import Contact from "./MuiComponents/Contact";
import PasswordK from "./MuiComponents/Password";
import ForgotPassword from "./MuiComponents/ForgotPassword";
import NewWebsite from "./MuiComponents/NewWebsite";
import Email from "./MuiComponents/Email";
import Pin from "./MuiComponents/Pin";

import SignUp from "./MuiComponents/SignUp";
import UpdatedWebsite from "./MuiComponents/UpdatedWebsite";

import "./App.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./MuiComponents/en.json";
import hiJSON from "./MuiComponents/hi.json";
import frJSON from "./MuiComponents/fr.json";

import "./App.scss";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Google/Home";
import Signin from "./Google/Signin";
import Create from "./Google/CreateAccount";
import Password from "./Google/Password";
import Google from "./Google/Google";

import Apple from "./Apple/Apple";
import Mac from "./Apple/Mac";
import iPhone from "./Apple/iPhone";

const App = () => {
  const [lan, setLan] = useState("en");

  const handleClick = () => {
    setLan("en");
  };

  const handleHindi = () => {
    setLan("hi");
  };

  const handleFrench = () => {
    setLan("fr");
  };

  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: {
          ...enJSON,
        },
      },
      hi: {
        translation: {
          ...hiJSON,
        },
      },
      fr: {
        translation: {
          ...frJSON,
        },
      },
    },
    lng: lan,
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Apple" element={<Apple />}></Route>
          <Route path="/Mac" element={<Mac />}></Route>
          <Route path="/iPhone" element={<iPhone />}></Route>

          {/* Google Data */}
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home/signin" element={<Signin />}></Route>
          <Route path="/password" element={<Password />}></Route>
          <Route path="/google" element={<Google />}></Route>

          {/* kotak data */}
          <Route path="/" element={<Password />}></Route>
          <Route path="/forgot" element={<ForgotPassword />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<PasswordK />}></Route>
          <Route path="/new" element={<NewWebsite />}></Route>
          <Route path="/email" element={<Email />}></Route>
          <Route path="/pin" element={<Pin />}></Route>
          <Route path="/update" element={<UpdatedWebsite />}></Route>
          <Route path="/sign" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          {/* Linedin Data */}
          <Route path="/loginl" element={<LoginL />}></Route>
          <Route path="/signup" element={<SignUpLinedin />}></Route>
          <Route path="/Name" element={<Name />}></Route>
          <Route path="/forgotl" element={<Forgotl />}></Route>
          <Route path="/pinl" element={<PinLinkedin />}></Route>
          <Route path="/learning" element={<Learning />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/emaill" element={<EmailLinkedin />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/website" element={<Website />}></Route>
          {/* <Route path="/application" element={<Application />}></Route>
          <Route path="/application1" element={<Application1 />}></Route> */}
          <Route path="/application2" element={<Application2 />}></Route>
          <Route path="/application3" element={<Application3 />}></Route>
          <Route path="/application4" element={<Application4 />}></Route>
          <Route
            path="/congratulations1"
            element={<Congratulations1 />}
          ></Route>
          <Route
            path="/congratulations2"
            element={<Congratulations2 />}
          ></Route>
          <Route
            path="/congratulations3"
            element={<Congratulations3 />}
          ></Route>
          <Route
            path="/congratulations4"
            element={<Congratulations4 />}
          ></Route>
          <Route path="/agreement" element={<Agreement />}></Route>
          <Route path="/cookie" element={<Cookie />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/header" element={<Header />}></Route>

          {/* JSON DATA */}
          <Route path="/homedata" element={<HomeData />}></Route>
          <Route path="/fetching1" element={<FetchingData1 />}></Route>
          <Route path="/fetching2" element={<FetchingData2 />}></Route>

          {/* Tesla Form */}
          <Route path="/form" element={<Form />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/newpage" element={<NewPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App;
