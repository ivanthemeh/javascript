// Single line comment
/*
	Multi-line
	comments
*/

//alert('Am I connected?');
/*
	alert() --> Function: a group of code that's reusable
	'Am I connected?' --> String: just a chunck of text
	"Am I connected?"

	Argument: the piece of code you pass into a function
*/

/*
	Data types:
	- string: just some text, always in quotes
	- number: 2, 57, 99.9999, -42.8, never in quotes
	- boolean: true/false
*/
//alert(34);
//alert("34");
//alert(true);

/*
	Variables: a container to hold something
*/
var name = "Thomas";
//alert(name); // alert("Thomas");
//alert("name");
//alert("alert('Thomas')");

var age = 30;
var isGuy = true;

var fname = prompt("What's your first name?");
var lname = prompt("What's your last name?");
// + will combine the 2 strings together
// + is called the concatenation operator
//alert("Hello " + fname + " " + lname);

/*
	Control flow: allowing our program to branch and do different things

	If-statement: allows our code to go 1 of 2 directions
		The direction the if-statment is chosen by a condition
		Our condition can be only true or false in a logic sense, e.g.
		My name is Thomas (true)
		Our if-statement will follow the true path or false path

		if (conditional logic) {
			// True path
		} else {
			// False path
		}
*/
if (fname == 'Thomas') {
//	alert("You are cool!");
} else {
//	alert("Oh.. it's you...");
}

/*
	|| is "or"
	"or" is true when 1 of many conditions is met
*/
if (
	fname.toLowerCase() == 'thomas'
	|| fname.toLowerCase() == 'tom'
	|| fname.toLowerCase() == 't'
) {

}

/*
	&& is "and"
	All conditions have to be true
*/
if (fname == "Thomas" && lname == "Bradley") {

}

/*
	Switch statement: like an if-statment but has many paths
*/
switch (fname) {
	case "Thomas":
		// Do something
		break;
	case "Tom":
		// Do something
		break;
	case "Dude":
	case "Dudette":
		// Do something
		break;
	default:
		// Do something when none of the above match
}

/*
	Loop: do some code multiple times

	For loop: loop multiple times if we know how many loops ahead of time
*/
var counter; // The convention is to call it "i"
// counter++ is just a short form for counter = counter + 1
for (counter=0; counter < 10; counter++) {
	document.write('Hello<br>');
}

/*
	While loop: if you don't know ahead of time how many loops to complete
*/
var age;
// ! is "not"
while (!age) {
	age = prompt("What's your age?");
}

// Don't do this; it's really mean!
/*
while (true) {
	alert('Sucker!');
}
*/
