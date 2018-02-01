$(document).ready(function() {
  $('.header-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $(".header-slider__nav_next"),
   prevArrow: $(".header-slider__nav_prev"),
   // autoplay: true,
   // autoplaySpeed: 5000,
   dots: true,
   dotsClass: 'slick-dots__header-slider',
  });
});
