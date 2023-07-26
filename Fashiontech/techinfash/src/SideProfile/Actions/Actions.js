import React from 'react';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { IoStatsChartOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import './Actions.css';

function Actions() {
  return (<>
    <div className="actions">
      <div className="feed">
        <WidgetsIcon />
        <p>Feed</p>
      </div>
      <div className="search">
        <SearchRoundedIcon />
        <p>Search</p>
        </div>
        <div className="notification">
          <NotificationsNoneRoundedIcon />
          <p>Notifications</p>
        </div>
        <div className="stats">
          <IoStatsChartOutline />
          <p>Stats</p>
          </div>
          <div className="settings">
            <FiSettings />
            <p>Settings</p>
          </div>
    </div>
    <hr />
    <div className="logout">
      <FiLogOut />
      <p>Logout</p>
    </div>
    </>
  )
};

export default Actions;