
var todoList = {
	//Stores todo list items on an array
	todos: [],
	//Displays todos to console:
	showTodos: function() {
		console.log('todos array: ', this.todos);
	},
	//Builds a new todo object with Todo constructor and adds it to the array:
	newTodo: function(text) {
		this.todos.push({
			text: text,
			completed: false
		});
		this.showTodos();
	},
	//Edits the text of a todo by array index number:
	editTodo: function(i, newText) {
		this.todos[i].text = newText;
		this.showTodos();
	},
	//remove one todo at index
	deleteTodo: function(i) {
		this.todos.splice(i, 1);
		this.showTodos();
	}
};

todoList.newTodo("item 1");
todoList.newTodo("item 2");
todoList.newTodo("item 3");
todoList.newTodo("item 4");
