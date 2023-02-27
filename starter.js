const meal = ["soup", "steak", "ice cream"];
let [, eds] = meal;
console.log(eds);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set);

function count(undefined) {
  console.log(undefined.length);
}

count(10, 9, 8, 7, 6);
