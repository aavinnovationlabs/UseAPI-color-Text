import React, { useState } from "react";
import "./ColorInput.css";
import axios from "axios";
import Swal from "sweetalert2";

const ColorInput = ({ onSelectColor }) => {
  const [userQuery, setUserQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [fontFamily, setFontFamily] = useState(null);

  const sendRequest = async () => {
    try {
      const apiUrl = "/query";
      const requestBody = {
        user_query: userQuery,
        history: [],
      };

      const result = await axios.post(apiUrl, requestBody);
      setResponse(result.data);

      const bgColor = result.data.background_color;
      setBackgroundColor(bgColor);
      onSelectColor(bgColor);

      if (result.data.text_format_header) {
        const headerFontFamily = result.data.text_format_header;
        setFontFamily(headerFontFamily);
        console.log("Font Family:", headerFontFamily);
      }

      Swal.fire({
        icon: "success",
        title: "Request sent successfully!",
        text: `Background Color received: ${bgColor}, Font Family: ${fontFamily}`,
      });
    } catch (error) {
      console.error("Error making API request:", error);
      console.error("Error details:", error.response);
    }
  };

  return (
    <div className="color-input">
      <label htmlFor="colorInput">End Point color:</label>
      <input
        type="text"
        value={userQuery}
        onChange={(e) => setUserQuery(e.target.value)}
        id="colorInput"
      />
      <button onClick={sendRequest}>Send Request</button>

      {fontFamily && (
        <p style={{ fontFamily: fontFamily }}>
          Text with Font Family: {fontFamily}
        </p>
      )}
    </div>
  );
};

export default ColorInput;
