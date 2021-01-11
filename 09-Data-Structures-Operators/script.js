const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
      will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

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
/*

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
