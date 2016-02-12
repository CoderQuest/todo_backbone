var TodosView = Backbone.View.extend({
	initialize: function(options) {
		if (!(options && options.model)) {			// if model didn't get passed it throws an error
			throw new Error("No model specified");
		}
		this.model.on("add", this.onAddTodo, this);  	// subscribing to the add todo event and updates the view	
	},
	onAddTodo: function(todo){
		var view = new TodoView({model: todo});
		var todoLeft = this.model.where({isCompleted: false}).length
		this.$("#todoList").append(view.render().$el);     // adding the new todo to the view
		this.$("#todoLeft").text(todoLeft)
	},
	onTodoLeft: function() {
		// this.$("span#todoLeft").val(this.model.where({isCompleted: false}).length)
	},

	events: {
		"click #addBtn": "onClickAdd"
	},
	onClickAdd: function(){
		var $newTodo = this.$("#newTodo")					
		var todo = new Todo({description: $newTodo.val()})   // creates a new todo
		this.model.add(todo);																// add the new todo to the todo collection
		console.log()	
	},
	render: function(){
		var self = this;
		this.$el.append("<h2>To Do List</h2>")
		this.$el.append("<input type='text' id='newTodo'></input>")
		this.$el.append("<button id='addBtn'>Add item</button>")

		this.$el.append("<ul id='todoList'></ul>")
		this.model.each(function(todo) {
			var view = new TodoView({model: todo});
			self.$el.append(view.render().$el);
		})

		
		this.$el.append("<div>Items left: <span id='todoLeft'> 0 </span> </div>" + "<div>Mark all as complete</div>")
		return this;
	}
});