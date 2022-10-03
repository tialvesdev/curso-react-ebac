import React from "react";
import Text from "../text/Text";

const DateTime = () => {
  const date = new Date();

  function addZero(num) {
    return num >= 0 && num < 10 ? "0" + num : num + "";
  }

  const dateTime = [
    [
      addZero(date.getHours()),
      addZero(date.getMinutes()),
      addZero(date.getSeconds()),
    ].join(":"),
    [
      addZero(date.getDate()),
      addZero(date.getMonth()),
      addZero(date.getFullYear()),
    ].join("/"),
  ].join(" ");

  return dateTime;
};

export default DateTime;
