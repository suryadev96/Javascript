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

*/

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
