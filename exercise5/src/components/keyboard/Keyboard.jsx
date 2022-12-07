import React from "react";
import Button from "../button/Button";
import './keyboard.style.css'

class Keyboard extends React.Component {
    render() {
        return (
            <div className="kbd">
                <Button type="button" className="xulapa" content="kbdBtn" />
                <Button type="button" className="xulapa2" content="kbdBtn2" />
            </div>
        )
    }
}

export default Keyboard;