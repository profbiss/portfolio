import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";

$(document).ready(() => {
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
      if ($(".preloader").hasClass("done") === false)
        return $(".preloader").addClass("done");
    }, 1000);
  
  })
 
  AOS.init({ once: !0 });

  const filterButtonsContainer = document.querySelector(".filter-buttons");
  const filterButtons = document.querySelectorAll(".filter-buttons__button");
  const works = document.querySelectorAll(".works__card");

  $(".to-top").fadeOut(0);
  $(".hamburger").on("click", function () {
    return $(this).toggleClass("is-active"), toggleMenu();
  });
  $(document).on("click", function (e) {
    closeModal(e);
    closeMenu(e);
  });
  $(window).on("scroll", () => {
    if ($(window).scrollTop() <= 400) {
      $(".to-top").fadeOut();
    } else {
      $(".to-top").fadeIn();
    }
  });
  $(filterButtonsContainer).on("click", changeFilter);
  $(".to-top").on("click", (e) => {
    e.preventDefault(), $("html").animate({ scrollTop: 0 }, 1e3);
  });
  $(".form").submit(function () {
    var o = $(this);
    return (
      $.ajax({ type: "POST", url: "mail.php", data: o.serialize() }).done(
        function () {
          showModal(),
            setTimeout(function () {
              o.trigger("reset");
            }, 1e3);
        }
      ),
      !1
    );
  });

  function changeFilter(e) {
    if (e) {
      e.preventDefault();
      const target = e.target;
      if (target.getAttribute("href") === "#") {
        console.log("hi");
        filterButtons.forEach((button, index) => {
          button.classList.remove("filter-buttons__button_is-active");
          button.setAttribute("href", "#");
          if (button === target) {
            button.classList.add("filter-buttons__button_is-active");
            button.removeAttribute("href", "#");
            switchWorksFilter(index);
          }
        });
      }
    }
  }
  function switchWorksFilter(index) {
    works.forEach((work) => {
      work.style = "display: block;";
      if (index === 1 && work.classList.contains("app-card")) {
        work.style = "display: none;";
      } else if (index === 2 && work.classList.contains("site-card")) {
        work.style = "display: none;";
      }
    });
  }
  function toggleMenu() {
    $(".hamburger-menu__list").toggleClass("hamburger-menu__list_is-visible");
    $(".fog").toggleClass("menu-fog");
  }
  function closeMenu(e) {
    const target = e.target;
    if (
      $(target).hasClass("menu-fog") ||
      $(target).hasClass("hamburger-menu__link") ||
      ($(target).hasClass("nav-bar__logo") && $(".fog").hasClass("menu-fog"))
    ) {
      $(".hamburger").removeClass("is-active"), toggleMenu();
    }
  }
  function showModal() {
    $(".modal").toggleClass("modal_visible");
    $(".fog").toggleClass("modal-fog");
  }
  function closeModal(e) {
    const target = e.target;
    if (
      $(target).hasClass("modal_visible") ||
      $(target).hasClass("modal-fog")
    ) {
      $(".modal").removeClass("modal_visible"),
        $(".fog").removeClass("modal-fog");
    }
  }
});
