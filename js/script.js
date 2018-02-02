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
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots__products-slider',
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 545,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });
});
