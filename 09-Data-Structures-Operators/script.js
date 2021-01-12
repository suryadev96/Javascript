const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//COMPUTING PROPERTY NAMES
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //PRE ES6
  //openingHours: openingHours,
  openingHours,

  //new way of writing function methods

  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////MAPS
/*
Difference between maps and objects are in objects type of key is always string; whereas in maps it can be anything
*/
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

//chaining
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 12)
  .set(true, 'We are Open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get(arr)); //2 arrays are not the same object
////////SETS

/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotta',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('suryadev'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risott');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set('suryadevreddy').size);
//elements are unique and order of elements are irrelevant

///////////////////////////////////////
// Coding Challenge #2
/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//BONUS
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//LOOPOING OBJECTS: KEYS, VALUES AND ENTRIES

//Property names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days : `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property values
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}


//OPTIONAL CHAINING
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//this becomes messy with deeply nested objects with lot of optional properties

//with optional chain
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example1:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day},we open at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


////LOOPING ARRAYS: FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

console.log(menu.entries());
console.log(...menu.entries());
*/

///////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
//rest operator in function argument packing
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');

*/
/*

////NULLISH COALESCING OPERATOR

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; //wont work if restaurant.numGuests = 0
console.log(guests);

//Nullish coalescing operator works on the concept of nullish values instead of falsy values
//Nullish : null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

////////////////////////////////////
// Short circuiting (&& and ||)
//use any datatype, return any datatype , short-circuting
console.log('------OR------');
console.log(3 || 'Surya'); //3
console.log('' || 'surya'); //surya
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 2 || null); //'Hello' because first truthy value
//OR operator => if first value is truthy vaue => then it returns first value

//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10; //wont work if restaurant.numGuests = 0
console.log(guests2);

console.log('------AND-----');
console.log(0 && 'surya'); //returns the first falsy value
console.log(7 && 'surya'); //returns the last truthy value if all values are

console.log('Hello' && 23 && null && 'surya');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//OR operator is used to set default values
//AND operator is used to evaluate second expression if first one exists

//SPREAD, because on RIGHT SIDE

//1. Destructuring
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT SIDE
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//2. Functions
//rest operator is taking all the numbers and packing in the array; compressing
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //spreading elements
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//values seperated by commas => spread
//variables seperated by commas => Rest


//////SPREAD OPERATORS
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Tterables : strings, arrays, maps, sets NOT objects
const str = 'surya';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//spread operators can be used only when creating an array or passing arguments into function

//objects
const newRestaurant = { ...restaurant, founder: 'suryadev', foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Kadapa',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Kadapa',
  starterIndex: 2,
});

//DESTRUCTURING OBJECTS
//Property names should exactly match while destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//What if we want variable names different from property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//DEFAULT VALUES
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

//nested objects destructuring
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//ARRAY DESTRUCTURING IS AN ES6 FEATURE.
//UNPACKING VALUES FROM AN ARRAY OR AN OBJECT INTO SEPERATE VARIABLES

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructuring assignment
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; //swapping 2 values
console.log(main, secondary);

console.log(restaurant.order(2, 0));

//Return 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1

*/
