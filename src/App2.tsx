// import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
// import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
// import PeopleIcon from "@mui/icons-material/People";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Login from "./Linkedin/Login";
// import React from "react";
// import SignUp from "./Linkedin/SignUp";
// import Name from "./Linkedin/Name";
// import Linkedin from "./Assets/linkedin-logo1.jpg";
// import Forgot from "./Linkedin/Forgot";
// import Pin from "./Linkedin/Pin";
// import Games from "./Linkedin/Games";
// import Articles from "./Linkedin/Articles";
// import Learning from "./Linkedin/Learning";
// import Email from "./Linkedin/Email";
// import People from "./Linkedin/People";
// import Jobs from "./Linkedin/Jobs";

// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { Home } from "@mui/icons-material";
// import Website from "./Linkedin/Website";
// import Application from "./Linkedin/Application1";
// import Application1 from "./Linkedin/Application1";
// import Application2 from "./Linkedin/Application2";
// import Application3 from "./Linkedin/Application3";
// import Application4 from "./Linkedin/Application4";
// import Congratulations1 from "./Linkedin/Congratulations1";
// import Congratulations2 from "./Linkedin/Congratulations2";
// import Congratulations3 from "./Linkedin/Congratulations3";
// import Congratulations4 from "./Linkedin/Congratulations4";
// import Agreement from "./Linkedin/Agreement";
// import Cookie from "./Linkedin/cookie";
// import Privacy from "./Linkedin/Privacy";

// import Header from "./Linkedin/Header";
// import Footer from "./Linkedin/Footer";

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <div style={{ backgroundColor: "rgb(255,255,255)" }}>
//           <div style={{ display: "grid", gridTemplateColumns: "20%  1fr" }}>
//             <Link to="/login">
//               <img
//                 style={{
//                   height: "30px",
//                   width: "auto",
//                   padding: "40px",
//                   display: "flex",
//                   marginLeft: "10px",
//                 }}
//                 src={Linkedin}
//               ></img>
//             </Link>

//             <ul
//               style={{
//                 display: "flex",
//                 gap: "24px",
//               }}
//             >
//               <Link
//                 to="/articles"
//                 style={{
//                   color: "black",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   textDecoration: "none",
//                   marginLeft: "300px",
//                 }}
//               >
//                 <div style={{ display: "block" }}>
//                   <ArticleOutlinedIcon fontSize="large"></ArticleOutlinedIcon>
//                   <div>Articles</div>
//                 </div>
//               </Link>

//               <Link
//                 to="/people"
//                 style={{
//                   color: "black",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   textDecoration: "none",
//                 }}
//               >
//                 <PeopleIcon
//                   style={{ display: "block" }}
//                   fontSize="large"
//                 ></PeopleIcon>
//                 People
//               </Link>

//               <Link
//                 to="/learning"
//                 style={{
//                   color: "black",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   textDecoration: "none",
//                 }}
//               >
//                 <LocalLibraryOutlinedIcon
//                   style={{ display: "block" }}
//                   fontSize="large"
//                 ></LocalLibraryOutlinedIcon>
//                 Learning
//               </Link>

//               <Link
//                 to="/jobs"
//                 style={{
//                   color: "black",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   textDecoration: "none",
//                 }}
//               >
//                 <WorkOutlineIcon
//                   style={{ display: "block" }}
//                   fontSize="large"
//                 ></WorkOutlineIcon>
//                 Jobs
//               </Link>

//               <Link
//                 to="/games"
//                 style={{
//                   color: "black",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   textDecoration: "none",
//                   marginRight: "330px",
//                 }}
//               >
//                 <VideogameAssetOutlinedIcon
//                   style={{ display: "block" }}
//                   fontSize="large"
//                 ></VideogameAssetOutlinedIcon>
//                 Games
//               </Link>

//               <Link
//                 to="/signup"
//                 style={{
//                   color: "black",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   textDecoration: "none",
//                   marginTop: "10px",
//                 }}
//               >
//                 Join now
//               </Link>

//               <Link
//                 to="/login"
//                 style={{
//                   color: "black",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   textDecoration: "none",
//                   marginTop: "10px",
//                 }}
//               >
//                 Sign in
//               </Link>
//             </ul>
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
//             <Route
//               path="/congratulations1"
//               element={<Congratulations1 />}
//             ></Route>
//             <Route
//               path="/congratulations2"
//               element={<Congratulations2 />}
//             ></Route>
//             <Route
//               path="/congratulations3"
//               element={<Congratulations3 />}
//             ></Route>
//             <Route
//               path="/congratulations4"
//               element={<Congratulations4 />}
//             ></Route>
//             <Route path="/agreement" element={<Agreement />}></Route>
//             <Route path="/cookie" element={<Cookie />}></Route>
//             <Route path="/privacy" element={<Privacy />}></Route>
//             <Route path="/footer" element={<Footer />}></Route>
//             <Route path="/header" element={<Header />}></Route>
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// };
// export default App;
import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;
