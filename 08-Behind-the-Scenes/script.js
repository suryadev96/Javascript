'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; //OLD PRE ES6 VARIABLE

      //CREATING new variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassgning the outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're an millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(output);
    console.log(millenial); //var is not block scoped they are function scoped
    add(2, 3); //does not work as functions are block scoped; but if u turn off strict mode it works!!!
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1996);
//console.log(age);
//printAge();



console.log(me); //Hoisted but intialized to undefined
// console.log(job); //TDZ
// console.log(year); //TDZ

var me = 'surya';
let job = 'teacher';
const year = 1996;

//Functions
console.log(addDecl(2, 3)); //Hoisted perfectly
//console.log(addExpr(2, 3)); //TDZ
//console.log(addArrow(2, 3)); //we are calling essentially an undefined here as var is hoisted and assigned to undefined

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example Pit fall of hoisting
if (!numProducts) deleteShoppingCart(); //numProducts will be undefined and undefined is a falsy value
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; //creates a property on window object
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //undefined in strict mode; in sloppy mode it is equal to global window object
};

calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //global window object
};

calcAgeArrow(1996);

const surya = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
surya.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = surya.calcAge; //method borrowing
matilda.calcAge(); //this keyword always points to the object calling the method

const f = surya.calcAge;
f(); //here in this case this keyword will be undefined ; its a regular function call. not attached to any object


var firstName = 'matilda'; //this creates a property on global window object

const surya = {
  firstName: 'suryadev',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillenial(); //regular function call; this keyword is undefined

    //solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial(); //regular function call; this keyword is undefined
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
surya.greet(); //Hey undefined as arrow functions do not get this keyword
surya.calcAge();
//Hey matilda as this in arrow function points to parent score which is window object and since firstName is property on window object

//Arrow function uses this keyword of its parent scope
//regular function don't use this keyword of the parent scope

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

//arguments keywords do not exist on arrow functions

*/

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'surya',
  age: 30,
};

const friend = me;
friend.age = 27; //u can still change the value as the reference value to heap is not changed

console.log('Friend:', friend);
console.log('Me:', me);

//PRIMITIVES : (Number, String, Boolean, Undefined, Null, Symbol, Bigint)
//OBJECTS : (Object literal, Arrays, Functions)

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//marriedJessica = {};

//copying objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); //it only creates a shallow copy; not a deep clone
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

//both has a family object which points at the same object in the memory as Object.assign() is a shallow copy
