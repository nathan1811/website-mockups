import Header from "./Header";
const Privacy = () => {
  return (
    <div>
      <Header></Header>
      <div
        style={{
          backgroundColor: "#D8D7B7",
          height: "200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            justifyContent: "center",
            display: "flex",
            fontSize: "65px",
          }}
        >
          Privacy Policy
        </h1>
      </div>
      <div style={{ display: "block", marginLeft: "350px" }}>
        <p
          style={{ cursor: "pointer", color: "darkblue", marginBottom: "20px" }}
        >
          Effective March 6, 2024
        </p>
        <p>Our Privacy Policy has been updated</p>
        <h2 style={{ fontSize: "30px" }}>Your privacy Matters</h2>
        <div style={{ width: "1000px" }}>
          <p>
            LinedIn's mission is to connect the world's professionals to allow
            them to be more productive and successful. Central to this mission
            is our commitment to be transparent about data we collect about you,
            how it is used and with whom it is shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
