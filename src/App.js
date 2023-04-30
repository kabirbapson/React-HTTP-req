import React, { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState({ fname: "1", lname: "2" });

  const updateFName = (e) => {
    console.log(names);

    const firstname = e.target.value;
    setNames({
      ...names,
      fname: firstname,
    });
  };
  const updateLName = (e) => {
    console.log(names);
    const lastName = e.target.value;
    setNames({
      ...names,
      lName: lastName,
    });
  };
  return (
    <div className="App">
      <h1>
        time is {names.fname} {names.lname}{" "}
      </h1>
      <input value={names.fname} placeholder="Fname" onChange={updateFName} />
      <input value={names.lname} placeholder="Lname" onChange={updateLName} />
      <button onClick={() => console.log(names)}>Get Time</button>
    </div>
  );
}

export default App;
