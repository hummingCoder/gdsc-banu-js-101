// Arithmetic operators
console.log(6 + 9); // addition
console.log(20 - 15); // subtraction
console.log(3 * 7); // multiplication
console.log(10 / 5); // division
console.log(8 % 2); // modulus (remainder)
console.log(2 ** 3); // exponentiation

// operator presedence

50 + 10 / 8 + 2; // 53.25

(50 + 10) / (8 + 2); // 6

// assignment operators
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4

// multiplication assignment
let a = 3; // x contains the value 3
let b = 4; // y contains the value 4
a *= b; // x now contains the value 12

// Comparison operators
if (3 == "3") {
  console.log("equal");
}
if (3 === "3") {
  console.log("strict equal");
} else {
  console.log("not equal");
}

// ternary operators
var status = age >= 18 ? "adult" : "minor";
