'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   btnsOpenModal[i].addEventListener('click', openModal);
// }
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //relative to current view port

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling old way
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: 'smooth',
  //   });

  //Modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////
//Page Navigation

//we are attaching the same event handler for all the nav__link elements which is unnecessary
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); //relative url
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//1. Add event Listener to common parent element
//2. Determine what element originated the event

//Event Delegation
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); //relative url
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed Component
//tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  //we are not using closest because there are no child elements which we could accidentally click
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    //sibling elements
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

////////////////////////////////////
//Sticky Navigation
/*
const intialCords = section1.getBoundingClientRect();

//scroll event is not good as it triggers so many events on DOM
window.addEventListener('scroll', function (e) {
  console.log(window.scrollY);

  if (window.scrollY > intialCords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

//Sticky Navigation: Intersection Observer API
//API allows us to observe changes to a way that certain target element intersects another element or viewport

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //90px before the threshold is reached
});
headerObserver.observe(header);

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'we use cookies for improved functionality and analytics.';
message.innerHTML =
  'we use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message); //live-element
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message); //older way of doing things
  });

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor); //inline -styles only

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
//Non-standard : won't work
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //absolute path
console.log(logo.getAttribute('src')); //relative path

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//Dont use
logo.className = 'jonas';
*/

/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //relative to current view port

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset,
  //     s1coords.top + window.pageYOffset
  //   );
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset,
  //     top: s1coords.top + window.pageYOffset,
  //     behavior: 'smooth',
  //   });

  //Modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');
  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! you are reading the heading :D');
// };

//addevent listeners ; we can attach multiple event handlers
//whereas onEvent overrides the previous handlers

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//console.log(randomColor(0, 255));

//selects the first nav__link that is features
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  //stop propagation
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  false
);

//the third parameter is useCapture where events are handled in capture phase rather than in bubbling phase
//Event delegation is useful in bubbling phase


const h1 = document.querySelector('h1');

//Going downward: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); //direct children elements
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

//selects closest header to the h1 element
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

//querySelector finds the children no mater how deep in dom tree
//closest finds the parent no matter how far in dom tree

//Going sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//All siblings
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});
*/
