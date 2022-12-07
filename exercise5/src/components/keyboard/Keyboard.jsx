import React from "react";
import Button from "../button/Button";
import './keyboard.style.css'

class Keyboard extends React.Component {
    render() {
        return (
            <div className="kbd">
                <Button type="button" className="." content="0" />
                <Button type="button" className="." content="1" />
                <Button type="button" className="." content="2" />
                <Button type="button" className="." content="3" />
                <Button type="button" className="." content="4" />
                <Button type="button" className="." content="5" />
                <Button type="button" className="." content="6" />
                <Button type="button" className="." content="7" />
                <Button type="button" className="." content="8" />
                <Button type="button" className="." content="9" />
                <Button type="button" className="." content="." />
                <Button type="button" className="." content="+" />
                <Button type="button" className="." content="-" />
                <Button type="button" className="." content="*" />
                <Button type="button" className="." content="/" />
                <Button type="button" className="." content="=" />
                <Button type="button" className="." content="C" />
                <Button type="button" className="." content="Del" />
            </div>
        )
    }
}

export default Keyboard;