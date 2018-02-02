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
    var oTop = $('#our-skills__block').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.skill-rate__amount').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 3000,
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
    var $section = $('#our-skills__block');

    function loadDaBars() {
      $(".progres-rate").each(function() {
        $(this).data("origWidth",
        $(this).width()).width(0).animate( {
          width: $(this).data("origWidth")
        }, 3000);
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

  $('select').niceSelect();



  $(document).on("scroll", onScroll);
  
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 700, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav-link').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  };
});

function initMap() {
  var coordinates = {lat: 49.835693, lng: 24.014711};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: coordinates,
    disableDefaultUI: true,
  });
};
