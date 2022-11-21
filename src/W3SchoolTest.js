import React from "react";

export default function W3SchoolTest() {
  window.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("id1").innerHTML = "hari";
    // document.getElementById("demo").innerHTML =
    //  document.getElementById('id1').innerHTML = 85
  });
var x = 'sdd'
  var   fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach(fruit => console.log(fruit))
console.log(fruits.join(' * '));
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h1 id="id1">f</h1>
      {/* {document.write('ddd')} */}
      {/* <h1 id="demo">ff</h1> */}
      {/* <h2 id="clicks">f</h2> */}
      {/* <button onClick={onCLick}>Hit Me</button> */}

      {/* <button onClick={onCLick1}>Hit Me</button> */}
      <button
        onClick={() => window.alert("dddj jjd")}
        // onClick={() =>
        //   (document.getElementById("demo").innerHTML = Date().slice(2, 10))
        // }
      >
        The time is?
      </button>
    </div>
  );
}
