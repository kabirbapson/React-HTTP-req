import React from "react";

export default function W3SchoolTest() {
  window.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("id1").innerHTML = "hari";
    // document.getElementById("demo").innerHTML =
    //  document.getElementById('id1').innerHTML = 85
  });
  var dd = new Date()
  var d = '5'*2
console.log(typeof d);
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h1 id="id1">f</h1>

      <button
        onClick={() =>
        (document.getElementById("id1").innerHTML
          = new Date().getMonth() + 1)
        }
      >
        The time is?
      </button>
    </div>
  );
}
