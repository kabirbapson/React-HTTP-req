var arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
console.log(arr);
function handleClicks() {
  switch (arr) {
    case arr[0]:
      console.log(arr[0]);
      break;
    default:
      console.log(arr);
      break;
  }
}
handleClicks();
