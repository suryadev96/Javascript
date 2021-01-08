//Strict mode avoids introducing bugs in the code because
//1. It forbids us to do certain things
//2. It creates visible errors for us without which js fails silently
'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //new variable 
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio'; 
const private = 534; //strict mode reserves these words for the future

*/

function logger() {
    console.log('My name is suryadev');
}

//invoking / running / calling function
logger(); 
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');

