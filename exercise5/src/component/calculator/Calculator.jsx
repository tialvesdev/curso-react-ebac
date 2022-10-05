import React from "react";
import Display from "../display/Display";
import Keyboard from "../keyboard/Keyboard";

const Calculator = () => {

    return(
        <div className="calc">
            <form>
                <Display/>
                <Keyboard/>
            </form>
        </div>
    )
}

export default Calculator