var TodosView = Backbone.View.extend({
	id: 'todoContainer',
	initialize: function(options) {
		if (!(options && options.model)) { // if model didn't get passed it throws an error
			throw new Error("No model specified");
		}
		this.model.on("add", this.onAddTodo, this); // subscribing to the add todo event and updates the view	
	},
	onAddTodo: function(todo) {
		var view = new TodoView({
			model: todo
		});
		var todoLeft = this.model.where({
			isCompleted: false
		}).length
		this.$("#todoList").append(view.render().$el); // adding the new todo to the view
		this.$("#todoLeft").text(todoLeft)
	},
	events: {
		"click #addBtn": "onClickAdd",
		"keypress #newTodo": "onKeyPress",
		"click #markAll": "onClickMarkAll"
	},
	onKeyPress: function(e) { // When "Enter" key is pressed new todo will be added to the list		
		if (e.keyCode === 13) { // 13 is the keycode for 'Enter'
			this.onClickAdd();
		}
	},
	onClickMarkAll: function() {
		this.model.map(function(todo) { // goes through the collection and set all model's isCompleted to true
			todo.set("isCompleted", true)
		});
		$("#todoLeft").text(0) // Items left count becomes 0 since everything is marked completed. 
	},
	onClickAdd: function() {
		var $newTodo = this.$("#newTodo");
		if ($newTodo.val()) { // only add to the todo list if there's no empty string in the input
			var todo = new Todo({ 
				description: $newTodo.val()
			});
			this.model.add(todo); // add the new todo to the todo collection	
			$newTodo.val(""); // clear the text box after the item is added to the list.
		}
	},
	render: function() {
		var self = this;
		this.$el.append("<h2 id='todoTitle'>To Do List</h2>")
		this.$el.append("<div id='inputContainer'><input type='text' id='newTodo'></input><button id='addBtn'>Add item</button></div>")
		this.$el.append("<ul id='todoList'></ul>")
		this.model.each(function(todo) {
			var view = new TodoView({
				model: todo
			});
			self.$el.append(view.render().$el);
		})

		this.$el.append("<div>Items left: <span id='todoLeft'> 0 </span> </div> <div id='markAll'>Mark all as complete</div>")

		return this;
	}
});