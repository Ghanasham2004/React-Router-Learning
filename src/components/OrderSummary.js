import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h3>Order Confirmed!</h3>
      {/* add back button */}
      <button onClick={handleClick}> Go Back</button>
    </div>
  );
};

export default OrderSummary;
