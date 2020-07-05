const workBtn = document.querySelector(".work__button");
const workFog = document.querySelector(".work__fog");
const isVisibleFog = "work__fog_is-visible";

workBtn.addEventListener("click", toggleInfo, true);

function toggleInfo(e) {
  e.preventDefault();
  workFog.classList.toggle(isVisibleFog);
}
