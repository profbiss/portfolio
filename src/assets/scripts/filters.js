const btns = document.querySelectorAll(".filter-buttons__button");
const works = document.querySelectorAll(".work");

onFilterButton(btns[0]);

btns.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault;
    onFilterButton(e.target);
  })
);

function onFilterButton(target) {
  btns.forEach((button) => {
    button.classList.remove("filter-buttons__button_is-active");
  });
  target.classList.add("filter-buttons__button_is-active");

  filterWorks(target.getAttribute("id"));
}

function filterWorks(id) {
  if (!id) {
    works.forEach((work) => (work.style.display = "block"));
  } else {
    works.forEach((work) =>
      work.classList.contains(id)
        ? (work.style.display = "block")
        : (work.style.display = "none")
    );
  }
}
