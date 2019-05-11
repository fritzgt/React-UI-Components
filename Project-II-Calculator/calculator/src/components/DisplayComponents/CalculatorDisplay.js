import React from "react";
import "./Display.css";

const CalculatorDisplay = props => {
  return (
    <div className="display">
      <p>{props.value}</p>
    </div>
  );
};

export default CalculatorDisplay;

// const CalculatorDisplay = () => {
//   return (
//     <div className="display">
//       <p>0</p>
//     </div>
//   );
// };
