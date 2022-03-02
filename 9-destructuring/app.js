// for arrays

const [a, b] = ["Luna", "Dante"];
console.log("🚀 ~ file: app.js ~ line 2 ~ a", a);
console.log("🚀 ~ file: app.js ~ line 2 ~ b", b);

const numbers = [1, 2, 3, 4, 5];
[num1, num2] = numbers;
// [num1, , num3] = numbers;

console.log(num1, num2);

// for objects

const { name } = { name: "Dante", age: 1 };
console.log("🚀 ~ file: app.js ~ line 8 ~ name", name);
console.log("🚀 ~ file: app.js ~ line 8 ~ age", age);
