'use strict';

//querySelector is method which is available on the document object
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//function is also just a value in javascript ; this is also called an event handler
// const x = function () {
//   console.log(23);
// };

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//state variable
let score = 20;
document.querySelector('.number').textContent = secretNumber;

//we are attaching the click event handler on the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //empty value gets converted to 0
  console.log(guess, typeof guess);
  //guess is falsy
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//we are just defining the function and we are not calling it
//Javascript engine calls the function as soon as event happens on the button
