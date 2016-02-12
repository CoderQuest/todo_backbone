var TodoView = Backbone.View.extend({
	tagName: "li",
	initialize: function(options){   
		if (!(options && options.model)) {			// if model didn't get passed it throws an error
			throw new Error("No model specified");
		}

	},
	render: function() {
		this.$el.html("")
		this.$el.html("<input type='checkbox'></input> " + this.model.get("description"));
		return this;
	}
});