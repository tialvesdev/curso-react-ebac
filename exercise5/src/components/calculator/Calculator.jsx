import React from "react";
import Keyboard from "../keyboard/Keyboard";
import Viewfinder from "../viewfinder/Viewfinder";

class Calculator extends React.Component {
    render() {
      return (
        <div className="calc">
          <Viewfinder />
          <Keyboard />
        </div>
      )
    }
  }
  
  export default Calculator;