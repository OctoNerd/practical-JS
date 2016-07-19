var todoList = {
	// Stores todo list items on an array
	todos: [],
	// Builds a new todo object and adds it to the array
	newTodo: function(text) {
		this.todos.push({
			text: text,
			completed: false
		});
	},
	// Edits the text of a todo by array index number
	editTodo: function(i, newText) {
		this.todos[i].text = newText;
	},
	// Remove one todo at index position 'i'
	deleteTodo: function(i) {
		this.todos.splice(i, 1);
	},
	// Toggles the completed value of a todo object at (position 'i') between true and false
	toggleCompleted: function(i) {
		var todo = this.todos[i];
		todo.completed = !todo.completed;
	},
	// Toggles all items between complete and uncomplete
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		// Get number of complete todos
		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}

		// If everything is completed, make everything not completed
		if (completedTodos === totalTodos) {
			//Make everything false
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
	}
};

var handlers = {
	newTodo: function() {
		var newTodoTextInput = document.getElementById('newTodoTextInput');
		todoList.newTodo(newTodoTextInput.value);
		newTodoTextInput.value = '';
		view.showTodos();
	},
	editTodo: function() {
		var editTodoPositionInput = document.getElementById('editTodoPositionInput');
		var editTodoTextInput = document.getElementById('editTodoTextInput');
		todoList.editTodo(editTodoPositionInput.valueAsNumber, editTodoTextInput.value);
		editTodoPositionInput.value = '';
		editTodoTextInput.value = '';
		view.showTodos();
	},
	deleteTodo: function() {
		var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
		todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
		deleteTodoPositionInput.value = '';
		view.showTodos();
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.showTodos();
	},
	toggleAll: function() {
		todoList.toggleAll();
		view.showTodos();
	}
};

var view = {
	showTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for (var i = 0; i < todoList.todos.length; i++) {
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '# ' + i + ': ' + '(x) ' + todo.text;
			} else {
				todoTextWithCompletion = '# ' + i + ': ' + '( ) ' + todo.text;
			}

			todoLi.textContent = todoTextWithCompletion;
			todosUl.appendChild(todoLi);
		}
	}
};