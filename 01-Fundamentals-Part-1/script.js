/*
let js = 'amazing';
console.log(40+8+22-10);

console.log("SuryaDev");
console.log(23);

let firstName = "SuryaDev";
console.log(firstName);

//$ and _ are only special chars allowed in variable naming
let person = 'SuryaDev';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'Teacher';

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'suryadev');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); //object which is a bug in javascript


let age = 30;
age = 31; //mutated a variable

const birthYear = 1991;
//birthYear = 1990;

//const job;

//let is block scoped
//var is function scoped

var job = 'programmer';
job = 'teacher';

//this will not create variable in current local scope
//rather it creates a property on the global object
lastName = 'gouru';
console.log(lastName);

*/

//MATH OPERATORS
const now = 2037;
const ageSuryaDev = now - 1996;
const ageBhoomi = now - 2018;
console.log(ageSuryaDev, ageBhoomi);

console.log(ageSuryaDev*2, ageSuryaDev/10, ageSuryaDev ** 3);

const firstName = 'SuryaDev';
const lastName = 'Reddy';
console.log(firstName + ' ' + lastName);

// ASSIGNMENT OPERATORS
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

//COMPARISON OPERATORS
console.log(ageSuryaDev > ageBhoomi); // > < >= <=
console.log(ageBhoomi >= 18);

//console actually has access to all the variables that is running in the current browser tab

const isFullAge = ageBhoomi >= 18;

console.log(now - 1996 > now - 2018);
