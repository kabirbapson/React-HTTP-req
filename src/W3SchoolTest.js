import React from "react";

export default function W3SchoolTest() {
  var x = 6;
  if (x == 7) {
    console.log("first");
  }
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h1 id="id1">f</h1>
      <button
        onClick={() =>
          (document.getElementById("id1").innerHTML = new Date().getMonth() + 1)
        }
      >
        The timeis?
      </button>
    </div>
  );
}
