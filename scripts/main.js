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

// acordeon

const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isActive = content.classList.contains("active");
    const plus = document.querySelector(".accordion__plus");

    // Close all other sections
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.classList.remove("active");
      item.style.maxHeight = null;
      plus.classList.remove("active");
    });

    // Toggle the clicked section
    if (!isActive) {
      content.classList.add("active");
      header.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      plus.classList.add("active");
    }
  });
});
