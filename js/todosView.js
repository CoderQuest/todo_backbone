var TodosView = Backbone.View.extend({
	tagName: "ul",
	id: "todoList",
	initialize: function(options) {
		if (!(options && options.model)) {			// if model didn't get passed it throws an error
			throw new Error("No model specified");
		}
	},
	events: {
		"click #addBtn": "onClickAdd"
	},
	onClickAdd: function(){
		// var $newTodo = this.$("#newTodo")
		// var todo = new Todo({description: $newTodo.val()})
		// this.model.add(todo);
	},
	render: function(){
		var self = this;
		this.$el.append("<input type='text' id='newTodo'></input>")
		this.$el.append("<button id='addBtn'>Add item</button>")
		this.model.each(function(todo) {
			var view = new TodoView({model: todo});
			self.$el.append(view.render().$el);
		})
		return this;
	}
});