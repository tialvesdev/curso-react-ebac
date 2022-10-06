import React from "react";
import './button.style.css';

const Button = (props) => {

    // const maybe = document.createElement('button');
    // maybe.classList.add(props.style);
    // maybe.onclick(props.action);
    // maybe.innerText = props.text;
    // maybe.style.gridArea = props.grid

    return(
        <button className={props.style} style={{gridArea: props.grid}} onClick={props.action}>{props.text}</button>
        // maybe
    )
}

export default Button;