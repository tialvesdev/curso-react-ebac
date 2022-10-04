import React from "react";
import DateTime from "../utils/dateTime/DateTime";

class HelloWorld4 extends React.Component {
    render() {

        // 4th Hello Word - Class Component
        return(
            <p className="text"> 4) Hello World - {DateTime()} </p>
        )
        
    }
}



export default HelloWorld4;