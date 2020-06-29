import Glide from "@glidejs/glide";

new Glide(".glide").mount();

(function() {
  const getEmailInput = document.getElementById("email-input");

  document.getElementById("logo-menu").addEventListener("click", () => {
    if (window.innerWidth < 800) {
      document.getElementById("header-nav").classList.toggle("open");
    }
  });
  document.getElementById("submit-button").addEventListener("click", e => {
    e.preventDefault();
    changeMsgError(getEmailInput.value);
  });

  document.getElementById("email-input").addEventListener("input", () => {
    changeMsgError(getEmailInput.value);
  });

  function changeMsgError(email) {
    const errorMsg = document.getElementById("email-err");
    if (checkValidEmail(email)) {
      errorMsg.style.display = "none";
      errorMsg.textContent = "";
      return false;
    }
    if (email === "") {
      errorMsg.textContent = "Enter your email address";
      errorMsg.style.display = "block";
      return false;
    }
    errorMsg.textContent = "Enter a valid email address";
    errorMsg.style.display = "block";
  }

  function checkValidEmail(email) {
    const reg = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return reg.test(email.toLowerCase());
  }
})();