var Todos = Backbone.Collection.extend({
	model: Todo,
	todoLeft: function() {
		this.where({isCompleted: false}).length
	}
});