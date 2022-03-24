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
const settingsButton = document.querySelector(".settings-button")

settingsButton.addEventListener("click", toggleMenu = () => document.querySelector(".pop-up-form").classList.toggle("pop-up-function"));

settingsButtonPosition = (settingsButton.classList.add("button-position")); 