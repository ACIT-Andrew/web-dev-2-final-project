// Write your JavaScript here...

$('.shop-by-room-or-service').slick({
    responsive: [
        {
            breakpoint: 1325,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
            }
        },
        {
            breakpoint: 826,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: true
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