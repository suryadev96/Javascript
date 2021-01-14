////////////////////////////////////////////////

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //shallow copy
console.log([...arr]);

//SPLICE - Mutates original array
//console.log(arr.splice(2));
arr.splice(-1); //deletes last element
console.log(arr);
arr.splice(1, 2); //deletes 2 elements from index 1; 2 argument is no of elements u want to delete
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //mutates the original array
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2); //don't mutate
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));


//positive - deposits
//negative - withdrawals
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//forEach is higher order function which needs a callback to tell what needs to be done
//in each iteration it will call this callback function and passes the current element as argument
console.log('------ FOREACH ------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

//continue and break do not work in foreach loops

// const f = function (a, b, c) {
//   console.log(a, b, c);
// };
// f(3);



//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
