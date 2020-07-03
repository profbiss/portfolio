import $ from "jquery";
import "./works";
import "./form";
import "./menu";
import "./preloader"

const fog = document.querySelector(".fog");

export default fog;

$(document).ready(() => {


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
