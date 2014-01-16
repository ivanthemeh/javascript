var $items = $('.carousel-items img');

var switchSlide = function (outgoing, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(outgoing).attr('data-state', '').hide();
		$items.eq(incoming).attr('data-state', 'current');
	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;

	if (next >= $items.length) {
		next = 0;
	}

	switchSlide(current, next);
});

$('.prev').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var prev = current - 1;

	if (prev < 0) {
		prev = $items.length - 1;
	}

	switchSlide(current, prev);
});
