import React from "react";

const Text = props => {
  return (
    <span className="prop-cont">
      <button className={props.buttonStyle}> {props.text} </button>
    </span>
  );
};

export default Text;
