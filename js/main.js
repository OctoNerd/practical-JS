var todoList = { //model
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
		this.todos.forEach(function(todo) {
			if (todo.completed === true) {
				completedTodos++
			}
		});

		this.todos.forEach(function(todo) {
			// If everything is completed, make everything not completed
			if (completedTodos === totalTodos) {
				todo.completed = false;
			} else {
			// otherwise, make everything true
				todo.completed = true;
			}
		});
	}
};

var handlers = { //controller
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
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
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

var view = { //view
	showTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';

		todoList.todos.forEach(function(todo, position) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';

			if (todo.completed === true) {
				todoTextWithCompletion = '(x) ' + todo.text;
			} else {
				todoTextWithCompletion = '( ) ' + todo.text;
			}

			todoLi.id = position;

			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function() {
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
			var elementClicked = event.target;

			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

var helpers = {
	runWithDebugger: function(ourFunction) {
		debugger;
		ourFunction();
	}
}

view.setUpEventListeners();