var TodoView = Backbone.View.extend({
	initialize: function(options){   // if model didn't get passed it throws an error
		if(!(options && options.model)) {
			throw new Error('model is not specified');
		}
	},
	render: function() {
		this.$el.html(this.model.get("description"));
		return this;
	}
});