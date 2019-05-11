import React from "react";

const getVal = () => {
  const val = document.querySelectorAll(".number-buttons").value;
  console.log(val);
};

const Text = props => {
  return (
    <span className="prop-cont">
      <button className={props.buttonStyle} onClick={getVal}>
        {props.text}
      </button>
    </span>
  );
};

export default Text;
