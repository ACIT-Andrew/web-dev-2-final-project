$(window).on("resize", function () {
  $("#images-carousel").slick("resize");
});

$("#images-carousel").slick({
  arrows: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<i class="slick-prev fa-solid fa-chevron-left"></i>',
  nextArrow: '<i class="slick-next fa-solid fa-chevron-right"></i>',
  responsive: [
    // {breakpoint: 0},
    {
      breakpoint: 1214,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 685,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: "unslick",
    },
  ],
});

$("#play-button").on("click", () => {
  $("#video-pop-up").show();
  $("#video-pop-up video").get(0).currentTime = 0;
  $("body").css("overflow-y", "hidden");
});

$("#close-button").on("click", () => {
  $("#video-pop-up").hide();
  $("#video-pop-up video").trigger("pause");
  $("body").css("overflow-y", "visible");
});

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

$(".hero-banner").slick({
  dots: true,
  arrows: true,
  fade: true,
  cssEase: "linear",
  prevArrow: '<i class="slick-prev fa-solid fa-chevron-left"></i>',
  nextArrow: '<i class="slick-next fa-solid fa-chevron-right"></i>',
});

$(".shop-by-room-or-service").slick({
  infinite: true,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: '<i class="fa-solid slick-next fa-chevron-right"></i>',
  prevArrow: '<i class="fa-solid slick-prev fa-chevron-left"></i>',
  responsive: [
    {
      breakpoint: 1325,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 826,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 450,
      // setting the settings property
      // to 'unslick' to destroy the slideshow
      settings: "unslick",
    },
  ],
});

// fix the bug from slick whenever resize the screen from the breakpoint 'unslick'

$(window).on("resize", function () {
  $(".shop-by-room-or-service").slick("resize");
});
