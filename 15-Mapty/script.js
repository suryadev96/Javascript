/*
////////////////////
//// User Stories
1.As a user, i want to log my running workouts with location, distance, time, pace and steps/minute so i can keep a log of all my running
2.As a user, i want to log my cycling workouts with location, distance, time, speed and elevation so i can keep a log of all my cycling
3.As a user, i want to see all my workouts at a glance, so i can easily track my progress over time
4.As a user, i want to also see my workouts on a map, so i can easily check where i workout the most
5.As a user, i want to see all my workouts when i leave the app and come back later, so that i can keep using the app over time

//////////////////
1.user story features
a. Map where user clicks to add new workout (best way to get location coords)
b. Geolocation to display map at current location (more user friendly)
c. Form to input distance, time, pace, steps/minute

3. Display all workouts in a list

4. Display all workouts in a map

5. Store workout data in the browser using local storage API. On page load, read the saved data from local storage and display
*/
'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const containerWorkouts = document.querySelector('.workouts');
const form = document.querySelector('.form');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13); //second parameter is zoom level

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function (mapEvent) {
        console.log(mapEvent);

        const { lat, lng } = mapEvent.latlng;

        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    },
    function () {
      alert('Could not get your position!');
    }
  );
