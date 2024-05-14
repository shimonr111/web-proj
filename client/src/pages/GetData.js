import React from "react";
import axios from "axios";

// Defining our functional component
const GetData = () => {
  const getUsersData = () => {
    axios.get("http://localhost:8080/get_users").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUsersData}>Get Data Of Users</button>
      </header>
    </div>
  );
};

export default GetData;
