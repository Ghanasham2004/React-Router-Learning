import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "Active";

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
        <div className="buttons">
          <button onClick={() => setSearchParams({ filter: "Active" })}>
            Active Users
          </button>
          <button onClick={() => setSearchParams({})}> Reset Filter </button>
        </div>
      </div>
      <div className="container">
        {showActiveUsers ? <h3>Active Users</h3> : <h3>All Users</h3>}
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Users;
