/*
	Functions: a group of reusable code that will do the same thing every time
	e.g., alert(), prompt()
*/
var sayHello = function () {
	// console.log() is a debugging tool that shows up in the web inspector
	console.log('Hello Thomas');
};

sayHello();
sayHello();
sayHello();

/*
	Functions can accept pieces of data to be used or manipulated
	These pieces of data are called arguments
	An argument is a variable that exists only within the function
*/
var sayHelloTo = function (name) {
	console.log('Hello ' + name);
};

sayHelloTo('Dude');
sayHelloTo('Dudette');

var sayHelloManyTimes = function (name, num) {
	for (var i=0; i<num; i++) {
		document.write('Hello ' + name + '<br>');
	}
};

sayHelloManyTimes('Raphael', 10);
sayHelloManyTimes('Splinter', 7);

/*
	Arrays: a collection of data, where the order matters
	Similar to an <ol> in HTML
	Each item will be given a number, also known as an index or key
	The numbers in the array always start at 0
*/
var fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
var misc = [56, true, 'Hello', 56932.13, -123, ['stuff', 'junk'], false];

console.log(fruits[0]);
console.log(fruits[2]);

fruits.push('Watermelon'); // Add a new item to the end
fruits.pop(); // Delete the last item from the array
fruits.shift(); // Delete the first item
fruits.unshift('Grape'); // Add a new item to the start
delete fruits[2]; // Delete a single item from the middle of the array
fruits.length; // How many things are in the array

// This function will take an array and output an <ol>
var arrayToList = function (arr) {
	var total = arr.length;

	document.write('<ol>');

	for (var i=0; i<total; i++) {
		document.write('<li>');
		document.write(arr[i]);
		document.write('</li>');
	}

	document.write('</ol>');
};

arrayToList(fruits);
arrayToList(misc);

/*
	Objects: a collection of stuff where each item is given a name
	Comparable to a <dl> with <dt>s and <dd>s in HTML
*/
var gps = {
	latitude: 45
	, longitude: -76
};

console.log( gps['latitude'] );
console.log( gps.longitude );

// Add a new property to the object
// Or it will change the property that's already there
gps.city = 'Ottawa';
delete gps.city; // Remove the property from the object

var dog = {
	name: 'Paddington'
	, colour: 'Blackish-grey-brown-white'
	, breed: ['Maltese', 'Yorkie']
	, bark: function () {
		alert('Arf!');
	}
};

console.log(dog.name);
console.log(dog.breed[0]);
dog.bark();
//document.write();
//console.log();
