import React from "react";
import { useAuth } from "./auth";

const Profile = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <h3>Welcome {auth.user}</h3>
    </div>
  );
};

export default Profile;
