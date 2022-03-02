// SPREAD
const oldArray = [4, 3, 5, 6];
const newArray = [...oldArray, 1, 2];
console.log("🚀 ~ file: app.js ~ line 4 ~ newArray", newArray);

const oldObject = { color: "red", length: 5 };
const newObject = { ...oldObject, newProp: 6 };

//REST
const sortArgs = (...args) => {
  return args.sort;
};

const multiply = (...args) => args.reduce((a, b) => a * b);

// Example
multiply(1, 2, 3, 4);
