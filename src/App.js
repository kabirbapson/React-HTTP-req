import React, { useState } from "react";
import "./App.css";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  return (
    <div className="App">
      <h1>
        time is {fName} {lName}{" "}
      </h1>
      <input
        value={fName}
        placeholder="Fname"
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        value={lName}
        placeholder="Lname"
        onChange={(e) => setLName(e.target.value)}
      />
      <button onClick={() => {}}>Get Time</button>
    </div>
  );
}

export default App;
