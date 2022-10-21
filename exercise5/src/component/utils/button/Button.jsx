import React from "react";
import "./button.style.css";

// Component for buttons
const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`btn ${props.style}`}
      style={{ gridArea: props.grid }}
      onClick={props.action}
    >
      {props.text}
    </button>
  );
};

export default Button;
