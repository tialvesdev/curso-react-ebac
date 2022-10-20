import React from "react";
import Display from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import "./calculator.style.css";

// Component for the actual calculator
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    // Calculation => input, answer => Subtext
    this.state = {
      calculation: "",
      answer: "-",
    };

    // All operators
    this.op = ["+", "-", "*", "x", "X", "/"];
  }

  componentDidMount() {
    // When form is submitted
    window.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  // Deleting a char
  delLastOfCalculation() {
    const calc = this.state.calculation.slice(0, -1);
    const answ =
      this.op.includes(calc.slice(-1)) || calc === "" ? "-" : eval(calc);

    this.setState({
      calculation: calc,
      answer: answ,
    });
  }

  // Adding a new char
  handleState(newData) {
    const newCalc = this.state.calculation + newData;
    const newAnsw = this.op.includes(newCalc.slice(-1)) ? "-" : eval(newCalc);

    this.setState({
      calculation: newCalc,
      answer: newAnsw,
    });

    console.log("handleState", newCalc, newAnsw, this.state);
  }

  render() {
    console.log("render", this.state);

    return (
      <div className="calc">
        <form className="form">
          <Display
            calculation={this.state.calculation}
            answer={this.state.answer}
            delLastOfCalculation={this.delLastOfCalculation.bind(this)}
            handleState={this.handleState.bind(this)}
            op={this.op}
          />
          <Keyboard />
        </form>
      </div>
    );
  }
}

export default Calculator;
