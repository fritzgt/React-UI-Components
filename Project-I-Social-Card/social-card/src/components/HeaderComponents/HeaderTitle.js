import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="title">
      <p>
        Lambda School{" "}
        <span className="time-stamp"> @LambdaSchool {Date()} </span>{" "}
      </p>{" "}
    </div>
  );
};

export default HeaderTitle;
