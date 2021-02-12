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
