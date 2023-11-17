///without json
import React from "react";
import "./ColorDisplay.css";

const ColorDisplay = ({ color }) => {
  const style = {
    backgroundColor: color,
  };

  return <div className="color-display" style={style}></div>;
};

export default ColorDisplay;
