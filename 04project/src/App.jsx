import React, { useState } from "react";
import Bar from "./assets/cmpnts/Bar.jsx";

function App() {
  const [bgColor, setBgColor] = useState("black");

  return (
    <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundColor: bgColor }}>
      <Bar onColorChange={setBgColor} />
    </div>
  );
}

export default App;
