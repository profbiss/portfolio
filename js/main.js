/* ********** hamburger menu ********** */

(function() {
  const hamburgerBtn = document.querySelector(".hamburger");

  hamburgerBtn.addEventListener("click", isActive);
  document.body.addEventListener("click", closeMenuByClickOnFog);

  function isActive() {
    hamburgerBtn.classList.toggle("is-active");
    toggleHamburgerMenu();
    screenFog();
    return;
  }

  function toggleHamburgerMenu() {
    const hamburgerMenu = document.querySelector(".hamburger-menu__list");
    hamburgerMenu.classList.toggle("hamburger-menu__list_is-visible");
    return;
  }

  function screenFog() {
    document.querySelector("div").classList.toggle("fog");
    return;
  }

  function closeMenuByClickOnFog(el) {
    const target = el.target;

    if (
      target.classList.contains("fog") ||
      target.classList.contains("hamburger-menu__link")
    ) {
      hamburgerBtn.classList.remove("is-active");
      toggleHamburgerMenu();
      screenFog();
      return;
    }
    return;
  }
})();

/* ********** hamburger menu ********** */
