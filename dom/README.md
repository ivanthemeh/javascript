# Javascript DOM

The DOM—Document Object Model—is the system that Javascript uses to interact with HTML. The DOM is really Javascript’s representation of your HTML document that can be fully manipulated.

### [▶ Video playlist for Javascript DOM]()

---

- [Plain Javascript vs. jQuery](#plain-javascript-vs-jquery)
	- [Including jQuery](#including-jquery)
- [Selecting HTML elements](#selecting-html-elements)
	- [Selecting with plain JS](#selecting-with-plain-js)
		- [Looping over collections in plain JS](#looping-over-collections-in-plain-js)
	- [Selecting with jQuery](#selecting-with-jquery)
		- [Looping over collections in jQuery](#looping-over-collections-in-jquery)
- [Listening to events](#listening-to-events)
	- [Events in plain JS](#events-in-plain-js)
	- [Events in jQuery](#events-in-jQuery)
	- [Event propagation](#event-propagation)
	- [Event delegation](#event-delegation)
- [Manipulating classes](#manipulating-classes)
	- [Naming conventions](#naming-conventions)
	- [Class manipulation with plain JS](#class-manipulation-with-plain-js)
	- [Class manipulation with jQuery](#class-manipulation-with-jquery)
- [Manipulating HTML](#manipulating-html)
- [Form data](#form-data)
	- [Form submission event](#form-submission-event)
	- [Getting form values](#getting-form-values)
		- [Simple values](#simple-values)
		- [Checkboxes](#checkboxes)
		- [Radio buttons](#radio-buttons)
		- [Select elements](#select-elements)
- [Templates](#templates)
	- [Mustache](#mustache)
- [Videos](#videos)
- [Links](#links)

---

## Plain Javascript vs. jQuery

With Javascript in the browser, Javascript’s primary purpose is to manipulate HTML, respond to user events, and manage data.

You can use either plain Javascript or jQuery with you’re developing your website. jQuery doesn’t replace Javascript, you’ll still end up using all of your Javascript knowledge, jQuery just extends and simplifies some of the Javascript tasks.

### Including jQuery

jQuery is simple to use on your website, you just have to include the jQuery Javascript file and you’ll inherit all of jQuery’s functionality.

1. You can download the jQuery file from the website and put it in your `js` folder
2. You can use jQuery’s content delivery network, CDN, to include jQuery

```html
	<!-- Using the downloaded version of jQuery -->
	<script src="js/jquery.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>
```

*Make sure you put jQuery before your own Javascript file.*

**Links**

- [jQuery](http://jquery.com/)

---

## Selecting HTML elements

Since much of what you want to do with Javascript is manipulate HTML, you first need to select the elements using Javascript.

Selecting elements in Javascript is really simple if you know how to select things in CSS—it uses the exact same selector system.

*It’s helpful when beginning to pick one method, plain JS or jQuery, when selecting HTML elements.

### Selecting with plain JS

There are a bunch of different functions for selecting things in plain Javascript.

- `document.getElementById('thing')` — will select an element with the id of `thing`
- `document.getElementsByTagName('div')` — select all the `div` elements on the page
- `document.getElementsByClassName('thang')` — select all the elements with the class of `thang`
- `document.querySelector('.thang')` — will select the first element with the class of `thang`; you can put any CSS selector in there and it will work
- `document.querySelectorAll('.thang')` — will select all the elements with the class of `thang`; you can put any CSS selector in there and it will work

Here’s a couple of examples:

```html
<h1>Heading Level 1</h1>
<div class="thang">
	<p>Text and text and stuff and junk.</p>
	<p class="thing">Lots more texty text stuff.</p>
</div>
```

When selecting things in Javascript it’s a good idea to put the selection into a variable because selecting things causes a performance hit, while reading a variable is fast.

```js
// Get the single <h1>
var theH1 = document.querySelector('h1');
// Get all the <p> tags
var thePTags = document.querySelectorAll('p');
// Get the element with the class of thing
var thing = document.querySelector('.thing');
```

#### Looping over collections in plain JS

When selecting a bunch of elements with `querySelectorAll()`, if you want to manipulate all of them, you’ll have to loop over all elements.

```js
var thePTags = document.querySelectorAll('p');
var i;

for (i = 0; i < thePTags.length; i++) {
	thePTags[i].style.color = 'red';
}
```

**Links**

- [MDN: document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/document.querySelector)
- [MDN: document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/document.querySelectorAll)
- [CSS Tricks: Loop querySelectorAll matches](http://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/)

### Selecting with jQuery

With jQuery, selecting things is the same as Javascript: it uses CSS selectors.

*If you select something using plain JS, you can’t use jQuery functions without selecting it with jQuery. If you select something with jQuery, you can’t use plain JS functions.*

- `$('#thing')` — will select an element with the id of `thing`
- `$('div')` — select all the `div` elements on the page
- `$('.thang')` — will select all the elements with the class of `thang`

#### Looping over collections in jQuery

If you want to apply something to all the elements you selected in jQuery, there are two ways to do it:

1. Directly using the collection
2. Using a loop

```js
var $thePTags = $('p');

// Directly: this will apply the same CSS to all the elements
$thePTags.css('color', 'red');

// A loop
$thePTags.each(function (i) {
	// $(this) refers the current thing inside this loop
	$(this).css('color', 'red');
});
```

*When naming variables in Javascript that contain jQuery objects and collections, it’s common convention to start their name with a `$`.*

**Links**

- [jQuery: Selecting elements](http://learn.jquery.com/using-jquery-core/selecting-elements/)
- [jQuery: Selectors](http://api.jquery.com/category/selectors/)
- [jQuery: .each()](http://api.jquery.com/each/)

---

## Listening to events

When writing Javascript, responding to events is a big part of what your code does. Your code and either respond to user-triggered events or browser-triggered events.

### Events in plain JS

After selecting an element in Javascript we can listen to events on that element, like a click.

```js
var btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
	// All the code here will be executed on every click
});
```

When an event function is executed Javascript passes an argument to the function called the `EventObject`.

The EventObject houses a bunch of important functions and information about the event that was just executed.

```js
var btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
	// Capture the EventObject into the argument named `e`
});
```

### Events in jQuery

Listening to events in jQuery is basically the same, just with a little bit less code:

```js
var $btn = $('.btn');

$btn.on('click', function () {
	// All the code here will be executed on every click
});
```

We could also listen to other events, like key presses:

```js
$('html').on('keydown', function (e) {
	// The number representing the key that was pressed
	console.log(e.keyCode);
});
```

### Event propagation

### Event delegation

---

## Manipulating classes

### Naming conventions

### Class manipulation with plain JS

### Class manipulation with jQuery

---

## Manipulating HTML

---

## Form data

### Form submission event

### Getting form values

#### Simple values

#### Checkboxes

#### Radio buttons

#### Select elements

---

## Templates

### Mustache

---

## Videos

1. [Javascript DOM: selecting HTML elements]()
2. [Javascript DOM: events]()
3. [Javascript DOM: event propagation]()
4. [Javascript DOM: manipulating classes]()
5. [Javascript DOM: manipulating HTML]()
6. [Javascript DOM: form data & events]()
7. [Javascript DOM: templates]()
8. [Javascript DOM: templates & forms]()
9. [Javascript DOM: event delegation]()

## Links

- [jQuery Learning Center](http://learn.jquery.com/)
