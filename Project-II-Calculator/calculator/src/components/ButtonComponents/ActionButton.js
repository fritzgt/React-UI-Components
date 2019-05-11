import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <span>
      <button className="action-buttons"> {props.action} </button>
    </span>
  );
};

export default ActionButton;
