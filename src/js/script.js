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
		zIndex: 100,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: false
				}
			}
		]
	});

	// Mobile-menu
	$('#open-menu').on('click', function () {
		$('body').addClass('visible-menu');
	});
	
	$('#close-menu').on('click', function () {
		$('body').removeClass('visible-menu');
	});

});