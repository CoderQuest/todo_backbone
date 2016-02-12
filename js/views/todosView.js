var TodosView = Backbone.View.extend({
	id: 'todoContainer',
	initialize: function(options) {
		// if model didn't get passed it throws an error
		if (!(options && options.model)) { 
			throw new Error("No model specified");
		}
		// subscribing to the add todo event and updates the view	
		this.model.on("add", this.onAddTodo, this); 
	},
	onAddTodo: function(todo) {
		var view = new TodoView({
			model: todo
		});
		var todoLeft = this.model.where({
			isCompleted: false
		}).length
		// adding the new todo to the view
		this.$("#todoList").append(view.render().$el); 
		
		// shows number of todos left
		this.$("#todoLeft").text(todoLeft);
	},
	events: {
		"click #addBtn": "onClickAdd",
		"keypress #newTodo": "onKeyPress",
		"click #markAll": "onClickMarkAll"
	},
	// When "Enter" key is pressed new todo will be added to the list		
	onKeyPress: function(e) { 
		// 13 is the keycode for 'Enter'
		if (e.keyCode === 13) { 
			this.onClickAdd();
		}
	},
	onClickMarkAll: function() {
		// goes through the collection and set all model's isCompleted to true
		this.model.map(function(todo) { 
			todo.set("isCompleted", true)
		});
		// todo left count becomes 0 since everything is marked completed. 
		$("#todoLeft").text(0) 
	},
	onClickAdd: function() {
		var $newTodo = this.$("#newTodo");
		// only add to the todo list if there's no empty string in the input
		if ($newTodo.val()) { 
			var todo = new Todo({
				description: $newTodo.val()
			});
			// add the new todo to the todo collection	
			this.model.add(todo); 
			// clear the text box after the item is added to the list.
			$newTodo.val(""); 
		}
	},
	render: function() {
		var self = this;
		var template = _.template($("#todosTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});