import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div className="main">
      <CalculatorDisplay />
      <ActionButton action={"Clear"} />
      <NumberButton />
    </div>
  );
};

export default App;
