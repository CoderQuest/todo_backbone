var TodosView = Backbone.View.extend({
	tagName: "ul",
	id: "todoList",
	initialize: function(options) {
		if (!(options && options.model)) {			// if model didn't get passed it throws an error
			throw new Error("No model specified");
		}
	},
	render: function(){
		var self = this;
		this.model.each(function(todo) {
			var view = new TodoView({model: todo});
			self.$el.append(view.render().$el);
		})
		return this;
	}
});