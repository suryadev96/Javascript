'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  console.log('Button clicked!');
  modal.classList.remove('hidden'); //dont use '.hidden'
  overlay.classList.remove('hidden');

  //other way but assume hidden class had 10 properties ; then u need to set those 10 properties
  //that's why adding and removing classes comes handy
  //modal.style.display = 'block';
};

//Using classes like this is handy way of manipulating web pages
//In practive adding and removing classes, is main way of changing styles on webpages
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Looping the NodeList
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal); //not closeModal()

overlay.addEventListener('click', closeModal);
