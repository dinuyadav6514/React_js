import React from "react";
import Buttons from "./Buttons.jsx";

function Bar({ onColorChange }) {
  return (
    <div className="w-[90%] h-[50px] bg-amber-600 rounded-md flex justify-between items-center px-2">
      <Buttons value="red" bgcolor="red" onClick={onColorChange} />
      <Buttons value="blue" bgcolor="blue" onClick={onColorChange} />
      <Buttons value="black" bgcolor="black" onClick={onColorChange} />
      <Buttons value="green" bgcolor="green" onClick={onColorChange} />
      <Buttons value="slate" bgcolor="slategray" onClick={onColorChange} />
    </div>
  );
}

export default Bar;
