"use strict";

$(function () {
  /* Поддержка svg спрайтов в IE 11 */
  svg4everybody(); // Main-slider

  $('#main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  }); // Descr-slider

  $('#descr-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    speed: 1000,
    appendDots: '#descr-slider'
  });
});
//# sourceMappingURL=script.js.map
