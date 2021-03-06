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

*/

///////////////////////////////////////
// Coding Challenge #1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
    1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join('\n')}\n (Write option number) `
      )
    );
    console.log(answer);

    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      //Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//testing with input data
//call  binds the displayresults function to this keyword and call the function with arguments passed
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //first argument is this keyword
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//we trick javascript to think this declaration to be expression by wrapping paranthesis around
//IIFE - Immediately Invoked function expression
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

//IIFE was previously used in ES5 for creating scope for var variables as u know var variables are not block scoped
//they are only function scoped

//But IIFE can still be used if u want to execute a function only once;



//CLOSURE is not a feature that we explicitly use. we dont create closures manually like arrays, functions
//It happens automatically in certain situations. we should recognize those situations
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

//closure makes a booker function remember all variables that existed at the function's birthplace
//A function always has access to the variable environment of the execution context in which it was created even after that execution context is gone

//closure has priority over the scope chain while looking for variables
//closure can be thouht of as a backpack that a function carries around. This backpack has all the variables that were present
//in the envionrment where the function was created

console.dir(booker);
//[[]] means internal property which cannot be accessed through code


//closure examples

//Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  //the call back function is created in the execution context of boardPassengers function
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

const perGroup = 1000; //closure has priority over scope chain
boardPassengers(180, 3);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  //callback function is created in the parent IIFE function ; so it will have closure over header element
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
