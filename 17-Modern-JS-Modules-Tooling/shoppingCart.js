// Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

//2 types of exports
//Named Export
//Default Export

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
};

//exports need to happen in top level code always

//You can export multiple things at same time using named exports

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//Default exports are the reason when we want to export only 1 thing from the module

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart`);
}
