var template = $('#template').html();
Mustache.parse(template);
var rendered = Mustache.render(template, dinosaurs);
$('.dinos').html(rendered);

$('.dinos').on('click', '.btn', function () {
  $(this).parent().toggleClass('js-clicked');
});
