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

  var a = 0;
  $(window).scroll(function() {
    var oTop = $('#about-us').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.skill-rate__amount').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
        }
        });
      });
      a = 1;
    }
  });

  $(function() {
    var $section = $('#about-us');

    function loadDaBars() {
      $(".progres-rate").each(function() {
        $(this).data("origWidth",
        $(this).width()).width(0).animate( {
          width: $(this).data("origWidth")
        }, 5000);
      });
    }

    $(document).bind('scroll', function(ev) {
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $section.offset().top - window.innerHeight;
      if (scrollOffset > containerOffset) {
          loadDaBars();
          $(document).unbind('scroll');
      }
    });
  });
});
