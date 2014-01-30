var $win = $(window);
var $sun = $('.sun');
var $dipper = $('.dipper');
var $ships = $('.ships img');

$win.on('scroll', function () {
	$sun.css('transform', 'rotate(-' + $win.scrollTop() / 5 + 'deg)');
});

$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');
}, { offset: '60%' });

$('.ships-section').waypoint(function() {
	$ships.addClass('js-ships-animate');
}, { offset: '60%' });
