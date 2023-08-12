import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/order-summary");
    // replace the above line with the below line
    // navigate("/order-summary", { replace: true });
  };
  return (
    <div className="container">
      <h3>Home Page</h3>
      {/* onclick navigate order-summary page */}
      <button onClick={handleClick} >Place Order</button>
    </div>
  );
};

export default Home;
