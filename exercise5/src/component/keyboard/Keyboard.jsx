import React from "react";
import Button from "../utils/button/Button";
import './keyboard.style.css';

const Keyboard = () => {
    return (
        <div className="keyboard">
            <Button style="btn number" action="" text="0"/>
            <Button style="btn number" action="" text="1"/>
            <Button style="btn number" action="" text="2"/>
            <Button style="btn number" action="" text="3"/>
            <Button style="btn number" action="" text="4"/>
            <Button style="btn number" action="" text="5"/>
            <Button style="btn number" action="" text="6"/>
            <Button style="btn number" action="" text="7"/>
            <Button style="btn number" action="" text="8"/>
            <Button style="btn number" action="" text="9"/>
            <Button style="btn number" action="" text="."/>
        </div>
    )
}

export default Keyboard;