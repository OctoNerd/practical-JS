//array to hold list of todos
var todos = [];

//constructor to add an item to todo array
function Todo(text) {
	this.text = text;
	this.completed = false;
}

//Builds a new todo with Todo constructor and adds it to the array
function newTodo(text) {
	var t = new Todo(text);
	todos.push(t);
}

//Edits the text of a todo by index number
function editTodo(i, newText) {
	todos[i].text = newText;
}