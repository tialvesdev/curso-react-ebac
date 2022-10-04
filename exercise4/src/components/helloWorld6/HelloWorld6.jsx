import React from "react";
import DateTime from "../utils/dateTime/DateTime";

const HelloWorld6 = () => {

    // 6th Hello World - Execute a Variable that Contains a Funtion
    const hw6 = function () {
        return React.createElement('p', {className: 'text'}, `6) Hello World - ${DateTime()}`);
    }

    return hw6()
}

export default HelloWorld6