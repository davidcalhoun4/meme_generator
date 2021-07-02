import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="./Trollface.png" alt="troll" />
      <p>Meme Generator</p>
      <Link to="/" style={linkStyle}>
        Create New Meme
      </Link>
      <Link to="/memes" style={linkStyle}>
        View Saved Memes
      </Link>
    </header>
  );
}
const linkStyle = {
  paddingLeft: "70px",
  paddingRight: "25px",
};

export default Header;
