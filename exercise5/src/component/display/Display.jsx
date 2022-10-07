import React from "react";
import SubText from "../utils/subText/SubText";
import "./display.style.css";

// Component for the "screen" part of the calculator
const Display = (props) => {
  // All allowed chars in the input and all operators
  const allowed = /[0-9+-.xX*/]+/;
  const inputData = [];
  const op = props.op;

  function handleInput(e) {
    
    console.log("handleInput");


    const newData = e.data;
    const lastData = inputData.slice(-1).toString();

    if (newData == null) {
      props.delLastOfCalculation();
    } else if (!allowed.test(newData)) {
      e.preventDefault();
    } else {
        if (op.includes(lastData) && op.includes(newData)) {
          props.delLastOfCalculation();
        }
        props.handleState()
        // inputData.toString
    }
  }

  // When something is pressed in the input
  // window.addEventListener("beforeinput", (e) => handleInput(e));

  return (
    <div className="display">
      <SubText text={props.answer} />
      <input className="input-area" defaultValue={props.calculation} type="text" />
    </div>
  );
};

export default Display;
