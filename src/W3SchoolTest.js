import React from "react";

export default function W3SchoolTest() {
  window.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("id1").innerHTML = "hari";
    // document.getElementById("demo").innerHTML =
    //  document.getElementById('id1').innerHTML = 85
  });

  var date = new Date().getHours()
  console.log(date < 18);
  if (date < 12) {
    console.log('object morning')
  }else {console.log('aft')}

  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h1 id="id1">f</h1>

      <button
        onClick={() =>
          (document.getElementById("id1").innerHTML = new Date().getMonth() + 1)
        }
      >
        The time is?
      </button>
    </div>
  );
}
