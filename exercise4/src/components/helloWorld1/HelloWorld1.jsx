import React from "react";
import DateTime from "../utils/dateTime/DateTime";

const HelloWorld1 = () => {

    /* 1st Hello Horld - Comming From a Variable
       * The only one without the style class */ 
    const hw1 = `1) Hello World - ${DateTime()}`

    return hw1
}

export default HelloWorld1;