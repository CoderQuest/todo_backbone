var Todos = Backbone.Collection.extend({
	model: Todo,
	initialize: function() {
		this.on('delete', this.remove);
	}
});