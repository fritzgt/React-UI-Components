import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <CalculatorDisplay />
        <NumberButton />
      </div>
    );
  }
}

export default App;

// const getVal = () => {
//   const val = document.querySelectorAll(".number-buttons").value;
//   console.log(val);
// };
