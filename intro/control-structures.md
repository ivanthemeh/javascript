# Control structures

We always need to control the flow of our code. Some of the ways Javascipt allows us to control program flow is with standard if statements and loops.

---

## If statements

If statements add logic-based control to our code; they allow us to perform one action or another action.

```js
var planet = 'Venus';

// Compare the variable planet to the string ‘Venus’
if (planet == 'Venus') {
  // If planet is equal to ‘Venus’ then execute this code
}
```

- The double equals (==) means compare. It’s best to not use a single equals in an if statement. [Read more about equals](#single-equals-vs-double-equals-vs-triple-equalsequals).
- If statements are always looking for a truthy scenario. The if statement is looking to see if the comparison between the opening and closing parenthesis is true. If the comparison is truthy the if statement is executed.

```js
var planet = 'Earth'
  , hasMoon = true;

// Since the variable is true, we don’t have to compare against true
// The if statement is always checking for a truthy scenario
if (hasMoon) {
  // Execute this code if the scenario is truthy
} else {
  // Execute this code if the scenario is falsey
  // The else leaves us a catch all if the first scenario is falsey
}
```

### And/or

Often it’s helpful to compare multiple situations at once in our if statements. To do this we use ‘or’ and ‘and’ clauses.

```js
var planet = 'Venus'
  , isSecond = true
  , hasMoons = false;

// And: one situation AND the other must be truthy
// And is represented by two ampersands (&&)
if (planet == 'Venus' && isSecond) {
  // This will execute because planet is equal to ‘Venus’ and isSecond is also truthy
}

if (planet == 'Venus' && hasMoons) {
  // This will not execute because only the first scenario is truthy
}

// Or: one situation OR the other must be truthy
// Or is represented by two vertical pipes (||)
if (planet == 'Venus' || isSecond) {
  // This will execute because both situations are truthy
}

if (planet == 'Mercury' || planet == 'Venus') {
  // This will execute because one of the two situations is truthy
}

if (hasMoons || isSecond) {
  // This will execute because one of the two situations is truthy
}

if (hasMoons || planet == 'Mercury') {
  // This will not execute because neither situation is truthy
}
```

### Not equal

We can also compare to see if two things are not equal.

```js
var planet = 'Venus'
  , isSecond = true
  , hasMoons = false;

// Not equals is represented by an exclamation point and equals (!=)
if (planet != 'Mercury') {
  // This will execute because it is true that planet is not equal to ‘Mercury’
}

if (planet != 'Venus') {
  // This will not execute because planet is equal to ‘Venus’
}

// Not is represented by an exclamation point (!)
// The below could be read as ‘has moons is not equal to true’ or ‘not has moons’
if (!hasMoons) {
  // This will execute because this scenario is truthy, hasMoons is not equal to true
}

if (!isSecond) {
  // This will not execute because isSecond is true, not false
}

if (!hasMoons && planet == 'Venus') {
  // This will execute because both scenarios are truthy
}
```

### Single equals vs. double equals vs. triple equals

Equals can be used in a series of up to three in Javascript, each meaning slightly different things and acting differently.

1. single equals means ‘set’
	```js
	var planet = 'Mars';
	```

2. double equals means ‘compare’
	```js
	if (planet == 'Mars') {}
	```

3. triple equals means ‘compare exactly’
	```js
	// Will compare the value of planet to see if it equals ‘Mars’ and that the value is a string
	if (planet === 'Mars') {
	  // This will be executed because planet is a string and it’s equal to ‘Mars’
	}

	// Will compare to see if the value of planet is truthy
	if (planet == true) {
	  // This will execute because the value of planet is truthy
	  // Check out type coercion for more details
	}

	// Will compare the value of planet to see if it’s true and to see if it is a boolean
	if (planet === true) {
	  // This will not execute because planet is not exactly ‘true’
	}
	```

### Type coercion

Type coercion occurs inside the if statement when trying to get a truthy value. Since Javascript is a dynamically interpreted language certain, values are coerced to boolean, becoming true or false.

<table>
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Coerced boolean</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><code>0</code></td><td><code><b>false</b></code></td></tr>
    <tr><td><code>0.0</code></td><td><code><b>false</b></code></td></tr>
    <tr><td><code><span>''</span></code></td><td><code><b>false</b></code></td></tr>
    <tr><td><code><span>'0'</span></code></td><td><code><b>false</b></code></td></tr>
    <tr><td><code>[]</code></td><td><code><b>false</b></code></td></tr>
    <tr><td><code><b>null</b></code></td><td><code><b>false</b></code></td></tr>
    <tr><td><code><b>undefined</b></code></td><td><code><b>false</b></code></td></tr>
    <tr><td><code>1</code></td><td><code><b>true</b></code></td></tr>
    <tr><td><code>-1</code></td><td><code><b>true</b></code></td></tr>
    <tr><td><code>3e8</code></td><td><code><b>true</b></code></td></tr>
    <tr><td><code><span>'Mars'</span></code></td><td><code><b>true</b></code></td></tr>
    <tr><td><code><span>'false'</span></code></td><td><code><b>true</b></code></td></tr>
    <tr><td><code>[1]</code></td><td><code><b>true</b></code></td></tr>
  </tbody>
</table>

- If it’s not in the list, chances are it will be coerced to true.

```js
var planet = 'Mars';

if ('Mars') {} // True

if (planet) {} // True

if (0.0) {} // False
```

---

## Switch

Javascript has another control structure that has a similar purpose to the if statement but allows multiple scenarios.

```js
var planet = 'Venus';

// The switch statement is used when there are many different paths for your code
switch (planet) {
  case 'Mercury' :
    // If planet is ‘Mercury’ this code will be executed
    break;

  case 'Venus' :
    // If planet is ‘Venus’ this code will be executed
    break;

  case 'Mars' :
    // If planet is ‘Mars’ this code will be executed
    break;
}
```

The switch statement also has an ‘else’ like mechanism: `default`.

```js
var planet = 'Venus';

switch (planet) {
  case 'Mercury' :
    // If planet is ‘Mercury’ this code will be executed
    break;

  case 'Venus' :
    // If planet is ‘Venus’ this code will be executed
    break;

  default :
    // If none of the above conditions are met this code will be executed
    // Default must always be last, like else
    break;
}

// We can also group pieces of code together for when multiple situations are satisfied by the same code, like an ‘or’
// The break keyword stops the case from grouping with the one below
switch (planet) {
  case 'Mercury' :
    // If planet is ‘Mercury’ this code will be executed
    break;

  case 'Venus' :
  case 'Mars' :
    // If planet is ‘Venus’ or ‘Mars’ this code will be executed
    break;

  case 'Earth' :
  default :
    // If planet is ‘Earth’ or anything else
    break;
}
```

---

## Loops

Programming languages provide mechanisms for repeating a section of code: loops. There are a bunch of different loop types in Javascript—the for loop is popular.

### For loop

For loops are fast and great if we know exactly how many items we have to loop through.

```js
// Let’s create a loop that repeats 5 times
for (var i = 0; i < 5; i++) {
  // The code in here will be executed 5 times
}

// Inside the loop declaration we define how the loop performs
// There should be three expressions, each separated by a semi-colon
//   for (expression 1; expression 2; expression 3)

// Expression 1: executed once before the loop starts
for (var i = 0; …; …) {}
// We are creating a variable named i, that tracks what iteration we are currently on

// Expression 2: executed at each iteration,
//   if true the loop continues
for (…; i < 5; …) {}
// We are checking to see if i is less than 5, if so, we continue the loop

// Expression 3: executed after each iteration
for (…; …; i++) {}
// Increment i by 1 each pass through the loop
```

A very common use for loops is running through all the items in a collection, like an array.

```js
var planets = ['Mercury', 'Venus', 'Earth', 'Mars'];

// The first question we should ask ourselves is:
//   How many times do we have to perform the loop?
// Using the above array, the answer is 4, but it’s often best to get Javascript to count for us
// Use Javascript’s .length property to get the total items in the array
for (var i = 0; i < planets.length; i++) {
  // The code in here will be executed once for each array item

  // Since our array has integers as keys, we can use i to directly access each item
  console.log(planets[i]);
}
```

Using the `.length` property inside the second expression—every time through the loop—isn’t efficient. It is much better to count the array once before we start the loop.

```js
var planets = ['Mercury', 'Venus', 'Earth', 'Mars'];

// Create a variable outside the loop to hold the total
var total = planets.length;
for (i = 0; i < total; i++) {}
```

### While loop

While loops are for when you don’t know exactly how many times you have to loop. They have a syntax similar to if statements where you use logic to determine if the loop should continue.

```js
var favPlanet;

// This loop will keep prompting the user until they type something into the prompt field
// As long as favPlanet coerces to a falsey value the loop will continue
while (!favPlanet) {
  favPlanet = prompt("What's your favourite planet?");
}
```

---

## Resources & tutorials

- [**Dev.Mozilla: Language reference**](https://developer.mozilla.org/en/JavaScript)
- [Dev.Mozilla: For](https://developer.mozilla.org/en/JavaScript/Reference/Statements/for)
- [Dev.Mozilla: If](https://developer.mozilla.org/en/JavaScript/Reference/Statements/if...else)
- [WikiBooks: Javascript](http://en.wikibooks.org/wiki/JavaScript/Control_Structures)
- [Eloquent Javascript: Chapter 2](http://www.amazon.ca/dp/1593272820/)
- [ThinkVitamin: Javascript](http://membership.thinkvitamin.com/library/javascript)
- [Javascript: The Good Parts: Chapters 2](http://www.amazon.ca/dp/0596517742/)
