import React from "react";
import Button from "../utils/button/Button";
import './keyboard.style.css';

const Keyboard = () => {

    return (
        <div className="keyboard">
            <Button grid="nine" style="btn num" action={() => ""} text="9"/>
            <Button grid="eight" style="btn num" action={() => ""} text="8"/>
            <Button grid="seven" style="btn num" action={() => ""} text="7"/>
            <Button grid="six" style="btn num" action={() => ""} text="6"/>
            <Button grid="five" style="btn num" action={() => ""} text="5"/>
            <Button grid="four" style="btn num" action={() => ""} text="4"/>
            <Button grid="three" style="btn num" action={() => ""} text="3"/>
            <Button grid="two" style="btn num" action={() => ""} text="2"/>
            <Button grid="one" style="btn num" action={() => ""} text="1"/>
            <Button grid="point" style="btn num" action={() => ""} text="."/>
            <Button grid="zero" style="btn num" action={() => ""} text="0"/>
            <Button grid="clear" style="btn op" action={() => ""} text={<i className="fa-solid fa-c"></i>}/>
            <Button grid="divide" style="btn op" action={() => ""} text={<i className="fa-solid fa-divide"></i>}/>
            <Button grid="multiply" style="btn op" action={() => ""} text={<i className="fa-solid fa-xmark"></i>}/>
            <Button grid="delete" style="btn op" action={() => ""} text={<i className="fa-solid fa-delete-left"></i>}/>
            <Button grid="minus" style="btn op" action={() => ""} text={<i className="fa-solid fa-minus"></i>}/>
            <Button grid="plus" style="btn op" action={() => ""} text={<i className="fa-solid fa-plus"></i>}/>
            <Button grid="equals" style="btn op" action={() => ""} text={<i className="fa-solid fa-equals"></i>}/>
        </div>
    )
}

export default Keyboard;