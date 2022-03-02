// syntax

function myFunc() {} // function declaration

const myFunc2 = () => {}; // arrow function => no more issues with this keyword

function printName(name) {
  console.log(name);
}
printName("Dante");

const printName2 = (name) => {
  console.log(name);
};
printName("Dante");

const multiply = (a, b) => a * b;
