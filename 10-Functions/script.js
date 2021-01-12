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

*/

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
