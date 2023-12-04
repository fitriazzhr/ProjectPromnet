var slider = document.querySelector(".slider");

var slides = slider.querySelectorAll(".slide");
var controls = slider.querySelectorAll(".controls span");

var index = 0;

slides[index].classList.add("active");

function changeSlide(newIndex) {
  slides[index].classList.remove("active");

  index = newIndex;

  slides[index].classList.add("active");
}

function nextSlide() {
  if (index == slides.length - 1) {
    changeSlide(0);
  } else {
    changeSlide(index + 1);
  }
}

function prevSlide() {
  if (index == 0) {
    changeSlide(slides.length - 1);
  } else {
    changeSlide(index - 1);
  }
}

controls[0].addEventListener("click", prevSlide);
controls[1].addEventListener("click", nextSlide);

setInterval(nextSlide, 1000000);
