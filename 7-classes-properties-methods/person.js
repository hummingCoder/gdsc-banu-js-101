//ES6 implementation
class Human {
  constructor() {
    this.gender = "male";
  }
  getGender() {
    return this.gender;
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Marvin";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person(); //usage

person.printMyName(); // Marvin
console.log("🚀 ~ file: person.js ~ line 21 ~ person.gender", person.getGender());

//PROPERTIES

//ES6
constructor(){
  this.myProp = 'value';
}

//ES7
myProp = 'value'

//METHODS

//ES6
myMethod(){

}

//ES7
myMethod =()=>{}

ES7 implementation

class Human {
    gender = 'male';

  getGender=() =>{
    return this.gender;
  }
}

class Person extends MidAged {
  name = "Marvin";
  gender='female'

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person(); //usage
