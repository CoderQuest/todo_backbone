var TodosView = Backbone.View.extend({
	render: function(){
		var self = this;
		this.model.each(function(todo) {
			var view = new TodoView({model: todo});
			self.$el.append(view.render().$el);
		})
		return this;
	}
});