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

const now = 2037;
const ageSuryaDev = now - 1996;
const ageBhoomi = now - 2018;

console.log(now - 1996 > now - 2018);

let x,y;
x = y = 25-10-5;
console.log(x,y);

const averageAge = (ageSuryaDev + ageBhoomi) / 2;
console.log(ageSuryaDev , ageBhoomi, averageAge);


//CODING CHALLENGE

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const firstName = 'SuryaDev';
const job = 'Teacher';
const birthYear = 1996;
const year = 2037;

const surya = "I'm " + firstName + ', a ' +  (year - birthYear) + ' years old ' + job + '!';
console.log(surya);

//Template literals; backticks used to indicate it is a template string
const suryaNew = `I'm a ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(suryaNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with
multiple
lines`);



const age = 15;
//Control structure
if (age >= 18) {
    console.log('Bhoomi can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Bhoomi is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
}


//TYPE CONVERSION
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('SuryaDev'));
console.log(typeof NaN);

//value is printed white suggests string
console.log(String(23), 23);

//TYPE COERCION
console.log('I am' + 23 + ' years old'); //number is type coerced to string
console.log('I am' + String(23) + ' years old');
console.log('23' - '10' - 3); //outputs 10 ; string is type coerced to numbers
console.log('23' * '2'); //outputs 46;
console.log('23' > '18'); //strings are type coerced to numbers

let n = '1' + 1; //11
n = n - 1; //11 - 1
console.log(n); //10

console.log(2 + 3 + 4 + '5'); //95
console.log('10' - '4' - '3' - 2 + '5'); //15

*/

//Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean
//In Javascript, there are only 5 falsy values 
//5 Falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('SuryaDev'));
console.log(Boolean({}));
console.log(Boolean(''));

//Type coercion to Booleans happens when using logical operators , and in a logical context in if condition
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;

if (height) {
    console.log('YAY! Height is defined!');
} else {
    console.log('Height is UNDEFINED');
}