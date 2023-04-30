import React, { useState } from "react";
import "./App.css";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const updateFName = (e) => setFName(e.target.value);
  const updateLName = (e) => setLName(e.target.value);
  return (
    <div className="App">
      <h1>
        time is {fName} {lName}{" "}
      </h1>
      <input
        value={fName}
        placeholder="Fname"
        onChange={updateFName}
      />
      <input value={lName} placeholder="Lname" onChange={updateLName} />
      <button onClick={() => {}}>Get Time</button>
    </div>
  );
}

export default App;
