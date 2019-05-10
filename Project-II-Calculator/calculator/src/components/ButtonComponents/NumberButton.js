import React from "react";
import "./Button.css";
import Text from "./Text";

const arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrSymb = ["÷", "X", "—", "+", "="];

const NumberButton = () => {
  return (
    <div>
      <div className="number-container">
        {arrNumb.map(i => (
          <Text text={i} key={i} buttonStyle={"number-buttons"} />
        ))}
      </div>
      {/* <div className="symbol-container">
        {arrSymb.map(i => (
          <Text text={i} key={i} buttonStyle={"number-buttons"} />
        ))}
      </div> */}
    </div>
  );
};

export default NumberButton;
