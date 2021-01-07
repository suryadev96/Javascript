//VALUES AND VARIABLES
// let country = 'India';
// let continent = 'Asia';
let population = 10;
//console.log(country);
//console.log(continent);
console.log(population);

//DATA TYPES
//let isIsland = false;
let language;
//console.log(typeof isIsland);
console.log(typeof population);
//console.log(typeof country);
console.log(typeof language);

//LET CONST VAR
language = 'telugu';
const country = 'India';
const continent = 'Asia';
const isIsland = false;
//isIsland = true;

//BASIC OPERATORS
console.log(population/2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million above average`);
}

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143