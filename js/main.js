$(document).ready(() => {
  setTimeout(() => {
    if ($(".preloader").hasClass("done") === false)
      return $(".preloader").addClass("done");
  }, 1000);

  AOS.init({ once: !0 });

  $(".hamburger").on("click", function () {
    return $(this).toggleClass("is-active"), toggleMenu();
  });
  $(document).on("click", function (e) {
    closeModal(e);
    closeMenu(e);
  });
  $(window).on("scroll", () => {
    if ($(this).scrollTop() <= 400) {
      $(".to-top").removeAttr("style");
    } else {
      $(".to-top").attr("style", "display: flex;");
    }
  });
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

  $(".form__btn").on("click", showModal);
});
