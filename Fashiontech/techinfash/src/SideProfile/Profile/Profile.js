import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Profile.css";
import { useUser } from "@clerk/clerk-react";

function Profile() {
  // const username = 'karanii';
  const { user } = useUser();
  // const totalUsers = await clerkClient.users.getCount();
  return (
    <>
      <div className="profile">
        <Avatar
          className="avatar__logo"
          alt="karani"
          src="../karani.png"
          sx={{ width: 76, height: 77 }}
        />
        <div className="profile_name">
          {/* <span >Karani Denis</span> */}
          <span>
            {user.lastName} {user.firstName}
          </span>
        </div>
        <div className="profile_usr">
          {/* <span>@{username}</span> */}
          <span>@{user.username}</span>
        </div>
      </div>
      <div className="profile_follow">
        <div>
          <h4>1</h4>
          <p>Posts</p>
        </div>
        <div>
          <h4>1.8k</h4>
          <p>Followers</p>
        </div>
        <div>
          <h4>0</h4>
          <p>Following</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
