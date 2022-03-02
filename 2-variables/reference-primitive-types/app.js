// primitive types
const number = 1;
const num2 = number;

// reference types
const obj = { name: "Dante" }; // object stores a pointer to the object
const secondObj = obj; // not copy of obj instead it is copy of the pointer
const thirdObj = { ...obj }; // it is the copy of the object

obj.name = "Luna";

console.log(secondObj);
console.log(thirdObj);
