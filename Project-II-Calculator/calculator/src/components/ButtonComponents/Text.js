import React from "react";

const Text = props => {
  return (
    <span>
      <button className={props.buttonStyle}>{props.text}</button>
    </span>
  );
};

export default Text;
