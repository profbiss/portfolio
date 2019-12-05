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
    document.querySelector("div").classList.toggle("fog");
    return;
  }

  function closeMenuByClickOnFog(el) {
    const target = el.target;

    if (
      target.classList.contains("fog") ||
      target.classList.contains("hamburger-menu__link")
    ) {
      hamburgerBtn.classList.remove("is-active");
      toggleHamburgerMenu();
      screenFog();
      return;
    } else if (
      document.querySelector("div").classList.contains("fog") &&
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
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});

/* ********** mailer menu ********** */
