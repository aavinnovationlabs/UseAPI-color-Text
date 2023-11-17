// ColorInput.js
import React, { useState } from "react";
import "./ColorInput.css";
import axios from "axios";

const ColorInput = ({ onSelectColor }) => {
  const [userQuery, setUserQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null); // New state variable

  const sendRequest = async () => {
    try {
      const apiUrl = "/query";
      const requestBody = {
        user_query: userQuery,
        history: [],
      };

      const result = await axios.post(apiUrl, requestBody);
      setResponse(result.data);
      console.log(result.data);

      const bgColor = result.data.background_color;
      setBackgroundColor(bgColor);
      console.log("Background Color:", bgColor);
      onSelectColor(bgColor);

      alert("Request sent successfully!");
      console.log(bgColor);
    } catch (error) {
      console.error("Error making API request:", error);
      console.error("Error details:", error.response); // Log the full error object
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
    </div>
  );
};

export default ColorInput;
//==========================================================>>>>>>>

// // ColorInput.js
// import React, { useState } from "react";
// import "./ColorInput.css";
// import axios from "axios";

// const ColorInput = ({ onSelectColor }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [userQuery, setUserQuery] = useState("");
//   const [response, setResponse] = useState(null);
//   const [backgroundColor, setBackgroundColor] = useState(null); // New state variable

//   const sendRequest = async () => {
//     try {
//       const apiUrl = "/query"; // Proxy will forward this to 'https://jjdynamicuipoc-production.up.railway.app/query'
//       const requestBody = {
//         user_query: userQuery,
//         history: [],
//       };

//       const result = await axios.post(apiUrl, requestBody);
//       setResponse(result.data);
//       console.log(result.data);

//       // Extract background_color and store in a variable
//       const bgColor = result.data.background_color;
//       setBackgroundColor(bgColor);
//       console.log("Background Color:", bgColor);
//       onSelectColor(bgColor);
//       // Show an alert on successful sending
//       alert("Request sent successfully!");
//     } catch (error) {
//       console.error("Error making API request:", error);
//       console.error("Error details:", error.response); // Log the full error object
//     }
//   };

//   //   const handleInputChange = (e) => {
//   //     setInputValue(e.target.value);
//   //   };

//   //   const handleButtonClick = () => {
//   //     // Call onSelectColor with the input value when the button is clicked

//   //   };

//   return (
//     <div className="color-input">
//       <label htmlFor="colorInput">End Point color:</label>

//       <input
//         type="text"
//         value={userQuery}
//         onChange={(e) => setUserQuery(e.target.value)}
//         id="colorInput"
//       />
//       <button onClick={sendRequest}>Send Request</button>
//     </div>
//   );
// };

// export default ColorInput;

//==============================================>>>>Button working
// // ColorInput.js
// import React, { useState } from "react";
// import "./ColorInput.css";

// const ColorInput = ({ onSelectColor }) => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleButtonClick = () => {
//     // Call onSelectColor with the input value when the button is clicked
//     onSelectColor(inputValue);
//   };

//   return (
//     <div className="color-input">
//       <label htmlFor="colorInput">End Point color:</label>
//       <input type="text" id="colorInput" onChange={handleInputChange} />
//       <button onClick={handleButtonClick}>Change Color</button>
//     </div>
//   );
// };

// export default ColorInput;

//===========================>>>Okay
// import React from "react";
// import "./ColorInput.css";

// const ColorInput = ({ onSelectColor }) => {
//   const handleInputChange = (e) => {
//     onSelectColor(e.target.value);
//   };

//   return (
//     <div className="color-input">
//       <label htmlFor="colorInput">End Point color:</label>
//       <input type="text" id="colorInput" onChange={handleInputChange} />
//     </div>
//   );
// };

// export default ColorInput;
