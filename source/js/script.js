// Main Navigation
var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// Before - After
var toggleContainer = document.querySelector(".example__toggle-container");
var imageBefore = document.querySelector(".example__image--before");
var imageAfter = document.querySelector(".example__image--after");
var controlBefore = document.querySelector(".example__toggle-container::before");
var controlAfter = document.querySelector(".example__toggle-container::after");

toggleContainer.addEventListener("click", function () {
  imageBefore.style.display = imageBefore.style.display === "none" ? "" : "none";
  imageAfter.style.display = imageAfter.style.display === "none" ? "" : "none";
  controlBefore.style.display = controlBefore.style.display === "none" ? "" : "none";
  controlAfter.style.display = controlAfter.style.display === "none" ? "" : "none";
});
