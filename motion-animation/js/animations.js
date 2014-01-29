var $win = $(window);
var $sun = $('.sun');
var $dipper = $('.dipper');
var $ships = $('.ships img');

$win.on('scroll', function () {
	$sun.css('-webkit-transform', 'rotate(-' + $win.scrollTop() / 5 + 'deg)');
});

$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');
}, { offset: '60%' });

$('.ships-section').waypoint(function() {
	$ships.eq(0).addClass('js-ships-delay-1');
	$ships.eq(2).addClass('js-ships-delay-3');
	$ships.eq(3).addClass('js-ships-delay-2');
	$ships.addClass('js-ships-animate');
}, { offset: '60%' });
