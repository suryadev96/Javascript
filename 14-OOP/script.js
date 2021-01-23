'use strict';

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this; as we would be creating so many copies of this function when we instantiate;
  //we would have attached to each and every single object instantiated using this constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const surya = new Person('suryadev', 1996);
console.log(surya);

//All the below steps happens because we are calling the function with new keyword
//1. New empty object {} is created
//2. function is called, this keyword is set to new empty object {}
//3. {} is linked to Prototype
//4. function automatically return {}; need not be empty

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

//We did created the objects from the constructor function
//Constructor function are simulations to the classes

console.log(surya instanceof Person);
//console.log(jay instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this); //constructor function
};

//surya.hey(); // it is a static method and cannot be called on objects

//Prototypes
console.log(Person.prototype);

//First each and every function including constructor functions in javascript actually has a property called prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

surya.calcAge(); //this keyword is set to the object calling this method
matilda.calcAge();

console.log(surya.__proto__);
console.log(surya.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(surya));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(surya, matilda);
console.log(surya.species, matilda.species);

console.log(surya.hasOwnProperty('firstName'));
console.log(surya.hasOwnProperty('species'));

console.log(surya.__proto__);
console.log(surya.__proto__.__proto__);
console.log(surya.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 4, 6, 8, 9, 6, 9, 8]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1); //HTMLHeadingElement -> HTMLElement -> Element -> Node -> EventTarget -> Object
console.dir(x => x + 1); //function Prototype

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

//ES6 Classes are just syntactical sugar over prototypal inheritance
//Class Expression
//const personCl = class {};

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists
  //when u need a validation when setting a property on a object
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const suryan = new PersonCl('Surya dev', 1996);
console.log(suryan);
suryan.calcAge();
console.log(suryan.age);

console.log(suryan.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
suryan.greet();

PersonCl.hey();

//1. Classes are not hoisted ; function declarations can be used before declaring them
//2. Class are first-class citizens ; because classes are just special kind of functions behind the scenes
//3. Classes are executed in strict mode

const account = {
  owner: 'suryadev',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

//Static methods; these are not attached to prototype but rather on constructor itself
console.log(Array.from(document.querySelectorAll('h1')));

//console.log([1, 2, 3].from());

console.log(Number.parseFloat(12));

//Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1997);
sarah.calcAge();
