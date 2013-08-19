var letter;

while (!letter) {
	letter = prompt('Type a letter.');
}

for (var i = 0; i < 10; i++) {
	document.write(letter + '<br>');
}
