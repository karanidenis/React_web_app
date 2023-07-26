import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Profile.css';


function Profile() {
  return (
    <>
    <div className='profile'>
      <Avatar className='avatar__logo' alt="karani" src='../karani.png' sx={{width:76, height: 77} }/>
      <div className='profile_name'>
        <span >Karani Denis</span>
        </div>
        <div className='profile_usr'>
        <span>@karanii</span>
        </div>
      </div>
      <div className='profile_follow'>
        <div>
          <h4>46</h4>
          <p>Posts</p>
        </div>
        <div>
          <h4>2.8k</h4>
          <p>Followers</p>
        </div>
        <div>
          <h4>526</h4>
          <p>Following</p>
        </div>
      </div>
    </>
  )
}

export default Profile