import React from "react";
import {  Outlet ,NavLink } from "react-router-dom";
const Products = () => {
  return (
    <>
      <div className="sub-container">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search products"
        />
      </div>
      <div className="sub-container">
        <ul className="tab-menu">
          <li className="tab-menu-item">
            <NavLink to="feature">Feature</NavLink>
          </li>
          <li className="tab-menu-item">
            <NavLink to="new">New</NavLink>
          </li>
        </ul>
      </div>
      <div className="sub-container">
        <Outlet />
      </div>
    </>
  );
};

export default Products;
