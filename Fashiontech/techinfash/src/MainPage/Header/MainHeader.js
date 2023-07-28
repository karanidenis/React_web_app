import React from 'react';
import './MainHeader.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { FiPlusCircle } from 'react-icons/fi';
import { BsSend } from 'react-icons/bs';
import Tooltip from '@mui/material/Tooltip';


function MainHeader() {
  return (
    <div className='header'>
        <Tooltip title="Feature locked" placement="right">
        <div className='header__left'>
            <SearchIcon />
            <p>Search</p>
        </div>
            </Tooltip>
        <div className='header__right'>
            <NotificationsNoneRoundedIcon />
                <BsSend />
        <Tooltip title="Feature locked" placement="right">
            <div className='add_photo'>
                <FiPlusCircle />
                <p>Add photo</p>
            </div>
        </Tooltip>
        </div>
    </div>
  )
};

export default MainHeader