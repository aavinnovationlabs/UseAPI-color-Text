// Font.js

import React, { useState } from "react";
import "./Font.css";

const Font = () => {
  const [userText, setUserText] = useState("");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [displayText, setDisplayText] = useState("");

  const handleTextChange = (event) => {
    setUserText(event.target.value);
  };

  const handleFontChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayText(userText);
  };

  const handleClear = () => {
    setUserText("");
    setDisplayText("");
  };

  return (
    <div className="font-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="userText">Enter Text:</label>
        <input
          type="text"
          id="userText"
          value={userText}
          onChange={handleTextChange}
        />

        <label htmlFor="fontFamily">Select Font Family:</label>
        <input
          type="text"
          id="fontFamily"
          value={fontFamily}
          onChange={handleFontChange}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
      {displayText && <p style={{ fontFamily: fontFamily }}>{displayText}</p>}
    </div>
  );
};

export default Font;
