const preloader = document.querySelector(".preloader");

document.addEventListener("DOMContentLoaded", () => {
  if (!preloader.classList.contains("done")) {
    return preloader.classList.add("done");
  }
});
