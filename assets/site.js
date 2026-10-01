// The only script on the site: the small-screen navigation toggle.
// Everything else is static HTML, so the pages work with JavaScript off.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.hidden = false;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
