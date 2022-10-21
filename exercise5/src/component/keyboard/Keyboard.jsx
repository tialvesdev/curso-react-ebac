import React from "react";
import Button from "../utils/button/Button";
import "./keyboard.style.css";

// Component for the keyboard of the calculator
const Keyboard = () => {
  return (
    <div className="keyboard">
      <Button
        type="button"
        grid="nine"
        style="num"
        action={() => ""}
        text="9"
      />
      <Button
        type="button"
        grid="eight"
        style="num"
        action={() => ""}
        text="8"
      />
      <Button
        type="button"
        grid="seven"
        style="num"
        action={() => ""}
        text="7"
      />
      <Button
        type="button"
        grid="six"
        style="num"
        action={() => ""}
        text="6"
      />
      <Button
        type="button"
        grid="five"
        style="num"
        action={() => ""}
        text="5"
      />
      <Button
        type="button"
        grid="four"
        style="num"
        action={() => ""}
        text="4"
      />
      <Button
        type="button"
        grid="three"
        style="num"
        action={() => ""}
        text="3"
      />
      <Button
        type="button"
        grid="two"
        style="num"
        action={() => ""}
        text="2"
      />
      <Button
        type="button"
        grid="one"
        style="num"
        action={() => ""}
        text="1"
      />
      <Button
        type="button"
        grid="point"
        style="num"
        action={() => ""}
        text="."
      />
      <Button
        type="button"
        grid="zero"
        style="num"
        action={() => ""}
        text="0"
      />
      <Button
        type="reset"
        grid="clear"
        style="op"
        action={() => ""}
        text={<i className="fa-solid fa-c"></i>}
      />
      <Button
        type="button"
        grid="divide"
        style="op"
        action={() => ""}
        text={<i className="fa-solid fa-divide"></i>}
      />
      <Button
        type="button"
        grid="multiply"
        style="op"
        action={() => ""}
        text={<i className="fa-solid fa-xmark"></i>}
      />
      <Button
        type="button"
        grid="delete"
        style="op"
        action={() => ""}
        text={<i className="fa-solid fa-delete-left"></i>}
      />
      <Button
        type="button"
        grid="minus"
        style="op"
        action={() => ""}
        text={<i className="fa-solid fa-minus"></i>}
      />
      <Button
        type="button"
        grid="plus"
        style="op"
        action={() => ""}
        text={<i className="fa-solid fa-plus"></i>}
      />
      <Button
        type="submit"
        grid="equals"
        style="op"
        action={() => ""}
        text={<i className="fa-solid fa-equals"></i>}
      />
    </div>
  );
};

export default Keyboard;
