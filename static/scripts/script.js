/// //////
// ES5 //
/// //////
// var settingsButton = document.querySelector(".settings-button")

// settingsButton.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   var form = document.querySelector(".pop-up-form");
//   form.classList.toggle("pop-up-function");
// }

// function settingsButtonPosition() {
//   settingsButton.classList.add("button-position");
// }

// settingsButtonPosition();

/// //////
// ES6 //
/// //////
// PROGRESSIVE ENHANCEMENT //
const settingsButton = document.querySelector(".settings-button");

settingsButton.addEventListener(
  "click",
  (toggleMenu = () =>
    document.querySelector(".pop-up-form").classList.toggle("pop-up-function"))
);

settingsButtonPosition = settingsButton.classList.add("button-position");

// Maps //
mapboxgl.accessToken =
  "pk.eyJ1IjoibGFzZXJib3kiLCJhIjoiY2wxY3NnbHE0MGF3YTNkanB1ZzE4ZHB3dCJ9.SCPhw2B83qUYoIwjEa5kzw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([5.2793703, 52.2129919]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
	  accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
