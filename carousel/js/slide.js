var $imgs = $('.slides img');

$('.next').on('click', function () {
  var current = $imgs.filter('[data-state="current"]').index();
  var next = current + 1;

  if (next > $imgs.length - 1) {
    next = 0;
  }

  $imgs.eq(next).attr('data-state', 'incoming').css('left', '100%').animate({
      left: 0
    },
    250,
    function () {
      $imgs.eq(next).attr('data-state', 'current');
    }
  );

  $imgs.eq(current).animate({
      left: $imgs.eq(current).width() * -1
    },
    250,
    function () {
      $imgs.eq(current).attr('data-state', '');
    }
  );
});
