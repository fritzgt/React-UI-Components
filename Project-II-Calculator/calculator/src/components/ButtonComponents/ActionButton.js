import React from "react";
import "./Button.css";
import NumberButton from "./NumberButton";

const ActionButton = () => {
  return (
    <div className="button-container">
      <button className="action-buttons">Clear</button>
      <NumberButton />
      <button className="action-buttons">0</button>
    </div>
  );
};

export default ActionButton;
