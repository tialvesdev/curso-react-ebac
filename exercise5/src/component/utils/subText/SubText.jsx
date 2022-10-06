import React from "react";
import './subText.style.css'

// Component for a not the main text
const SubText = (props) => {
    return <span className="subText">{props.text}</span>
}

export default SubText