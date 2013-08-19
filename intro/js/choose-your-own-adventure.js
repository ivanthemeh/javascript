var name = '';

while (!name) {
	name = prompt('What’s your name?');
}

var answer = '';

while (!answer) {
	answer = prompt('Once upon a time there was a wonderful person, named '
		+ name
		+ ', who set out on a quest to…\n'
		+ '\nA. find an ancient lost treasure.'
		+ '\nB. discover an advanced alien race.'
	);
}

var answer2BranchA = '';
var answer2BranchB = '';

if (answer == 'a') {
	while (!answer2BranchA) {
		answer2BranchA = prompt('Knowing it was hidden in a small coat pocket, '
			+ name
			+ ' pulled out a treasure map and set off to find the “x”. '
			+ 'Coming to a rickety, rope bridge, '
			+ name
			+ ' had to decide to go…\n'
			+ '\nA. over the bridge.'
			+ '\nB. under the bridge.'
			+ '\nC. back home.'
		);
	}
} else {
	while (!answer2BranchB) {
		answer2BranchB = prompt(
			'Uncovering a one-person rocket ship hidden under a pile of leaves, '
			+ name
			+ ' ignited the switch and sped off towards…\n'
			+ '\nA. Venus.'
			+ '\nB. Mars.'
			+ '\nC. Neptune.'
		);
	}
}

if (answer2BranchA) {
	switch (answer2BranchA) {
		case 'a':
			alert(name + ' crossed the bridge and found the wonderful, ancient treasure!');
			break;

		case 'b':
			alert(name + ' died a horrible, gory death by crocodiles under the bridge.');
			break;

		case 'c':
			alert(name + ' went home a scared and disappointed fool.')
			break;
	}
}

if (answer2BranchB) {
	switch (answer2BranchB) {
		case 'a':
			alert(name + ' was thrown violently around the storms of Venus, crashing into a fiery volcano of death.');
			break;

		case 'b':
			alert(name + ' landed on the planet Mars to a great fanfare and was treated like royalty till the end of days.');
			break;

		case 'c':
			alert(name + '’s rocket sputtered down to the frozen wasteland and found nothing.');
			break;
	}
}

document.write('<strong>The End.</strong>');
