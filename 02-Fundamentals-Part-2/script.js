//Strict mode avoids introducing bugs in the code because
//1. It forbids us to do certain things
//2. It creates visible errors for us without which js fails silently
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //new variable 
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio'; 
const private = 534; //strict mode reserves these words for the future