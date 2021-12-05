//Fully responsive and dynamic header for NJack website . Created by Aritra Bhaduri on 5-12-2021.

import React from "react";
import logo from "../Resources/img/njack.svg";
import "./style.css";

// CSS for the header
const style = {
  backgroundImage: `url(${require("../Resources/img/IITP.jpg").default})`,
  width: "100%",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  height: "60%",
  // height: "500",
  position: "absolute",
  top: "0px",
  zIndex: "-1",
  textAlign: "center",
  color: "#3D0000",
};

const BgHeader = () => {
  return (
    <div style={style}>
      <img
        className="image"
        src={logo}
        width="40%"
        style={{ marginTop: "80px" }}
      />
      <p
        style={{
          margin: "10px auto",
          padding: "28px 0px",
          fontSize: "30px",
          fontFamily: "'Open Sans', sans-serif",
          backgroundColor: "#950101",
          display: "block"
        }}
      >
        Computer Science Club at Indian Institute of Technology, Patna
      </p>
    </div>
  );
};

export default BgHeader;
