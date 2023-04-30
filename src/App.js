import React, { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState({ fname: "1", lname: "2" });

  const updateFName = (e) => {
    const { name, value } = e.target;

    setNames(prevState => {
      if (name == 'fname') {
        return {
          fname: value,
          lname:prevState.lname
        }
      } else if (name == 'lname') {
        return {
          lname: value,
          fname:prevState.fname
        }
      }
      
    });
  };

  return (
    <div className="App">
      <h1>
        time is {names.fname} {names.lname}{" "}
      </h1>
      <input
        value={names.fname}
        name="fname"
        placeholder="Fname"
        onChange={updateFName}
      />
      <input
        value={names.lname}
        name="lname"
        placeholder="Lname"
        onChange={updateFName}
      />
      <button onClick={() => console.log(names)}>Get Time</button>
    </div>
  );
}

export default App;
