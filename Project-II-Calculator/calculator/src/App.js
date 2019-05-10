import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="main">
      <CalculatorDisplay />
      <ActionButton />
    </div>
  );
};

export default App;
