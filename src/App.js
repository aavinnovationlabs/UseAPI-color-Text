import React, { useState } from "react";
import ColorInput from "./ColorInput";
import ColorDisplay from "./ColorDisplay";
import ColorTheme from "./ColorTheme";
import "./App.css";
import "./ColorInput.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="app-container">
      <ColorInput onSelectColor={handleColorChange} />
      {selectedColor && (
        <div className="color-section">
          <ColorDisplay color={selectedColor} />
          <ColorTheme color={selectedColor} />
        </div>
      )}
    </div>
  );
};

export default App;
