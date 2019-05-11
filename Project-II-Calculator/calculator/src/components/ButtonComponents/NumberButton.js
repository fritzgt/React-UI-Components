import React from "react";
import "./Button.css";
import Text from "./Text";
import ActionButton from "./ActionButton";

// Array to pass the numbers to props
const arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array to pass the symbols to props
const arrSymb = ["÷", "X", "—", "+", "="];

const NumberButton = () => {
  return (
    <span className="button-container">
      {/* Numbers container */}
      <div className="number-container">
        <ActionButton action={"0"} />

        {/* Numbers props */}
        {arrNumb.map(i => (
          <Text text={i} key={i} buttonStyle={"number-buttons"} />
        ))}
        <ActionButton action={"Clear"} />
      </div>

      {/* Symbols  container */}
      <div>
        {/* Symbols props */}
        {arrSymb.map(i => (
          <Text text={i} key={i} buttonStyle={"number-buttons symb"} />
        ))}
      </div>
    </span>
  );
};

export default NumberButton;
