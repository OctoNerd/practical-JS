
var todoList = {
	todos: [],

}

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

//Displays todos to console:
function showTodos() {
	console.log('todos array: ', todos);
}

//Edits the text of a todo by array index number:
function editTodo(i, newText) {
	todos[i].text = newText;
}

//Remove one todo at index i:
function deleteTodo(i) {
	todos.splice(i, 1);
}