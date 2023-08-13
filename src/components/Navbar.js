import React from "react";
import { NavLink } from "react-router-dom"; // NavLink is used to create links in the navbar that are active when clicked on and inactive on other pages.
import { useAuth } from "./auth";
const Navbar = () => {
  // The navLinkStyle function is used to style the active and inactive links in the navbar. The isActive property is passed to the function by the NavLink component.
  //   const navLinkStyle = ({ isActive }) => {
  //     return {
  //       color: isActive ? "red" : "blue",
  //       fontWeight: isActive ? "bold" : "normal",
  //     };
  //   };

  // use auth context
  const auth = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products"> Products</NavLink>
        </li>
        <li>
          <NavLink to="/users"> Users</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
      {
        // check if user is logged in or not
        auth.user ? (
          <button onClick={auth.logout} className="btn-primary">Logout</button>
        ) : (
          <NavLink to="/login" className="btn-primary">Login</NavLink>
        )
      }
    </nav>
  );
};

export default Navbar;
