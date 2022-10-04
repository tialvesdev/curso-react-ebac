import React from "react";
import Text from "../utils/text/Text";
import DateTime from "../utils/dateTime/DateTime";

const HelloWorld3 = () => {

    // 3rd Hello World - Use the Text component and pass props
    const hw3 = `3) Hello World - ${DateTime()}`;
    return(
        <Text p={hw3} />
    )
}

export default HelloWorld3;