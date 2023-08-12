import React from "react";
import { Link, Outlet } from "react-router-dom";
const Users = () => {
  return (
    <>
      <div className="container">
        <ul>
            <li>
                <Link to="/users/1">User 1</Link>
            </li>
            <li>
                <Link to="/users/2">User 2</Link>
            </li>
            <li>
                <Link to="/users/3">User 3</Link>
            </li>
        </ul>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Users;
