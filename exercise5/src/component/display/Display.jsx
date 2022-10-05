import React from "react";
import SubText from "../utils/subText/SubText";
import './display.style.css'

const Display = () => {
    return (
        <div className="display">
            <SubText text="subText"/>
            <input className="input" type="text" />
        </div>
    )
}

export default Display;