# Javascript effects

Common Javascript effects used on websites: triggering animations, scrolling effects, smooth scrolling, and waypoints.

### [▶ Video playlist for Javascript effects](https://www.youtube.com/watch?v=8NcbPhLulas&list=PLWjCJDeWfDdfAAbxA-H5XHQlGoLICyHe_)

---

- [Triggering CSS animations](#triggering-css-animations)
	- [Triggering transitions](#triggering-transitions)
	- [Listening for animations to end](#listening-for-animations-to-end)
		- [Transition end](#transition-end)
- [Scrolling animations](#scrolling-animations)
	- [Waypoints](#waypoints)
		- [Waypoint offsets](#waypoint-offsets)
		- [Waypoint direction](#waypoint-direction)
- [Smooth scroll](#smooth-scroll)
- [Videos](#videos)
- [Links](#links)

---

## Triggering CSS animations

CSS animations can be triggered by Javascript simply by storing the `animation` property in a class.

```css
.box {
	/* What ever properties here, just not `animation` */
}

.js-animate {
	animation: do-stuff 200ms linear;
}

@keyframes do-stuff {
	⋮
}
```

In our Javascript all we have to do is assign the appropriate class to the element:

```js
var $box = $('.box');

$box.addClass('js-animate');
```

If we try to trigger the animation again by re-adding the class the animation won’t work—because the class is already there.

If we remove the animation class the animation stops immediately, but after the class has been removed we can add the class again to trigger the animation. 

### Triggering transitions

We can also trigger transitions by setting them up in the default state for the element, then when its properties change, the transition will automatically trigger.

```css
.box {
	opacity: 0;
	transition: all 200ms linear;
}

.js-box-fade {
	opacity: 1;
}
```

All the Javascript needs to do is add the `js-box-fade` class, then the `transition` will just automatically trigger.

### Listening for animations to end

Sometimes it’s helpful to listen for when the animation completes—this is a good place to remove the class from the element.

```js
var $box = $('.box');

$box.on('animationend', function () {
	// This function will execute when the animation ends
	// Would be a good place to remove the class from the element
});
```

We probably need to worry about vendor prefixes in the above code, the same as when creating keyframes.

```js
var $box = $('.box');

$box.on('webkitAnimationEnd animationend', function () {
	// Notice the `webkitAnimationEnd` above
	// The vendor prefixed version of the event and the original will be listened to
});
```

### Transition end

We can, of course, also listen for transition end, with the `transitionend` event. The Javascript code is exactly the same as for animations:

```js
var $box = $('.box');

$box.on('transitionend', function () {
	
});
```

**Links**

- [MDN: transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
- [MDN: animationend](https://developer.mozilla.org/en-US/docs/Web/Events/animationend)
- [Animating List Items](https://cssanimation.rocks/list-items/)
- [Animate.css](http://daneden.github.io/animate.css/)

---

## Scrolling animations

With Javascript we can detect lots of things happening to the browser, specifically what happens to the window.

The browser window fires a bunch of events that we can listen to. The ones I use most often are `resize` and `scroll`.

```js
var $win = $(window);

$win.on('scroll', function () {
	// This event will be fired every time the browser scrolls
});
```

Using a property of the the window: `scrollTop`, we can figure out how far from the top the browser has scrolled.

```js
var $win = $(window);

$win.on('scroll', function () {
	// Will give use a number, in pixels, that the browser has scrolled down
	var topPixels = $win.scrollTop();
});
```

We can use the `scrollTop` number to manipulate elements on the page, like rotate them, etc.

### Waypoints

Using waypoints we can trigger something when the browser scrolls to a specific location. It is much easier if we use the [jQuery Waypoints](http://imakewebthings.com/waypoints/) plugin.

```html
⋮
<img class="thing" src="#" alt="">
⋮
```

If this `img` is further down the page, we can use Waypoints to do something to it at a specific point in time.

First include that script on your page, either by downloading it or using a content delivery network like [cdnjs](https://cdnjs.com/).

```html
	<script src="js/jquery.min.js"></script>
	<!-- It's important that Waypoints comes after jQuery because it depends on jQuery to function -->
	<script src="js/jquery.waypoints.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>
```

In our Javascript we can now detect when an element scrolls to the top of the page.

```js
var $img = $('.thing');

$img.waypoint(function () {
	// Code will be executed when the image reaches the top of the screen
});
```

#### Waypoint offsets

If we want to execute the function before the element reaches the top, we can use an offset:

```js
var $img = $('.thing');

$img.waypoint(function () {
	// Executed when the image reaches halfway up
}, { offset: '50%' });
```

Notice the `offset` on the last line of code, with `50%` the element would be halfway up the screen for the function to execute.

#### Waypoint direction

We can also detect whether the browser is scrolling up or down using Waypoints.

The function callback will pass an argument that includes the direction the browser is traveling—we just have to capture it.

```js
var $img = $('.thing');

$img.waypoint(function (direction) {
	if (direction == 'down') {
		// Do something when scrolling down
	}

	if (direction == 'up') {
		// Do something when scrolling up
	}
}, { offset: '50%' });
```


**Links**

- [jQuery Waypoints](http://imakewebthings.com/waypoints/)

---

## Smooth scroll

A very common pattern in websites is smooth scrolling: when you click on the top navigation the browser slowly animates down to the appropriate section.

The most reliable plugin I’ve found to do that is [LocalScroll by Ariel Flesler](http://flesler.blogspot.ca/2007/10/jquerylocalscroll-10.html).

First include the LocalScroll plugin and its companion ScrollTo—order is important. *Either download it to your website or use a CDN.*

```html
	<!-- Must come first -->
	<script src="js/jquery.min.js"></script>
	<!-- Must come after jQuery because it uses jQuery -->
	<script src="js/jquery.scrollTo.min.js"></script>
	<!-- Must come after ScrollTo because it uses ScrollTo -->
	<script src="js/jquery.localScroll.min.js"></script>
	<!-- Must come last because our code needs all the above scripts -->
	<script src="js/main.js"></script>
</body>
</html>
```

The HTML setup is no different than normal HTML with internal links:

```html
<ul class="nav">
	<li><a href="#plant-eaters">Plant Eaters</a></li>
	<li><a href="#meat-eaters">Meat Eaters</a></li>
</ul>

<section id="plant-eaters"></section>

<section id="meat-eaters"></section>
```

In our Javascript, we only need one line of code:

```js
$('.nav').localScroll();
```

*It’s important that when using LocalScroll you target the parent that includes all the `<a>` tags—not the `<a>` tag directly. Targeting the link directly won’t work with LocalScroll.*

**Links**

- [LocalScroll](http://flesler.blogspot.ca/2007/10/jquerylocalscroll-10.html)
- [ScrollTo](http://flesler.blogspot.ca/2007/10/jqueryscrollto.html)

---

## Videos

1. [Javascript effects: triggering animations](https://www.youtube.com/watch?v=8NcbPhLulas&index=1&list=PLWjCJDeWfDdfAAbxA-H5XHQlGoLICyHe_)
2. [Javascript effects: listening for the animation to end](https://www.youtube.com/watch?v=Ja0YxV-DCsE&index=2&list=PLWjCJDeWfDdfAAbxA-H5XHQlGoLICyHe_)
3. [Javascript effects: scrolling animations](https://www.youtube.com/watch?v=nhHqiGCG10E&index=3&list=PLWjCJDeWfDdfAAbxA-H5XHQlGoLICyHe_)
4. [Javascript effects: waypoints](https://www.youtube.com/watch?v=5hPVpVtgle4&index=4&list=PLWjCJDeWfDdfAAbxA-H5XHQlGoLICyHe_)
5. [Javascript effects: smooth scrolling](https://www.youtube.com/watch?v=OkmwkrSEBMo&index=5&list=PLWjCJDeWfDdfAAbxA-H5XHQlGoLICyHe_)

## Links

- [cdnjs](https://cdnjs.com/)