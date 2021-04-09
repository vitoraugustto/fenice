//Carousel
let slidePosition = 0;

const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;

document
  .getElementById("carousel_button--next")
  .addEventListener("click", () => {
    nextSlide();
  });

document
  .getElementById("carousel_button--prev")
  .addEventListener("click", () => {
    previousSlide();
  });

function updateSlidePosition() {
  for (var slide of slides) {
    slide.classList.remove("carousel_item--visible");
    slide.classList.add("carousel_item--hidden");
  }

  slides[slidePosition].classList.add("carousel_item--visible");
}

function nextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function previousSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

carouselAutoPlay = setInterval(nextSlide, 6000);
