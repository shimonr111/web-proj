import React, { useState } from "react";
import axios from "axios";

// Defining our functional component
const AddData = () => {
  const [newValue, setNewValue] = useState(""); // State to store input value

  const handleChange = (event) => {
    setNewValue(event.target.value); // Update input value as user types
  };

  const handleSubmit = () => {
    // Send the input value to the server
    axios
      .post("http://localhost:8080/add_user", { newValue })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          value={newValue}
          onChange={handleChange}
          placeholder="Enter data..."
        />
        <button onClick={handleSubmit}>Add User</button>
      </header>
    </div>
  );
};

export default AddData;
