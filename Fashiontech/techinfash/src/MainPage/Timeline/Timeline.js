import React from "react";
import "./Timeline.css";
import MainHeader from "../Header/MainHeader";
import Stories from "../Stories/Stories";
import Feed from "../Feed/Feed";

function Timeline() {
  return (
    <div className="timeline">
      <MainHeader />
      <Stories />
      <Feed />
    </div>
  );
}

export default Timeline;
