import React from "react";
import Subtext from "../utils/subtext/Subtext";
import './viewfinder.style.css'

class Viewfinder extends React.Component {
    render() {
        return (
            <div className="viewf">
                <input type="text" className="input" />
                <Subtext value="result" />
            </div>
        )
    }
}

export default Viewfinder;