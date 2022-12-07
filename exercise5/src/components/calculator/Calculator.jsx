import React from "react";
import Keyboard from "../keyboard/Keyboard";
import Viewfinder from "../viewfinder/Viewfinder";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      equation: "1+1",
      result: "2",
    }
  }

  render() {
    return (
      <div className="calc">
        <Viewfinder />
        <Keyboard />
        {console.log(this.state.equation, this.state.result)}
      </div>
    )
  }
}

export default Calculator;