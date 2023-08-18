import "./Logout.css";
import React from "react";
import { useClerk } from "@clerk/clerk-react";

function Logout() {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className="clerksignout">
      <p onClick={handleLogout}>Logout</p>
    </div>
  );
}

export default Logout;
