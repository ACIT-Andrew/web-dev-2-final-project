// Write your JavaScript here...

$('.shop-by-room-or-service').slick({
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
                slidesToShow: 4      
            }
        },
        {
            breakpoint: 826,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 450,
            // setting the settings property
            // to 'unslick' to destroy the slideshow
            settings: 'unslick'
        }
    ]
}
);

// fix the bug from slick whenever resize the screen from the breakpoint 'unslick'

$(window).on('resize', function () {
    $('.shop-by-room-or-service').slick('resize');
} );