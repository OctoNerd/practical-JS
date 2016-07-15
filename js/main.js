
var todoList = {
	// Stores todo list items on an array
	todos: [],
	// Displays todos to console
	showTodos: function() {
		if (this.todos.length === 0) {
			console.log('Todo list is empty');
		} else {
			console.log('My Todos: ')
			for (var i = 0; i < this.todos.length; i++) {
				console.log('Todo ' + i + ': ' + this.todos[i].text);
			}
		}
	},
	// Builds a new todo object with Todo constructor and adds it to the array
	newTodo: function(text) {
		this.todos.push({
			text: text,
			completed: false
		});
		this.showTodos();
	},
	// Edits the text of a todo by array index number
	editTodo: function(i, newText) {
		this.todos[i].text = newText;
		this.showTodos();
	},
	// Toggles the completed value of a todo object at (position 'i') between true and false
	toggleCompleted: function(i) {
		var todo = this.todos[i];
		todo.completed = !todo.completed;
		this.showTodos();
	},
	// Remove one todo at index position 'i'
	deleteTodo: function(i) {
		this.todos.splice(i, 1);
		this.showTodos();
	}
};
