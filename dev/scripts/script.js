// if ($(window).width() < 500) {
//   $("#images-carousel").slick("unslick");
// } else {
//   $("#images-carousel").slick({
//     arrows: true,
//     dots: false,
//     prevArrow: '<i class="slick-prev fa-solid fa-chevron-left"></i>',
//     nextArrow: '<i class="slick-next fa-solid fa-chevron-right"></i>',
//     responsive: [
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//         },
//       },
//     ],
//   });
// }

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
      breakpoint: 500,
      settings: "unslick",
    },
  ],
});

$("#play-button").on("click", () => {
  $("#video-pop-up").show();
  $("#video-pop-up video").get(0).currentTime = 0;
  $('body').css("overflow-y", "hidden")
});

$("#close-button").on("click", () => {
    $("#video-pop-up").hide();
    $("#video-pop-up video").trigger("pause");
    $('body').css("overflow-y", "visible")
});

