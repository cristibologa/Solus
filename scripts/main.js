const burgerButton = document.querySelector("[data-js-header-burger-button]");

const burgerMenu = document.querySelector(".burger__menu");

const closeMenu = document.querySelector(".burger__menu-button");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.add("is-active");
});

closeMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("is-active");
});
