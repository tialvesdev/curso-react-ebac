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
    window.addEventListener("beforeinput", (e) => this.handleInput(e));
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
    const newData = e.data;
    const lastData = inputData.slice(-1).toString();

    console.log("handleInput");

    if (newData == null) {
      this.props.delLastOfCalculation();
    } else if (!allowed.test(newData)) {
      e.preventDefault();
      console.log("not allowed");
    } else {
      if (op.includes(lastData) && op.includes(newData)) {
        this.props.delLastOfCalculation();
      }
      this.props.handleState(newData);
    }
  }

  render() {
    return (
      <div className="display">
        <SubText text={this.props.answer} />
        <input
          type="text"
          className="input-area"
          // defaultValue={this.props.calculation}
        />
      </div>
    );
  }
}

export default Display;
