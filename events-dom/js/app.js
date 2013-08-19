var circle;

var moveUp = function () {
	var newTop = circle.offsetTop - 10;
	circle.style.top = newTop + 'px';
};

var moveDown = function () {
	var newTop = circle.offsetTop + 10;
	circle.style.top = newTop + 'px';
};

var moveLeft = function () {
	var newLeft = circle.offsetLeft - 10;
	circle.style.left = newLeft + 'px';
};

var moveRight = function () {
	var newLeft = circle.offsetLeft + 10;
	circle.style.left = newLeft + 'px';
};

var clearSelectedCircles = function () {
	var circles = document.querySelectorAll('[data-state="selected"]');
	var total = circles.length;

	for (var i=0; i<total; i++) {
		circles[i].setAttribute('data-state', '');
	}
}

document.querySelector('.btn-up').addEventListener('click', moveUp, false);
document.querySelector('.btn-down').addEventListener('click', moveDown, false);
document.querySelector('.btn-left').addEventListener('click', moveLeft, false);
document.querySelector('.btn-right').addEventListener('click', moveRight, false);

document.documentElement.addEventListener('keydown', function (eventObject) {
	switch (eventObject.keyCode) {
		case 38:
			moveUp();
			break;
		case 40:
			moveDown();
			break;
		case 37:
			moveLeft();
			break;
		case 39:
			moveRight();
			break;
	}
}, false);

document.querySelector('.color').addEventListener('change', function () {
	circle.style.backgroundColor = this.value;
}, false);

document.querySelector('.create').addEventListener('click', function () {
	clearSelectedCircles();
	circle = document.createElement('div');
	circle.className = 'circle';
	circle.setAttribute('data-state', 'selected');
	document.body.appendChild(circle);
}, false);

document.body.addEventListener('click', function (eventObject) {
	if (eventObject.target.tagName == 'DIV') {
		clearSelectedCircles();
		circle = eventObject.target;
		circle.setAttribute('data-state', 'selected');
	}
}, false);




















