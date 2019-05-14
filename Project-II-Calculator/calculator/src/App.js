import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = { value: 1000 };
  }

  render() {
    return (
      <div className="main">
        <CalculatorDisplay value={this.state.value} />
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
