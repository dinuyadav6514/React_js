import React from "react";

function Button({ value, bgcolor, onClick }) {
  return (
    <div
      className="w-[50px] h-[40px] bg-amber-100 rounded-md flex justify-center items-center cursor-pointer"
      style={{
        backgroundColor: bgcolor,
        color: "white"
      }}
      onClick={() => onClick && onClick(value)}
    >
      {value}
    </div>
  );
}

export default Button;
