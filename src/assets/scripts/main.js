import $ from "jquery";
import "./works";
import "./form";
import "./menu";

const fog = document.querySelector(".fog");

export default fog;

$(document).ready(() => {
  setTimeout(() => {
    if ($(".preloader").hasClass("done") === false)
      return $(".preloader").addClass("done");
  }, 1000);

  $(".to-top").fadeOut(0);
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
});
