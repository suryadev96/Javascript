////////////////////////////////////////////////

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
