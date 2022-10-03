import React from "react";
import DateTime from "../utils/dateTime/DateTime";
import Text from "../utils/text/Text";

const HelloWorld1 = () => {

    // 1st Hello Horld - Comming From a Variable
    const hw1 = `1) Hello World - ${DateTime()}`

    return <Text p={hw1} />
}

export default HelloWorld1;