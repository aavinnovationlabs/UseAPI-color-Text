// ApiRequest.js
import React, { useState } from "react";
import axios from "axios";

const ApiRequest = () => {
  const [userQuery, setUserQuery] = useState("");
  const [response, setResponse] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState(null); // New state variable

  const sendRequest = async () => {
    try {
      const apiUrl = "/query"; // Proxy will forward this to 'https://jjdynamicuipoc-production.up.railway.app/query'
      const requestBody = {
        user_query: userQuery,
        history: [],
      };

      const result = await axios.post(apiUrl, requestBody);
      setResponse(result.data);
      console.log(result.data);

      // Extract background_color and store in a variable
      const bgColor = result.data.background_color;
      setBackgroundColor(bgColor);
      console.log("Background Color:", bgColor);

      // Show an alert on successful sending
      alert("Request sent successfully!");
    } catch (error) {
      console.error("Error making API request:", error);
      console.error("Error details:", error.response); // Log the full error object
    }
  };

  return (
    <div>
      <label>
        User Query:
        <input
          type="text"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
      </label>
      <button onClick={sendRequest}>Send Request</button>

      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {backgroundColor && (
        <div>
          <h2>Background Color:</h2>
          <p>{backgroundColor}</p>
        </div>
      )}
    </div>
  );
};

export default ApiRequest;

//============================================>>>>getting data
// // ApiRequest.js
// import React, { useState } from "react";
// import axios from "axios";

// const ApiRequest = () => {
//   const [userQuery, setUserQuery] = useState("");
//   const [response, setResponse] = useState(null);

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

//       // Show an alert on successful sending
//       alert("Request sent successfully!");
//     } catch (error) {
//       console.error("Error making API request:", error);
//       console.error("Error details:", error.response); // Log the full error object
//     }
//   };

//   return (
//     <div>
//       <label>
//         User Query:
//         <input
//           type="text"
//           value={userQuery}
//           onChange={(e) => setUserQuery(e.target.value)}
//         />
//       </label>
//       <button onClick={sendRequest}>Send Request</button>

//       {response && (
//         <div>
//           <h2>Response:</h2>
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApiRequest;
