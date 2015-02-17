var $form = $('.form');
var $name = $('.name');
var $age = $('.age');
var $dinos = $('.dinos');

var template = $('#template').html();
Mustache.parse(template);

$form.on('submit', function (e) {
  e.preventDefault();

  var dino = {
    name: $name.val(),
    age: $age.val(),
    class: $('[name="diet"]:checked').val()
  };

  $dinos.append(Mustache.render(template, dino));
});
