import React from "react";
import SubText from "../utils/subText/SubText";
import "./display.style.css";

// Component for the "screen" part of the calculator
class Display extends React.Component {
  constructor(props) {
    super(props);

    this.c = 0;
  }

  componentDidMount() {
    // When something is pressed in the input
    window.addEventListener("keypress", (e) => this.handleInput(e));
  }

  componentDidUpdate() {
    this.c++;
    console.log("didUpdate", this.c);
  }

  handleInput(e) {
    // All allowed chars in the input and all operators
    const allowed = /[0-9+-.xX*/]+/;
    const inputData = [];
    const op = this.props.op;

    // The new and last char
    const newData = e.key;
    const lastData = inputData.slice(-1).toString();

    console.log("handleInput", e.key);

    // Enter is pressed, to resolve the equation
    if (newData === "Enter") {
      console.log("enter");
      // newData => BackSpace
    } else if (newData == "Backspace") {
      this.props.delLastOfCalculation();
      console.log("Backspace");

      // newData => not an allowed char
    } else if (!allowed.test(newData)) {
      e.preventDefault();
      console.log("not allowed");
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
        <input id="teste" type="text" className="input-area" />
      </div>
    );
  }
}

export default Display;
