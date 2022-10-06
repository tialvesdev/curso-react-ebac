import React from "react";
import Display from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import './calculator.style.css'

// Component for the actual calculator
const Calculator = () => {

    // When form is submitted
    window.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    return(
        <div className="calc">
            <form className="form">
                <Display/>
                <Keyboard/>
            </form>
        </div>
    )
}

export default Calculator