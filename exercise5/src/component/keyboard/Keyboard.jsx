import React from "react";
import Button from "../utils/button/Button";
import './keyboard.style.css';

// Component for the keyboard of the calculator
const Keyboard = () => {

    return (
        <div className="keyboard">
            <Button type="button" grid="nine" style="btn num" action={() => ""} text="9"/>
            <Button type="button" grid="eight" style="btn num" action={() => ""} text="8"/>
            <Button type="button" grid="seven" style="btn num" action={() => ""} text="7"/>
            <Button type="button" grid="six" style="btn num" action={() => ""} text="6"/>
            <Button type="button" grid="five" style="btn num" action={() => ""} text="5"/>
            <Button type="button" grid="four" style="btn num" action={() => ""} text="4"/>
            <Button type="button" grid="three" style="btn num" action={() => ""} text="3"/>
            <Button type="button" grid="two" style="btn num" action={() => ""} text="2"/>
            <Button type="button" grid="one" style="btn num" action={() => ""} text="1"/>
            <Button type="button" grid="point" style="btn num" action={() => ""} text="."/>
            <Button type="button" grid="zero" style="btn num" action={() => ""} text="0"/>
            <Button type="button" grid="clear" style="btn op" action={() => ""} text={<i className="fa-solid fa-c"></i>}/>
            <Button type="button" grid="divide" style="btn op" action={() => ""} text={<i className="fa-solid fa-divide"></i>}/>
            <Button type="button" grid="multiply" style="btn op" action={() => ""} text={<i className="fa-solid fa-xmark"></i>}/>
            <Button type="button" grid="delete" style="btn op" action={() => ""} text={<i className="fa-solid fa-delete-left"></i>}/>
            <Button type="button" grid="minus" style="btn op" action={() => ""} text={<i className="fa-solid fa-minus"></i>}/>
            <Button type="button" grid="plus" style="btn op" action={() => ""} text={<i className="fa-solid fa-plus"></i>}/>
            <Button type="submit" grid="equals" style="btn op" action={() => ""} text={<i className="fa-solid fa-equals"></i>}/>
        </div>
    )
}

export default Keyboard;