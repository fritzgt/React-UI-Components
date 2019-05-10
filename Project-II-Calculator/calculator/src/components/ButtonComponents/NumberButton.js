import React from "react";
import "./Button.css";
import Text from "./Text";
import ActionButton from "./ActionButton";

// const arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrSymb = ["÷", "X", "—", "+", "="];

const NumberButton = () => {
  return (
    <span>
      <Text text={"÷"} buttonStyle={"number-buttons symb"} />
      <Text text={9} buttonStyle={"number-buttons"} />
      <Text text={8} buttonStyle={"number-buttons"} />
      <Text text={7} buttonStyle={"number-buttons"} />
      <Text text={"X"} buttonStyle={"number-buttons symb"} />
      <Text text={6} buttonStyle={"number-buttons"} />
      <Text text={5} buttonStyle={"number-buttons"} />
      <Text text={4} buttonStyle={"number-buttons"} />
      <Text text={"—"} buttonStyle={"number-buttons symb"} />
      <Text text={3} buttonStyle={"number-buttons"} />
      <Text text={2} buttonStyle={"number-buttons"} />
      <Text text={1} buttonStyle={"number-buttons"} />
      <Text text={"+"} buttonStyle={"number-buttons symb"} />
      <ActionButton action={"0"} />
      <Text text={"="} buttonStyle={"number-buttons symb"} />
    </span>
  );
};

export default NumberButton;

{
  /* <div className="symb-container">
        {arrSymb.map(i => (
          <Text text={i} key={i} buttonStyle={"number-buttons symb"} />
        ))}
      </div>
      <div className="number-container">
        {arrNumb.map(i => (
          <Text text={i} key={i} buttonStyle={"number-buttons"} />
        ))}
      </div> */
}
