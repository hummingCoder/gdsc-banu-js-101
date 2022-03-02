// Prints 5 to the console
console.log(5);

console.log(5); // Prints 5

/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/

console.log(/*IGNORED!*/ 5); // Still just prints 5

/**
 * For JSDoc
 * @example
 * testJsDocFunc()
 */
const testJsDocFunc = (test) => {
  console.log(5);
};

testJsDocFunc();
