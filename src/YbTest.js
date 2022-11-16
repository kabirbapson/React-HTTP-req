import React from "react";

function YbTest() {
  // U have and array of objects and search through them
  // to find one object get that object and change id and password inside
  const myObj = [
    { id: 2, pass: "2abc" },
    { id: 3, pass: "3abc" },
    { id: 1, pass: "1abc" },
    { id: 4, pass: "4abc" },
  ];
    
    for (let i = 0; i < myObj.length; i++) {
        const element = myObj[i];
        // console.log(element)
    }
    // const lett = myObj.forEach(e => console.log(e.id + 10))
    // console.log(lett)
    // let hd = myObj.map(a => Math.floor(Math.sqrt(a.id) * 10))
    // console.log(hd)
  let cities = [
    { name: "Los Angeles", population: 3792621 },
    { name: "New York", population: 8175133 },
    { name: "Chicago", population: 2695598 },
    { name: "Houston", population: 2099451 },
    { name: "Philadelphia", population: 1526006 },
  ];
    let city = cities.filter(a => a.name == 'Houston');
    // console.log(city);
    const vf = cities.map(city => city.name)
    // console.log('dd',vf)
  //   var boss = ["1", '1', "Avf", "ab", "hhdH", "Usa"];
  //   var bossy = myObj.sort((a, b) => {
  //     return a.id - b.id
  //   });
  //   console.log(bossy);
  // myObj.splice(1, 1, { id: 5, pass: 'har' }, { id: 6, pass: '443' })
  // const myPen = [10, 30, 15]
  // console.log(myPen.lastIndexOf(1))
  // console.log(myObj.indexOf({id:1, pass:'1abc'}))
  //   const myPass = [...myObj, { id: 6, pass: "alaiyahu" }];
  //   var mypass = myObj.find((x) => x.id);
  //   mypass.id = 4;
  //   mypass.pass = "yaro";
  //   console.log(mypass);
  return <div></div>;
}

export default YbTest;
