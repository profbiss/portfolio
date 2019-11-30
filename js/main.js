/* ********** hamburger menu ********** */

(function() {
  const hamburgerBtn = document.querySelector(".hamburger");

  hamburgerBtn.addEventListener("click", isActive);

  function isActive() {
    return hamburgerBtn.classList.toggle("is-active");
  }
})();

/* ********** hamburger menu ********** */
