import React from 'react';
import './MainHeader.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { FiPlusCircle } from 'react-icons/fi';
import { BsSend } from 'react-icons/bs';

function MainHeader() {
  return (
    <div className='header'>
        <div className='header__left'>
            <SearchIcon />
            <p>Search</p>
        </div>
        <div className='header__right'>
            <NotificationsNoneRoundedIcon />
                <BsSend />
            <div className='add_photo'>
                <FiPlusCircle />
                <p>Add photo</p>
            </div>
        </div>
    </div>
  )
};

export default MainHeader