const workBtns = document.querySelectorAll(".work__button");
const workFogs = document.querySelectorAll(".work__fog");
const isVisibleFog = "work__fog_is-visible";

workBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleInfo(index);
  });
});

function toggleInfo(index) {
  workBtns.forEach((btn, index2) => {
    index === index2
      ? btn.classList.toggle("work__button_is-active")
      : btn.classList.remove("work__button_is-active");
  });
  workFogs.forEach((work, index2) => {
    index === index2
      ? work.classList.toggle(isVisibleFog)
      : work.classList.remove(isVisibleFog);
  });
}
