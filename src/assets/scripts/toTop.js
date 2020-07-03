const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  window.pageYOffset > document.documentElement.clientHeight
    ? toTopBtn.classList.add("to-top_is-visible")
    : toTopBtn.classList.remove("to-top_is-visible");
});
