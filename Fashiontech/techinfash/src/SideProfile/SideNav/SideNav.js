import React from "react";
import "./SideNav.css";
import HeaderSide from "../SideHeader/HeaderSide";
import Profile from "../Profile/Profile";
import Actions from "../Actions/Actions";

function SideNav() {
  return (
    <div className="side__Nav">
      <HeaderSide />
      <Profile />
      <Actions />
    </div>
  );
}

export default SideNav;
