var $imgs = $('.slides img');

var switchSlide = function (current, next) {
  $imgs.eq(next).attr('data-state', 'incoming').fadeIn(250, function () {
    $imgs.eq(current).attr('data-state', '').hide();
    $imgs.eq(next).attr('data-state', 'current');
  });
};

$imgs.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
  var current = $imgs.filter('[data-state="current"]').index();
  var next = current + 1;

  if (next > $imgs.length - 1) {
    next = 0;
  }

  switchSlide(current, next);
});
