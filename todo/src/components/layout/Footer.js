import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <p style={footerStyle}>©sebastiand - 2020</p>
    </React.Fragment>
  );
}

const footerStyle = {
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px"
};
