"use strict";

// Main Navigation
const navMain = document.querySelector(".main-nav");
const navToggle = navMain.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
});



// Before - After
const controlContainer = document.querySelector(".example__control-container");
const pictureBefore = document.querySelector(".example__picture--before");
const pictureAfter = document.querySelector(".example__picture--after");
const control = document.querySelector(".example__control");
const textBefore = document.querySelector(".example__control-text--before");
const textAfter = document.querySelector(".example__control-text--after");
let flag = false;
const exampleControls = document.querySelector(".example__controls");
const example = document.querySelector(".example");


textBefore.addEventListener("click", function () {
  pictureBefore.style.width = 100 + "%";
  pictureAfter.style.width = 0 + "%";
  control.style.left = 0 + "px";
  if (!controlContainer.classList.contains("example__control-container--before")) {
    controlContainer.classList.add("example__control-container--before");
  }
  if (controlContainer.classList.contains("example__control-container--after")) {
    controlContainer.classList.remove("example__control-container--after");
  }
});

textAfter.addEventListener("click", function () {
  pictureBefore.style.width = 0 + "%";
  pictureAfter.style.width = 100 + "%";
  control.style.left = controlContainer.offsetWidth + "px";
  if (!controlContainer.classList.contains("example__control-container--after")) {
    controlContainer.classList.add("example__control-container--after");
  }
  if (controlContainer.classList.contains("example__control-container--before")) {
    controlContainer.classList.remove("example__control-container--before");
  }
});


control.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  flag = true;
}, false);

document.addEventListener('mouseup', function () {
  flag = false;
}, false);

exampleControls.addEventListener('mousemove', function (evt) {

  let res = evt.pageX - example.offsetLeft - this.offsetLeft - controlContainer.offsetLeft;

  if (flag && res >= 0 && res <= controlContainer.offsetWidth) {
    control.style.left = res + "px";
    pictureBefore.style.width = (100 * res / controlContainer.offsetWidth) + "%";
    pictureAfter.style.width = (100 - 100 * res / controlContainer.offsetWidth) + "%";
  }
}, false);

control.addEventListener('touchstart', function (evt) {
  evt.preventDefault();
  flag = true;
}, false);

document.addEventListener('touchend', function () {
  flag = false;
}, false);

exampleControls.addEventListener('touchmove', function (evt) {

  let res = evt.originalEvent.touches[0].pageX - example.offsetLeft - this.offsetLeft - controlContainer.offsetLeft;

  console.log(evt.pageX); console.log(res);

  if (flag && res >= 0 && res <= controlContainer.offsetWidth) {
    control.style.left = res + "px";
    pictureBefore.style.width = (100 * res / controlContainer.offsetWidth) + "%";
    pictureAfter.style.width = (100 - 100 * res / controlContainer.offsetWidth) + "%";
  }
}, false);
