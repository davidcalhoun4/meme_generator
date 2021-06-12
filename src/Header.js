import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Problem?" />
      <p>Meme Generator</p>
      <Link to="/" style={linkStyle}>
        Create Meme
      </Link>
      <Link to="/memes" style={linkStyle}>
        Saved Memes
      </Link>
    </header>
  );
}
const linkStyle = {
  paddingLeft: "45px",
  paddingRight: "25px",
};

export default Header;
