console.log("Hi...");

var settingsButton = document.querySelector(".settings-button")

settingsButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  var form = document.querySelector(".pop-up-form");
  form.classList.toggle("pop-up-function");
}

function settingsButtonPosition() {
  settingsButton.classList.add("button-position");
}

settingsButtonPosition();