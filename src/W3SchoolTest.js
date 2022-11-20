import React from "react";

export default function W3SchoolTest() {
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("id1").innerHTML = "hari";
    function toCelsius(fahrenheit) {
      return (5 / 9) * (fahrenheit - 32);
    }
    document.getElementById("demo").innerHTML = toCelsius(77);
  });
  var a = 10 % 4;
  // console.log(a)
  let x = 100 + 50 * 3;
  x = 100 + 50 - 3;
  // console.log(x)
  var answer3 = 'He is called "Johnny"';
  // console.log(answer3)
  var car = "";
  // console.log(typeof car)
  function abc(a, b) {
    x = a * b;
    return x;
  }
  console.log(abc(4, 2));
  return (
    <div>
      <h1 id="id1">f</h1>
      <h1 id="demo">f</h1>
    </div>
  );
}
