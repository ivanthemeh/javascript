# Syntax, variables & data types

The Javascript syntax is very similar to other popular languages including [PHP], [Perl] and [Java]—they all share the same structure of parenthesis, brackets, and semi-colons.

---

Mozilla has great documentation for the Javascript language. Check out the [Mozilla Developer Documentation][MDN] for more in-depth material.

## Comments

Comments are great for helping write documentation or even debugging—Javascript has two flavours of comments.

```js
// Single line comments
/*
  Multi-line
  comments
*/
```

## Variables

Javascript is a dynamic language, you don’t have to declare what data type your variable will hold before assigning it a value. Use the var keyword to define and create a new variable.

- Remember, variables are just named containers that hold some data for us. We can retrieve that data later using the variable’s name.

```js
// Create a new variable and set its value
var closestStar = 'Proxima Centauri';
```

- Variable names must start with a letter (a–z or A–Z), underscore (_), or dollar sign ($) and should only contain letters, numbers (0–9), underscores, and dollar signs.
- Variable names *are* case-sensitive.
- The naming convention in Javascript is to use camel case to distinguish words.

```js
// Multiple variables can be declared with one var keyword
// Use a comma (,) to separate the declarations
var closestStar = 'Sun'
  , nextClosestStar = 'Proxmia Centauri'
;
```

## Data types

There are some basic data types in Javascript that you should be familiar with.

```js
// Numbers: integer or float (decimal)
var totalPlanets = 8
  , moonTemperature = -153
  , axialTilt = 23.4
  , lightSpeed = 3e8
;

// Booleans: true/false (yes/no)
var hasWater = true
  , isHabitable = false
;

// Strings: basic text and words
// Single (') or double quotes (") can be used
var galaxy = 'Milky Way'
  , closestGalaxy = "Canis Major Dwarf"
;
```

### Arrays

Arrays contain a collection of items in a specific order. Each item in an array is referenced using an integer. If you’re familiar with HTML you could compare arrays to ordered lists `<ol>`.

```js
// New empty array
var planets = [];
// An array with elements inside
planets = ['Jupiter', 'Saturn', 'Neptune'];

// Items in an array are referenced by their key
// The key will be an integer, starting at 0
// Get the first item from the array
planets[0]; // Jupiter
// Get the third item from the array (the numbers start at 0)
planets[2]; // Neptune

// Replace the item at key 3
planets[3] = 'Venus';
// Add a new item to the end of an array
planets.push('Mercury');

// Remove the last item from our array
var lastLast = planets.pop();
// Add a new item to the start of an array
planets.unshift('The Sun');
// Remove an item from the start of an array
var firstPlanet = planets.shift();

// Delete an item from an array
delete planets[2];

// Count how many items are in the array
planets.length; // 4
```

### Objects

Objects are a way to create a group of variables. Objects are a collection with properties and values. If you’re familiar with HTML, objects are comparable to the description list `<dl> <dt> <dd>`.

```js
// Create a new empty object
var planetEarth = {};

// Create properties inside of an object
// Properties can be anything we want
// Separate each property with a comma (,)
planetEarth = {
  population : 6.5e9
  , numberMoons : 1
  , starSystem : 'Solar'
};

// Get the property from the object with the name ‘population’
planetEarth.population; // 6.5e9
// Add/replace the property with the name ‘diameter’
planetEarth.diameter = 12756;
// Remove a property from an object
delete planetEarch.numberMoons;

// Objects can even have arrays inside them
// And other objects!
var solarSystem = {
  innerPlanets : ['Mercury', 'Venus', 'Earth', 'Mars']
  , sunFacts : { diameter : 1392000, mass : 2e30 }
};

// There is an alternative syntax for accessing properties
//   it can be used when the property contains invalid characters
planetEarth['semi-major axis'];
// Or when the property name is stored in a variable
var propName = 'starSystem';
planetEarth[propName]; // Solar
```

## Operators

The operators in Javascript are fairly consistent with many other languages.

```js
// Addition: with +
var add = 1 + 2
  , number += 2 // Add to what’s already in number
;
number++; // Increment: add 1 to what’s already in number

// Subtraction: with -
var minus = 2 - 1;
number -= 2; // Minus from what’s already in number
number--; // Decrement: subtract 1 from what’s already in number

// Multiplication: with *
var times = 1 * 2;
number *= 2; // Multiply what’s already in number

// Division: with /
var divide = 4 / 2;
number /= 2; // Divide what’s already in number

// Modulus: with %
var remainder = 4 % 2; // Return the remainder after division
number %= 2; // Get remainder with what’s already in number
```

### String joining

Javascript, as with many modern programming languages, allows you to join together multiple strings and variables. To combine strings and variables in Javascript use the plus (+).

```js
// Use the plus (+) to join strings and variables
var galaxy = 'Milky Way'
  , ourGalaxy = galaxy + ' is our galaxy.' // Milky Way is our galaxy.
;

// Join two variables together
var words = ' is our galaxy.';
ourGalaxy = galaxy + words; // Milky Way is our galaxy.

// Use += to add onto a string
galaxy += words; // Milky Way is our galaxy.
```

- The plus is called a string concatenator.

## Debugging

Often we need to debug code and write out our variables to see what’s inside them. Most modern browsers include a console a logging mechanism.

```js
var planet = 'Uranus'
  , planets = ['Jupiter', 'Saturn', 'Neptune']
;

// console.log() will write out the contents of a variable
//   into a special browser window panel called the console
console.log(planet); // Uranus
console.log(planets); // [Jupiter, Saturn, Neptune]
```

---

## Semicolons

In Javascript, not all instructions require a semicolon (;) at the end of the statement. The Javascript language uses Automatic Semicolon Insertion, but it can be tricky.

- [Are semi-colons necessary in Javascript?](http://aresemicolonsnecessaryinjavascript.com/)
- [Semicolons in Javascript are Optional](http://mislav.uniqpath.com/2010/05/semicolons/)
- [Javascript semicolon insertion: everything you need to know](http://inimino.org/~inimino/blog/javascript_semicolons)

---

## Resources & Tutorials

- [**Dev.Mozilla: Language reference**](https://developer.mozilla.org/en/JavaScript)
- [Dev.Mozilla: Variables and values](https://developer.mozilla.org/en/JavaScript/Guide/Values%2c_Variables%2c_and_Literals)
- [Dev.Mozilla: Objects](https://developer.mozilla.org/en/JavaScript/Guide/Working_with_Objects)
- [Dev.Mozilla: Operators](https://developer.mozilla.org/en/JavaScript/Guide/Expressions_and_Operators)
- [ThinkVitamin: Javascript](http://membership.thinkvitamin.com/library/javascript)
- [WikiBooks: Javascript Variables & Types](http://en.wikibooks.org/wiki/JavaScript/Variables_and_Types)
- [WikiBooks: Javascript Operators](http://en.wikibooks.org/wiki/JavaScript/Operators)
- [Javascript: The Good Parts: Chapters 2, 3 & 6](http://www.amazon.ca/dp/0596517742/)
- [Codecademy](http://www.codecademy.com/)
- [**Eloquent Javascript: Chapters 1 & 3**](http://www.amazon.ca/dp/1593272820/)
- [A Re-introduction to the Chrome Developer Tools](http://paulirish.com/2011/a-re-introduction-to-the-chrome-developer-tools/)

[PHP]: http://en.wikipedia.org/wiki/PHP
[Perl]: http://en.wikipedia.org/wiki/Perl
[Java]: http://en.wikipedia.org/wiki/Java_(programming_language)
[MDN]: https://developer.mozilla.org/en/JavaScript
