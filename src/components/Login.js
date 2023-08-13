import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState("");
  const auth = useAuth();

  const redirectPath = location.state?.path || "/"; // this is for redirect to previous page after login success

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="container">
      <div className="login-panel">
        <h2>Login</h2>
        <div className="input-box">
          <label>
            <b>Username : </b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="input-box">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
