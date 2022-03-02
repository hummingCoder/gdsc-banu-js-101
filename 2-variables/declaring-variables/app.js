// why not var : HOISTING

myName = "zeynep";

function logName() {
  console.log(myName);
}
logName();

var myName;

/////////////////////////////////////

// let variable
let myCat = "Dante";

myCat = "Marvin";
console.log(myCat);
// Marvin

// const constant
const myCat2 = "Dante";

myCat2 = "Marvin";
console.log(myCat2);
// Marvin
