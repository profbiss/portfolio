import fog from "./main"

const hamburgerBtn = document.querySelector(".hamburger");
const menuList = document.querySelector(".hamburger-menu__list");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  toggleMenu();
});
document.addEventListener("click", (e) => {
  closeMenu(e);
});

function toggleMenu() {
  menuList.classList.toggle("hamburger-menu__list_is-visible");
  fog.classList.toggle("menu-fog");
}

function closeMenu(e) {
  const target = e.target;
  if (
    target.classList.contains("menu-fog") ||
    target.classList.contains("hamburger-menu__link") ||
    (target.classList.contains("nav-bar__logo") &&
      fog.classList.contains("menu-fog"))
  ) {
    hamburgerBtn.classList.remove("is-active");
    toggleMenu();
  }
}
