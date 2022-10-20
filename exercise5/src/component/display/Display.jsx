import React from "react";
import SubText from "../utils/subText/SubText";
import "./display.style.css";

// Component for the "screen" part of the calculator
class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // When something is pressed in the input
    window.addEventListener("keypress", (e) => this.handleInput(e));
  }

  handleInput(e) {
    // All allowed chars in the input and all operators
    const allowed = /[0-9+-.xX*/]+/;
    const inputData = [];
    const op = this.props.op;

    // The new and last char
    const newData = e.key;
    const lastData = inputData.slice(-1).toString();

    // Enter is pressed, to resolve the equation
    if (newData === "Enter") {
      
      // newData => BackSpace
    } else if (newData == "Backspace") {
      this.props.delLastOfCalculation();

      // newData => not an allowed char
    } else if (!allowed.test(newData)) {
      e.preventDefault();
    } else {
      // newData => any operator and lastData => any operator
      if (op.includes(lastData) && op.includes(newData)) {
        this.props.delLastOfCalculation();
      }

      // newData => X instead of *
      if (newData === "X" || newData === "x") {
        this.props.handleState("*");
      } else {
        this.props.handleState(newData);
      }
    }
  }

  render() {
    return (
      <div className="display">
        <SubText text={this.props.answer} />
        <input id="input" type="text" className="input-area" />
      </div>
    );
  }
}

export default Display;
