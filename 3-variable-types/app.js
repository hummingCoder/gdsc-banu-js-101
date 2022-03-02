let myAge = 17; //number
console.log("typeof myAge", typeof myAge);

let catGoodbye = "Thank you for the food :)"; //double quote
let catGoodbye2 = "Thank you for the food :)"; // single quote
let catGoodbye3 = `${catGoodbye}`; // string literal

let iAmAlive = true; // boolean
let test = 6 < 3;

let trutyValue = {};
let falsyValue = false || 0 || -0 || 0n || "" || null || undefined || NaN; // falsy

// truthy examples
if (true) {
}
if ({}) {
}
if ([]) {
}
if (42) {
}
if ("0") {
}
if ("false") {
}
if (new Date()) {
}
if (-42) {
}
if (12n) {
}
if (3.14) {
}
if (-3.14) {
}
if (Infinity) {
}
if (-Infinity) {
}

/// İlk nesne doğruysa, mantıksal AND operatörü ikinci işleneni döndürür:

true &&
  "dog"[
    // returns dog

    ""
  ] &&
  "dog";
// returns dog

let myNameArray = ["Dante", "Luna", "Marvin"]; // array
let myNumberArray = [10, 15, 40]; // array

myNameArray[0]; // should return 'Dante'
myNumberArray[2]; // should return 40

let dog = { name: "Spot", breed: "Dalmatian" }; // object
dog.name;

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

person.name; // dot notation
person.name[0];
person.age;
person.bio();
person.introduceSelf();

person["age"]; // bracket notation
