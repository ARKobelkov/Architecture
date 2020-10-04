$(function () {
	/* Поддержка svg спрайтов в IE 11 */
	svg4everybody();

	// Main-slider
	$('#main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: true,
		appendDots: '#main-slider',
		fade: true,
		speed: 1000,
		pauseOnHover: false,
		zIndex: 100
	});
});