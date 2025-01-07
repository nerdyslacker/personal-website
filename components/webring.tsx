import React from "react";

const WebRing = () => {
  const containerStyle = {
    fontFamily: "monospace",
    textAlign: "center" as const,
    padding: "0.5rem",
    border: "solid #46475a 0.1rem",
    borderRadius: "5px",
    backgroundColor: "#1f1e2e"
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: "1rem",
  };

  const navLinkStyle = {
    ...linkStyle,
    padding: "0.5rem",
  };

  const headerStyle = {
    padding: "0 0 0.5em 0",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <a href="https://ծիր.հայ/" style={linkStyle}>
          🕸️ծիր.հայ💍
        </a>
      </div>
      <div>
        <a href="https://ծիր.հայ/նախորդ" style={navLinkStyle}>
          ◀
        </a>
        <a href="https://ծիր.հայ/պատահական" style={navLinkStyle}>
          🎲
        </a>
        <a href="https://ծիր.հայ/յաջորդ" style={navLinkStyle}>
          ▶
        </a>
      </div>
    </div>
  );
};

export default WebRing;
