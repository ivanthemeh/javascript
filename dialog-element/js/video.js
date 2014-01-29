var $dialog = $('.video');
var $placeholder = $('.video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('.btn-open').on('click', function () {
  $placeholder.html('<iframe src="http://player.vimeo.com/video/28006505?title=0&amp;byline=0&amp;portrait=0&amp;color=c9ff23&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

  /*
    .get() returns the native Javascript element for us to access
    When using jQuery we don't have access to the original HTML
      elements directly, we are using jQuery to manipulate them.
    Example:
    $dialog.show() - Will call jQuery's `show()` function
    $dialog.get(0).show() - Will call Javascript's native `show()` function
  */
  $dialog.get(0).showModal();
  // show() -> allows multiple dialogs
  // showModal() -> single dialog, with no user interaction behind
});

$('.btn-close').on('click', function () {
  $dialog.get(0).close();
  $placeholder.html('');
})
