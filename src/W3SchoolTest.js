import React from "react";

export default function W3SchoolTest() {
  const onCLick = () => {
    document.getElementById("clicks").innerHTML = "Pinged";
  };
  const onCLick1 = () => {
    document.getElementById("demo").innerHTML = Date();
  };
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("id1").innerHTML = "hari";

    // document.getElementById("demo").innerHTML =
  });
  console.log("hello \nboss");
  return (
    <div>
      <h1 id="id1">f</h1>
      <h1 id="demo">f</h1>
      <h2 id="clicks">f</h2>
      <button onClick={onCLick}>Hit Me</button>

      <button onClick={onCLick1}>Hit Me</button>
      <button
        onClick={() =>
          (document.getElementById("demo").innerHTML = Date().slice(2, 10))
        }
      >
        The time is?
      </button>
    </div>
  );
}
