"use strict";

// Main Navigation
var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
});



// Before - After
var controlContainer = document.querySelector(".example__control-container");
var imageContainer = document.querySelector(".example__image-container");
var pictureBefore = document.querySelector(".example__picture--before");
var pictureAfter = document.querySelector(".example__picture--after");
var control = document.querySelector(".example__control");
var textBefore = document.querySelector(".example__control-text--before");
var textAfter = document.querySelector(".example__control-text--after");
var flag = false;
var exampleControls = document.querySelector(".example__controls");

// controlContainer.addEventListener("click", function () {
//   imageBefore.classList.toggle("hide");
//   imageAfter.classList.toggle("hide");
//   control.classList.toggle("example__control--after");
// });
//
// textBefore.addEventListener("click", function () {
//   if (imageBefore.classList.contains("hide")) {
//     imageBefore.classList.remove("hide");
//     imageAfter.classList.add("hide");
//     control.classList.remove("example__control--after");
//   }
// });
//
// textAfter.addEventListener("click", function () {
//   if (imageAfter.classList.contains("hide")) {
//     imageBefore.classList.add("hide");
//     imageAfter.classList.remove("hide");
//     control.classList.add("example__control--after");
//   }
// });

control.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  flag = true;
}, false);

document.addEventListener('mouseup', function () {
  flag = false;
}, false);

exampleControls.addEventListener('mousemove', function (evt) {
  var res = evt.pageX - this.offsetLeft - controlContainer.offsetLeft;

  if (flag && res >= 0 && res <= controlContainer.offsetWidth) {
    control.style.left = res + "px";
    pictureBefore.style.width = (100 * res / controlContainer.offsetWidth) + "%";
    pictureAfter.style.width = (100 - 100 * res / controlContainer.offsetWidth) + "%";
  }
}, false);













