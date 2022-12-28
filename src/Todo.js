import React from "react";

export default function Todo() {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState("");
  const store = JSON.parse(localStorage.getItem("tasks"));
  console.log("hhs", store);
  //   if (store == null) {
  //     return;
  //   }
  return (
    <>
      <>
        <h1>
          List of Tasks to stay <b>POOR</b>
        </h1>
        {tasks.map((task, index) => (
          <h4 key={index}>{task}</h4>
        ))}
              
        <input
          onKeyPress={(event) => {
            if ((event = event.key === "Enter")) {
              setTasks([...tasks, input]);
              setInput("");
              localStorage.setItem("tasks", JSON.stringify([...tasks, input]));
            }
          }}
          onChange={(event) => {
            setInput(event.target.value);
          }}
          value={input}
        />
        <br />
        <br />
        <button onClick={() => localStorage.removeItem("tasks")}>
          Clear local Storage
        </button>
      </>
    </>
  );
}
