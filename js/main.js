/* ********** preloader ********** */

(function() {
  document.body.onload = () => {
    setTimeout(() => {
      const preloader = document.querySelector(".preloader");
      if (!preloader.classList.contains("done")) {
        return preloader.classList.add("done");
      }
    }, 1000);
  };
})();

/* ********** preloader ********** */

/* ********** hamburger menu ********** */

(function() {
  const hamburgerBtn = document.querySelector(".hamburger");

  hamburgerBtn.addEventListener("click", isActive);
  document.body.addEventListener("click", closeMenuByClickOnFog);

  function isActive() {
    hamburgerBtn.classList.toggle("is-active");
    toggleHamburgerMenu();
    screenFog();
    return;
  }

  function toggleHamburgerMenu() {
    const hamburgerMenu = document.querySelector(".hamburger-menu__list");
    hamburgerMenu.classList.toggle("hamburger-menu__list_is-visible");
    return;
  }

  function screenFog() {
    document.querySelector(".fog").classList.toggle("menu-fog");
    return;
  }

  function closeMenuByClickOnFog(el) {
    const target = el.target;

    if (
      target.classList.contains("menu-fog") ||
      target.classList.contains("hamburger-menu__link") ||
      target.classList.contains("nav-bar__logo")
    ) {
      hamburgerBtn.classList.remove("is-active");
      toggleHamburgerMenu();
      screenFog();
      return;
    } else if (
      document.querySelector("div").classList.contains("menu-fog") &&
      target.classList.contains("nav-bar__logo")
    ) {
      hamburgerBtn.classList.remove("is-active");
      toggleHamburgerMenu();
      screenFog();
      return;
    }
    return;
  }
})();

/* ********** hamburger menu ********** */

/* ********** mailer menu ********** */

$(document).ready(function() {
  //E-mail Ajax Send
  $(".form").submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      showModal();
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

const modal = document.querySelector(".modal");
const modalFog = document.querySelector(".fog");

function showModal() {
  modal.classList.toggle("modal_visible");
  modalFog.classList.toggle("modal-fog");
  return;
}

document.addEventListener("click", closeModal);

function closeModal(el) {
  const target = el.target;

  if (
    target.classList.contains("modal_visible") ||
    target.classList.contains("modal-fog")
  ) {
    modal.classList.remove("modal_visible");
    modalFog.classList.remove("modal-fog");
  } else return;
}

/* ********** mailer menu ********** */

/* ********** to-top button ********** */

(function() {
  function backToTop() {
    const btn = $(".to-top");

    btn.fadeOut(0);

    $(window).on("scroll", () => {
      if ($(this).scrollTop() <= 400) {
        btn.fadeOut();
      } else {
        btn.fadeIn();
      }
    });

    btn.addEventListener("click", e => {
      e.preventDefault();
      $("html").animate({ scrollTop: 0 }, 1000);
    });
  }

  backToTop();
})();

/* ********** to-top button ********** */
