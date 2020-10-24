"use strict";

$(function () {
  // Main-slider
  $('#main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    appendDots: '[data-dots="true"]',
    fade: true,
    speed: 1000,
    pauseOnHover: false,
    zIndex: 100
  }); // Mobile-menu

  $('#open-menu').on('click', function () {
    $('body').addClass('visible-menu');
    $('#bg-mobile').addClass('header__bg-mobile_active');
  });
  $('#close-menu').on('click', function () {
    $('body').removeClass('visible-menu');
    $('#bg-mobile').removeClass('header__bg-mobile_active');
  }); // Footer-navs

  $('.footernav__title').on('click', function () {
    if ($(window).width() < 970) {
      $(this).parent().children('.footernav__list').slideToggle();
      $(this).parent().children('.footernav__title').toggleClass('footernav__title_active');
    }
  }); // Side-navs

  $('.content-types__item').on('click', function () {
    $(this).find('.content-types__sublist').slideToggle();
  });
});