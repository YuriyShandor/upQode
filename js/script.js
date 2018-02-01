$(document).ready(function() {
  $('.toggler-icon').on('click', function() {
    $(this).toggleClass('toggler-icon_close');
    $('.nav-bar').slideToggle('0.5s');
  });

  $('.header-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $(".header-slider__nav_next"),
   prevArrow: $(".header-slider__nav_prev"),
   autoplay: true,
   autoplaySpeed: 5000,
   dots: true,
   dotsClass: 'slick-dots__header-slider',
  });

  $(".products-slider").slick({
    slidesToShow: 3, // default desktop values
    slidesToScroll: 3,
    rows: 2,
    arrows: false,
    responsive: [
        {
            breakpoint: 980, // tablet breakpoint
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480, // mobile breakpoint
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
  });
});
