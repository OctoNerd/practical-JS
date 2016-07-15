//array to hold list of todos
var todos = [];

//Displays todos to console
function showTodos() {
	console.log(todos);
}

//constructor to add an item to todo array:
function Todo(text) {
	this.text = text;
	this.completed = false;
}

//Builds a new todo with Todo constructor and adds it to the array:
function newTodo(text) {
	var t = new Todo(text);
	todos.push(t);
}

newTodo("asdf");
newTodo(";lkj");
newTodo("a;sld");
newTodo("esdf");
newTodo("wlkj");
newTodo("q;sld");

//Edits the text of a todo by index number:
function editTodo(i, newText) {
	todos[i].text = newText;
}

//Remove one todo at index i:
function deleteTodo(i) {
	todos.splice(i, 1);
}