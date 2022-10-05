import React from "react";
import './button.style.css';

const Button = (props) => {
    return(
        <button className={props.style} onClick={props.action}>{props.text}</button>
    )
}

export default Button;