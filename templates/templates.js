var template = $('#template').html();
Mustache.parse(template);
var rendered = Mustache.render(template, dinosaurs);
$('.dinos').html(rendered);
