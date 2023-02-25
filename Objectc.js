const car = {
  engine: true,
  steering: true,
  speed: "slow",
};8
const sportCar = Object.create(car);
sportCar.speed = "fast";
for (var pop in sportCar) {
  console.log(pop);
}


for (var prop of Object.keys(sportCar)) {
    console.log(prop, sportCar[prop]);
}