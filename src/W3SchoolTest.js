import React from "react";

export default function W3SchoolTest() {
  class Car {
    constructor(brand) {
      this.carName = brand;
    }
    present(x) {
      return "i have a  " + this.carName + x.make
    }
  }
  class Made extends Car {
    constructor(brand, mode) {
      super(brand);
      this.mode = mode;
    }
    show() {
      return this.carName + this.mode
    }
    make() {
      return 'hwy'
    }
  }
  const myCar = new Made('Ford', 'Mustang')
  console.log(myCar.make())
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
