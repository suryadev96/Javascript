'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


const flight = 'LH234';
const surya = {
  name: 'suryadev reddy',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, surya);
console.log(flight); //pass by value where value is primitive value
console.log(surya); //pass by value where value is reference to the object in heap

//is same as doing
const flightNum = flight;
const passenger = surya;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(surya);
checkIn(flight, surya);

//javascript does not have passing by reference
//even though it looks like passing by reference
//we are passing the value wherein value itself is reference to the actual object stored in heap

//where in C/C++ you can pass reference to any value instead of value itself

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
//fn is a callback function
//abstraction by delegating the transformation to lower order functions
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformed string : ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

//JS uses callbacks all the times
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);



const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Suryadev');

greet('Hello')('suryadev');

//The functions returning functions is extremely useful in functional programming paradigm

//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('suryadev');
*/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'suryadev');
lufthansa.book(635, 'John smith');
console.log(lufthansa);

const eurowings = {
  name: 'Eurrowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
//book(23, 'Sarah Williams'); //regular function call; this keyword is undefined

//we did not call book method;
//call method inturn call book method with this keyword pointing to eurowings
book.call(eurowings, 23, 'Sarah Williams'); //if u do like here; this keyword in book function points to eurowings
console.log(eurowings);

//Explicitly setting this keyword
book.call(lufthansa, 238, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //spread the arguments

//Bind method
//It does not immediately call the function but returns the function with this keyword being bound
const bookEw = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEw(23, 'Steven Williams');

//specifyning a few parameters before hand is essentially a partial application
const bookEW23 = book.bind(eurowings, 23); //first argumetn is set here
bookEW23('Suryadev');
bookEW23('Martha cooper');

//With event listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //u wont use call method as it calls the function immediately
//it gives a Nan because now this keyword points to button element => this.planes is a NaN

//Partial application

const addTax = (rate, value) => {
  value + value * rate;
};
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVat = value => value + value * 0.23

console.log(addVAT(100));
console.log(addVAT(23));

//using binds really gives us a new function whereas setting default arguments do not give that facility

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
