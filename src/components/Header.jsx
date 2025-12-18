import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/linkedin.png"
          alt="linkedin"
        />
      </div>

      <div className="header__search">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
