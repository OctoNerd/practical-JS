
var todoList = {
	//Stores todo list items on an array
	todos: [],
	//Displays todos to console:
	showTodos: function() {
		console.log('todos array: ', this.todos);
	},
	//Builds a new todo object with Todo constructor and adds it to the array:
	newTodo: function(text) {
		var t = new Todo(text);
		this.todos.push(t);
	}

};

//constructor to add an item to todo array:
function Todo(text) {
	this.text = text;
	this.completed = false;
}

//Builds a new todo object with Todo constructor and adds it to the array:
function newTodo(text) {
	var t = new Todo(text);
	todos.push(t);
}

//Edits the text of a todo by array index number:
function editTodo(i, newText) {
	todos[i].text = newText;
}

//Remove one todo at index i:
function deleteTodo(i) {
	todos.splice(i, 1);
}