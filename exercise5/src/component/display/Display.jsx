import React from "react";
import SubText from "../utils/subText/SubText";
import './display.style.css'

// Component for the "screen" part of the calculator
const Display = () => {

    // All allowed chars in the input and all operators
    const allowed = /[0-9+-.xX*/]+/;
    const op = ["+", "-", "*", "x", "X", "/"];

    // When something is pressed in the input
    window.addEventListener("beforeinput", (e) => {
        
    });

    return (
        <div className="display">
            <SubText text="subText"/>
            <input className="input-area" type="text" />
        </div>
    )
}

export default Display;