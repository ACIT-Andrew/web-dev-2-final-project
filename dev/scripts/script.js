// Write your JavaScript here...

/* Hamburger menu toggle function */
$(".hamburger-menu").on("click", () => {
  $(".hamburger-menu").toggleClass("selected");
  $(".site-header__nav").toggleClass("expanded");
});

// Define media query
const mql = window.matchMedia("(min-width: 64.0625em)");

// Add the event listener to the MediaQueryList object
mql.addEventListener("change", removeTransition);
function removeTransition(e) {
  if (e.matches) {
    $(".hamburger-menu").removeClass("selected");
    $(".site-header__nav").removeClass("expanded");
  }
}
