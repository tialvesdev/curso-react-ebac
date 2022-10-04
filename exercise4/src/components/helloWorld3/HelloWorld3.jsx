import React from "react";
import Text from "../utils/text/Text";
import DateTime from "../utils/dateTime/DateTime";

const HelloWorld3 = () => {

    const hw3 = `3) Hello World - ${DateTime()}`;
    // 3rd Hello World - Use the Text component and pass as props
    return(
        <Text p={hw3} />
    )
}

export default HelloWorld3;