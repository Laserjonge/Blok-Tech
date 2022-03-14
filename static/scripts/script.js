console.log("Hi...");

var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

function preventBack() {
  window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function() {
  null
};