$(document).ready(function () {
  setTimeout(function () {
    if ($(".preloader").hasClass("done") === false)
      return $(".preloader").addClass("done");
  }, 1000);

  AOS.init({ once: !0 });

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
});

(function () {
  const o = document.querySelector(".hamburger");
  function e() {
    document
      .querySelector(".hamburger-menu__list")
      .classList.toggle("hamburger-menu__list_is-visible");
  }
  function t() {
    document.querySelector(".fog").classList.toggle("menu-fog");
  }
  o.addEventListener("click", function () {
    return o.classList.toggle("is-active"), e(), void t();
  }),
    document.body.addEventListener("click", function (s) {
      const n = s.target;
      return n.classList.contains("menu-fog") ||
        n.classList.contains("hamburger-menu__link") ||
        (n.classList.contains("nav-bar__logo") &&
          document.querySelector("div").classList.contains("menu-fog"))
        ? (o.classList.remove("is-active"), e(), void t())
        : void 0;
    });
})();
const modal = document.querySelector(".modal"),
  modalFog = document.querySelector(".fog");
function showModal() {
  modal.classList.toggle("modal_visible"),
    modalFog.classList.toggle("modal-fog");
}
function closeModal(o) {
  const e = o.target;
  (e.classList.contains("modal_visible") ||
    e.classList.contains("modal-fog")) &&
    (modal.classList.remove("modal_visible"),
    modalFog.classList.remove("modal-fog"));
}
document.addEventListener("click", closeModal),
  (function () {
    $(window).on("scroll", () => {
      if ($(this).scrollTop() <= 400) {
        $(".to-top").removeAttr("style");
      } else {
        $(".to-top").attr("style", "display: flex;");
      }
    }),
      $(".to-top").on("click", (e) => {
        e.preventDefault(), $("html").animate({ scrollTop: 0 }, 1e3);
      });
  })();
