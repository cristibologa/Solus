const burgerButton = document.querySelector("[data-js-header-burger-button]");

const burgerMenu = document.querySelector(".burger__menu");

const closeMenu = document.querySelector(".burger__menu-button");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.add("is-active");
});

closeMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("is-active");
});

// cards
const testimonialsCards = document.querySelector(".testimonials__cards");
const testimonialCards = document.querySelectorAll(
  ".testimonials__cards .card"
);
const leftBtn = document.querySelector(".button-left");
const rightBtn = document.querySelector(".button-right");
let testimonialIndex = 0;
const cardWidth = 420; // card width + margin (adjust if needed)
const totalTestimonials = testimonialCards.length;

function updateTestimonialsSlide() {
  testimonialsCards.style.transform = `translateX(-${
    testimonialIndex * cardWidth
  }px)`;
}

leftBtn.addEventListener("click", () => {
  if (testimonialIndex < totalTestimonials - 1) {
    testimonialIndex++;
    updateTestimonialsSlide();
  }
});

rightBtn.addEventListener("click", () => {
  if (testimonialIndex > 0) {
    testimonialIndex--;
    updateTestimonialsSlide();
  }
});
