import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/D4D03AQHhJpYk5Ygn1g/profile-displayphoto-shrink_800_800/0/1679656594862?e=2147483647&v=beta&t=1bXo3bXKXPFc0wT6Y1jQK8u6rW0Z9Z3fD1Fq6E3cUQk"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
