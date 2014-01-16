var $tabs = $('.tab');
var $tabPanels = $('.tab-panel');

$tabPanels.filter(':not([data-state="current"])').hide();

$tabs.on('click', function () {
  // $(this) gives us access to the thing that was clicked on
  var id = $(this).attr('href');

  $tabPanels.filter('[data-state="current"]').hide();
  $(id).show().attr('data-state', 'current');

  $tabs.attr('data-state', '');
  $(this).attr('data-state', 'current');
});
