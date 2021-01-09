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


//Function declarations can be called before the declaration
//This happens because of process called hoisting
const age1 = calcAge1(1996);
console.log(age1);

//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

//Function expression;
//Anonymous function
// function is a value and not a type
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = calcAge2(1996);

console.log(age1, age2);


//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear; //dont need to use return keyword
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'suryadev'));
console.log(yearsUntilRetirement(1988, 'Esha'));

//Arrow functions do not get a so called this keyword


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,3));


const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    }else {
        return -1; //9999;
    }
    return retirement;
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1996, 'suryadev'));
console.log(yearsUntilRetirement(1970, 'Mike'));

const calcAverage = (a,b,c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//Test1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No Team wins...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1996, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

//we have mutated the array which was defined using const
//Only primitive values are immutable But an Array is not a primitive value

//This is illegal
//friends = ['Bob', 'Alice'];

const firstName = 'suryadev';
const surya = [firstName, 'reddy', 2037 - 1996, 'teacher', friends];
console.log(surya);

//Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1996, 1984, 2008, 2020];

console.log(calcAge(years)); //NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

const ages = [calcAge(years[0]), calcAge(years[1]) , calcAge(years[years.length-1])];
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //-1

//uses strict equality check
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter');
}

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0] , bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


const suryaArray = [
    'suryadev',
    'reddy',
    2037 - 1996,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

//5 Properties
//Object Literal syntax
const surya = {
    firstName : 'suryadev',
    lastName : 'reddy',
    age : 2037 - 1996,
    job : 'teacher',
    friends :  ['Micheal', 'Peter', 'Steven']
};

console.log(surya);

console.log(surya.lastName);
console.log(surya['lastName']);

const nameKey = 'Name';
console.log(surya['first' + nameKey]);
console.log(surya['last' + nameKey]);

const interestedIn = prompt('What do you want to know about surya? Choose between firstName, lastName, age, job and friends');
console.log(surya.interestedIn); //undefined as interestedIn is undefined property on object

if (surya[interestedIn]) { 
    console.log(surya[interestedIn]);
} else { //undefined is falsy value
    console.log('Wrong request!');
}

//Adding new properties to object
surya.location = 'Bangalore';
surya['github'] = 'suryadev96';
console.log(surya);

console.log(`${surya.firstName} has ${surya.friends.length} friends, and his best friend is called ${surya.friends[0]}`);



const surya = {
    firstName : 'suryadev',
    lastName : 'reddy',
    birthYear : 1996,
    job : 'teacher',
    friends :  ['Micheal', 'Peter', 'Steven'],
    hasDriverLicense : true,

    //function expression
    // calcAge : function() {
    //     //console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge : function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary : function() {
        return `${this.firstName} is a ${this.calcAge()}- year old ${this.job} and  he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }
};

//this is basically the object on which the method is called
//in other words object calling the method

console.log(surya.calcAge(1996));
//console.log(surya['calcAge'](1996));

console.log(surya.age);
console.log(surya.age);
console.log(surya.age);

console.log(surya.getSummary());

//arrays are also actually objects
//friends.push('jonas'); //push is a method defined on the arrays object



const mark = {
    fullName : 'Mark miller',
    mass : 78,
    height : 1.69,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName : 'John smith',
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}

console.log('Lifting weights repetition 1 🏋️‍♀️');
console.log('Lifting weights repetition 2 🏋️‍♀️');
console.log('Lifting weights repetition 3 🏋️‍♀️');
console.log('Lifting weights repetition 4 🏋️‍♀️');
console.log('Lifting weights repetition 5 🏋️‍♀️');

for (let rep=1; rep <= 10 ; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


const suryaArray = [
    'suryadev',
    'reddy',
    2037 - 1996,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i=0; i < suryaArray.length ; i++) {
    console.log(suryaArray[i], typeof suryaArray[i]);
    //Filling types array
    //types[i] = typeof suryaArray[i];
    types.push(typeof suryaArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('---- ONLY STRINGS ----');
for (let i=0; i < suryaArray.length ; i++) {
    if (typeof suryaArray[i] !== 'string') continue;
    console.log(suryaArray[i], typeof suryaArray[i]);
}

console.log('---BREAK WITH NUMBERS---');
for (let i=0; i < suryaArray.length ; i++) {
    if (typeof suryaArray[i] === 'number') break;
    console.log(suryaArray[i], typeof suryaArray[i]);
}

const suryaArray = [
    'suryadev',
    'reddy',
    2037 - 1996,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
];

for (let i = suryaArray.length-1; i>=0;i--) {
    console.log(suryaArray[i]);
}

for (let excercise = 1; excercise < 4 ; excercise++) {
    console.log(`-------Starting exercise ${excercise} -----`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep} 🏆`);
    }
}


for (let rep=1; rep <= 10 ; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10 ) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

//while loop does not depend on any counter variable 
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

//if we know how many times u have to iterate => then go for-loop
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i=0;i<bills.length;i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips , totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}

calcAverage([2,3,6]);


