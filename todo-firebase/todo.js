// Using Firebase as a datastore for the todo list
var db = new Firebase('https://todos.firebaseio.com');
var todoField = document.getElementById('todo');
var todoList = document.querySelector('.todo-list');

/*
 * Reads all the todo items in Firebase and outputs them to the page
 * @return void
 */
var generateTodoList = function () {
	db.once('value', function (data) {
		data.forEach(function (item) {
			todoList.appendChild(createTodoLi(item.val(), item.name()));
		});
	})
}

/*
 * Clears the input field after a new item is added
 * @return void
 */
var clearTodoField = function () {
	todoField.value = '';
}

/*
 * Creates a new <li> element using the todo object and its Firebase name
 * @param {Object} todo
 * @param {String} todoName
 * @return {Object} The new <li> DOM reference
 */
var createTodoLi = function (todo, todoName) {
	var newLi = document.createElement('li');
	var delBtn = document.createElement('button');

	delBtn.innerHTML = '✘';
	newLi.innerHTML = todo.text;
	newLi.appendChild(delBtn);
	newLi.setAttribute('data-name', todoName);
	newLi.setAttribute('data-state', todo.state);

	return newLi;
}

/*
 * Adds a new todo to the list by getting the value from the input field
 * - Appends to the <ul>
 * - Appends to the Firebase
 * @return void
 */
var addTodo = function () {
	var todo = {
		text: todoField.value
		, state: ''
	};
	var ref = db.push(todo);
	var newLi = createTodoLi(todo, ref.name());

	clearTodoField();
	todoList.appendChild(newLi);
}

/*
 * Toggles the state of the todo from complete/incomplete
 * In both the <li data-state> and Firebase
 * @param {Object} todoLi
 * @return void
 */
var toggleTodoComplete = function (todoLi) {
	var ref = db.child(todoLi.getAttribute('data-name'));

	if (todoLi.getAttribute('data-state') == 'done') {
		todoLi.setAttribute('data-state', '');
		ref.update({state: ''});
	} else {
		todoLi.setAttribute('data-state', 'done');
		ref.update({state: 'done'});
	}
}

/*
 * Deletes the todo from HTML and Firebase
 * @param {Object} todoLi
 * @return void
 */
var deleteTodo = function (todoLi) {
	var ref = db.child(todoLi.getAttribute('data-name'));
	ref.remove();

	todoLi.parentNode.removeChild(todoLi);
}

generateTodoList();

document.querySelector('.todo-form').addEventListener('submit', function (e) {
	e.preventDefault();
	addTodo();
}, false);

todoList.addEventListener('click', function (e) {
	if (e.target.tagName.toUpperCase() == 'LI') toggleTodoComplete(e.target);
	if (e.target.tagName.toUpperCase() == 'BUTTON') deleteTodo(e.target.parentNode);
}, false);
