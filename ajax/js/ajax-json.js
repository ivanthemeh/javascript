var $template = $('.template');
var $all = $('.all');

var $dinos = $.ajax('js/dinos.json', {
	dataType: 'json'
});

var makeDinoData = function (dinoData) {
	var dino = $template.clone();

	dino.children('.name').html(dinoData.name)
	dino.children('.period').html(dinoData.period)
	dino.children('.diet').html(dinoData.diet)
	dino.removeAttr('hidden')

	return dino;
};

$dinos.done(function(data) {
	var total = data.length;
	var rand = Math.round(Math.random() * (total - 1));

	$('.random').html(makeDinoData(data[rand]));
});

$('.get-all').on('click', function () {
	$dinos.done(function (data) {
		var total = data.length;

		data.forEach(function (item) {
			var li = $('<li/>');
			li.html(makeDinoData(item));
			$all.append(li);
		});
	});
});
