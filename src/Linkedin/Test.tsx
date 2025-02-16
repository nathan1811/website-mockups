import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import PeopleIcon from "@mui/icons-material/People";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Linkedin from "../Assets/linkedin-logo1.jpg";

const Test = () => {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "20%  1fr" }}>
        <Link to="/loginl">
          <img
            style={{
              height: "30px",
              width: "auto",
              padding: "40px",
              display: "flex",
              marginLeft: "10px",
            }}
            src={Linkedin}
          ></img>
        </Link>

        <ul
          style={{
            display: "flex",
            gap: "24px",
          }}
        >
          <Link
            to="/articles"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
              marginLeft: "300px",
            }}
          >
            <div style={{ display: "block" }}>
              <ArticleOutlinedIcon fontSize="large"></ArticleOutlinedIcon>
              <div>Articles</div>
            </div>
          </Link>

          <Link
            to="/people"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <PeopleIcon
              style={{ display: "block" }}
              fontSize="large"
            ></PeopleIcon>
            People
          </Link>

          <Link
            to="/learning"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <LocalLibraryOutlinedIcon
              style={{ display: "block" }}
              fontSize="large"
            ></LocalLibraryOutlinedIcon>
            Learning
          </Link>

          <Link
            to="/jobs"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            <WorkOutlineIcon
              style={{ display: "block" }}
              fontSize="large"
            ></WorkOutlineIcon>
            Jobs
          </Link>

          <Link
            to="/games"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
              marginRight: "330px",
            }}
          >
            <VideogameAssetOutlinedIcon
              style={{ display: "block" }}
              fontSize="large"
            ></VideogameAssetOutlinedIcon>
            Games
          </Link>

          <Link
            to="/signup"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
              marginTop: "10px",
            }}
          >
            Join now
          </Link>

          <Link
            to="/loginl"
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
              marginTop: "10px",
            }}
          >
            Sign in
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Test;
