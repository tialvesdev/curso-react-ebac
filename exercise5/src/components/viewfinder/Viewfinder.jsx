import React from "react";
import Subtext from "../utils/subtext/Subtext";
import './viewfinder.style.css'

class Viewfinder extends React.Component {

    componentDidMount() {
        let everything = "";

        document.getElementById('display').addEventListener('keydown', (e) => {
            const value = e.key;
            const allowed = /[0-9+-.x*/]+/;

            console.log(`value = ${value}`);
            if (value === "Backspace") {
                console.log("Backspace pressed");
                everything.slice(0, -1)
            } else if (!allowed.test(value)) {
                e.preventDefault();
                console.log("value is not allowed");
            } else {
                everything += value;
            }
            console.log(`everything = ${everything}`)

        });
    }

    render() {
        return (
            <div className="viewf">
                <input id="display" type="text" className="input" />
                <Subtext value="result" />
            </div>
        )
    }
}

export default Viewfinder;