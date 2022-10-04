import React from "react";
import DateTime from "../utils/dateTime/DateTime";

const HelloWorld2 = () => {
    
  // 2nd Hello Horld - Create a new element in React
  return React.createElement('p', {className: 'text'}, `2) Hello World - ${DateTime()}`);
};

export default HelloWorld2;
