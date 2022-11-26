import React from "react";

export default function W3SchoolTest() {
 
  class Car {
    constructor(made) {
      this.carName = made
    }
  }

  let make = new Car('Ford')
console.log(make['carName'])


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
