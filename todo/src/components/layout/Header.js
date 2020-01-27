import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logout from "../auth/Logout";

export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        <Link style={linkStyle} to="/track">
          Tracker
        </Link>{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>{" "}
        <Link style={linkStyle} to="/contact">
          Contact
        </Link>
        <Logout />
      </header>
    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  textAlign: "center",
  float: "center",
  paddingLeft: "70px"
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "15px"
};
