import React from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { IoStatsChartOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import "./Actions.css";
import Logout from "../Logout/Logout";
import Tooltip from "@mui/material/Tooltip";

function Actions() {
  return (
    <>
      <div className="actions">
        <Tooltip title="Feature locked" placement="right">
          <div className="feed">
            <WidgetsIcon />
            <p>Feed</p>
          </div>
        </Tooltip>
        <Tooltip title="Feature locked" placement="right">
          <div className="search">
            <SearchRoundedIcon />
            <p>Search</p>
          </div>
        </Tooltip>
        <Tooltip title="Feature locked" placement="right">
          <div className="notification">
            <NotificationsNoneRoundedIcon />
            <p>Notifications</p>
          </div>
        </Tooltip>
        <Tooltip title="Feature locked" placement="right">
          <div className="stats">
            <IoStatsChartOutline />
            <p>Stats</p>
          </div>
        </Tooltip>
        <Tooltip title="Feature locked" placement="right">
          <div className="settings">
            <FiSettings />
            <p>Settings</p>
          </div>
        </Tooltip>
      </div>
      <hr />
      <div className="logout">
        <FiLogOut />
        <Logout />
      </div>
    </>
  );
}

export default Actions;
