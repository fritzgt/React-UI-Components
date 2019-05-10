import React from "react";

const Text = props => {
  return (
    <div>
      <button className={props.buttonStyle}> {props.text} </button>
    </div>
  );
};

export default Text;
