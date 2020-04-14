import React from "react";

import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName} </p>
      <p>This is April of 2020!</p>
    </div>
  );
};

export default userOutput;
