import $ from "jquery";
import "./works";
import "./form";

$(document).ready(() => {
  setTimeout(() => {
    if ($(".preloader").hasClass("done") === false)
      return $(".preloader").addClass("done");
  }, 1000);

  $(".to-top").fadeOut(0);
  $(".hamburger").on("click", function () {
    return $(this).toggleClass("is-active"), toggleMenu();
  });
  $(document).on("click", function (e) {
    closeMenu(e);
  });
  $(window).on("scroll", () => {
    if ($(window).scrollTop() <= 400) {
      $(".to-top").fadeOut();
    } else {
      $(".to-top").fadeIn();
    }
  });
  $(".to-top").on("click", (e) => {
    e.preventDefault(), $("html").animate({ scrollTop: 0 }, 1e3);
  });
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
});
