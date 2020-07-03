const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", () => {
  if (preloader.classList.contains("done") === false) {
    return preloader.classList.add("done");
  }
});
