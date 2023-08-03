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

$(window).on(
    'resize', function(){
        $("#images-carousel").slick('resize');
    }
)

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
