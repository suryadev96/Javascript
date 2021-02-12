//Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(shippingCost);

// addToCart('bread', 5);
// console.log(price, tq);

/*
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js'; //exports a namespace from another module
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

//import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(price);

import add, { cart } from './shoppingCart.js';
import { cart } from './shoppingCart';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
*/

/*
//The purpose of IIFE is to create scope and return the data only once
const ShoppingCart2 = (function () {
  const cart = {};
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to the cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
*/

import { addToCart } from './test.js';

console.log(addToCart);

/*
common js module system in node js

const getName = () => { return "suryadev"}
exports.getName = getName;


index.js file

const user = require('./user');
console.log(`User: ${user.getName()});

//exporting default value
class User {
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email; 
    }

    getUserStats(){
        return `Name: {this.name} Age: ${this.age} Email: ${this.email}`
    }
}
module.exports = User;

index.js
const User = require('./user');
const jim = new User('Jim', 37, 'jim@example.com');


both module.exports and exports point to same object
exports.foo = 'foo';
module.exports = () => { console.log('bar'); };

The foo variable is ignored

https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
