// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, "chicken", false];

// MAP
const numbers = [1, 2, 3, 4];

const tripleNumberArray = numbers.map((num) => {
  return num * 3;
});

// PUSH
// Adding a single element:
const cart = ["apple", "orange"];
cart.push("pear");

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);

// POP
const ingredients = ["eggs", "flour", "chocolate"];

const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']
