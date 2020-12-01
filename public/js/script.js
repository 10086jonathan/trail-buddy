// // constants
// const API_KEY = '200981438-4a2b6c0458afa38ee273068b3b6ba2d0';
// const BASE_URL = 'https://www.hikingproject.com/data/get-trails';

// // variables
// let trailData;
// let latText;
// let longText;

// // cached element reference
// const $cardsEl = $('#cards');



// // event listeners
// $cardsEl.on('click', 'article', handleClick);
M.AutoInit();

$(document).ready(function() {
    $('select').formSelect();
  });
        



// // functions


// init();

// function init() {
//    getLongAndLat();
//    getData();
// };


// function getLongAndLat() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         let lat = position.coords.latitude;
//         let long = position.coords.longitude;

//         latText = lat.toFixed(4);
//         longText = long.toFixed(4);
//     });
// };

// function getData() {
//     $.ajax(BASE_URL + '?lat=' + latText + '&lon=' + longText + '&key=' + API_KEY)
//     .then(function(data) {
//         console.log('trail data: ', data);
//     }, function(error) {
//         console.log('error: ', error);
//     });
// };

// function handleClick() {
//     console.log(this);
// };        