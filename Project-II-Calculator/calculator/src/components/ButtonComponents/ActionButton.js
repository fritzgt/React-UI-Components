import React from "react";
import "./Button.css";
// import NumberButton from "./NumberButton";

// const ActionButton = () => {
//   return (
//     <div className="button-container">
//       <button className="action-buttons">Clear</button>
//       <NumberButton />
//       <button className="action-buttons">0</button>
//     </div>
//   );
// };

const ActionButton = props => {
  return (
    <span className="button-container">
      <button className="action-buttons"> {props.action} </button>
    </span>
  );
};

export default ActionButton;
