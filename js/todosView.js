var TodosView = Backbone.View.extend({
	tagName: "ul",
	id: "todoList",
	initialize: function(options) {
		if (!(options && options.model)) {			// if model didn't get passed it throws an error
			throw new Error("No model specified");
		}
		this.model.on("add", this.onAddTodo, this);  	// subscribing to the add todo event and updates the view	
	},
	onAddTodo: function(todo){
		var view = new TodoView({model: todo});
		this.$el.append(view.render().$el);     // adding the new todo to the view
	},

	events: {
		"click #addBtn": "onClickAdd"
	},
	onClickAdd: function(){
		var $newTodo = this.$("#newTodo")					
		var todo = new Todo({description: $newTodo.val()})   // creates a new todo
		this.model.add(todo);																// add the new todo to the todo collection	
	},
	render: function(){
		var self = this;
		this.$el.append("<h2>To Do List</h2>")
		this.$el.append("<input type='text' id='newTodo'></input>")
		this.$el.append("<button id='addBtn'>Add item</button>")
		this.model.each(function(todo) {
			var view = new TodoView({model: todo});
			self.$el.append(view.render().$el);
		})
		return this;
	}
});