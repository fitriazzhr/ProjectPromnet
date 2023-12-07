// JavaScript code
// Get the slider element
var slider = document.querySelector(".slider");

// Get the slides and the controls
var slides = slider.querySelectorAll(".slide");
var controls = slider.querySelectorAll(".controls span");

// Get the index of the current slide
var index = 0;

// Show the first slide
slides[index].classList.add("active");

// Function to change the slide
function changeSlide(newIndex) {
  // Remove the active class from the current slide
  slides[index].classList.remove("active");

  // Update the index with the new index
  index = newIndex;

  // Add the active class to the new slide
  slides[index].classList.add("active");
}

// Function to go to the next slide
function nextSlide() {
  // Check if the index is the last one
  if (index == slides.length - 1) {
    // Go to the first slide
    changeSlide(0);
  } else {
    // Go to the next slide
    changeSlide(index + 1);
  }
}

// Function to go to the previous slide
function prevSlide() {
  // Check if the index is the first one
  if (index == 0) {
    // Go to the last slide
    changeSlide(slides.length - 1);
  } else {
    // Go to the previous slide
    changeSlide(index - 1);
  }
}

// Add event listeners to the controls
controls[0].addEventListener("click", prevSlide);
controls[1].addEventListener("click", nextSlide);

// Set a timer to change the slide automatically every 5 seconds
setInterval(nextSlide, 1000000);

const formOpenBtn = document.querySelector("#form-open"),
active = document.querySelector(".active"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw-hide");

formOpenBtn.addEventListener("click", () => active.classList.add("show"));
formCloseBtn.addEventListener("click", () => active.classList.remove("show"));

// pwShowHide.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let getPwInput = icon.parentElement.querySelector("input");
//     if(getPwInput.type === "password"){
//       getPwInput.type = "text";
//       icon.classList.replace("visibility_off", "visibility_on");
//     }else{
//       getPwInput.type = "password";
//       icon.classList.replace("visibility_on", "visibility_off");
//     }
//   });
// });

let visibility_off = document.getElementById("visibility_off");
let password = document.getElementById("password");

visibility_off.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    visibility_off.src = "images/visibility_on.png";
  } else {
    password.type = "password";
    visibility_off.src = "images/visibility_off.png";
  }
}


signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});